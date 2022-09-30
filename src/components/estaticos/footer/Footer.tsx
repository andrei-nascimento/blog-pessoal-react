import React from "react";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Box, Grid} from '@material-ui/core';
import './Footer.css';

function Footer() {
    return(
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='box1'>

                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant ="h5" align="center" gutterBottom className='texto1'>Confira nossas redes sociais</Typography>
                        </Box>

                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.facebook.com/nubank" target="_blank">
                                <FacebookIcon className='redes' />
                            </a>
                            <a href="https://www.instagram.com/nubank/" target="_blank">
                                <InstagramIcon className='redes' />
                            </a>
                            <a href="https://www.linkedin.com/company/nubank/" target="_blank">
                                <LinkedInIcon className='redes' />
                            </a>
                        </Box>
                    </Box>
                    <Box className='box2'>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className='texto2'>© 2020 Copyright</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://nubank.com.br/">
                                <Typography variant="subtitle2" gutterBottom className='texto2' align="center">nubank.com.br</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;