import React from "react";
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Box, Grid} from '@material-ui/core';
import './Footer.css';
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokenReducer";

function Footer() {

    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
    );

    let footerComponent;
    if(token !== '') {
        footerComponent = <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid alignItems="center" item xs={12}>
            <Box className='box1'>

                <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                    <Typography variant ="h5" align="center" gutterBottom className='texto1'>Confira minhas redes sociais:</Typography>
                </Box>

                <Box className='social'>
                    <a href="https://github.com/andrei-nascimento" target="_blank">
                        <GitHubIcon className='github' />
                    </a>
                    <a href="https://www.instagram.com/andrei_thrash/" target="_blank">
                        <InstagramIcon className='redes' />
                    </a>
                    <a href="https://www.linkedin.com/in/andrei-lima-nascimento/" target="_blank">
                        <LinkedInIcon className='redes' />
                    </a>
                </Box>
            </Box>
            <Box className='box2'>
                <Box paddingTop={1}>
                    <Typography variant="subtitle2" align="center" gutterBottom className='texto2'>© 2022 Copyright</Typography>
                </Box>
                <Box>
                    <a target="_blank" href="https://brazil.generation.org/">
                        <Typography variant="subtitle2" gutterBottom className='texto2' align="center">brazil.generation.org</Typography>
                    </a>
                </Box>
            </Box>
        </Grid>
    </Grid>
    }

    return(
        <>
            {footerComponent}
        </>
    )
}

export default Footer;