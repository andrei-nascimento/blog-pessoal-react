import React from 'react';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import imgPrincipal from './img/principal.png';
import './Home.css';

function Home() { 
  return (
    <> 
      <Grid container direction="row" justifyContent="center" alignItems="center" style={{backgroundColor:"white"}}>
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20}>
            <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{color:"#8a2be2", fontWeight:"bold"}}>Seja bem-vinde!</Typography>
            <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{color:"grey", fontWeight:"bold"}}>Fique à vontade para expressar seus pensamentos e opiniões</Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
            </Box>
            <Button variant="outlined" style={{borderColor:"#8a2be2", backgroundColor:"#8a2be2", color:"white"}}>Ver Postagens</Button>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img src={imgPrincipal} alt="imagem menu" width="500px" height="500px"/>
        </Grid>
        <Grid xs={12} style={{backgroundColor:"#8a2be2"}}>
        </Grid>
      </Grid>
    </>
  )
}

export default Home;