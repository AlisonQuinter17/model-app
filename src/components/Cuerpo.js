import React, { useState } from 'react';
import './Estilos/Cuerpo.css';
import { Grid, Button, Dialog, Box, IconButton } from '@material-ui/core';
import MotoBreakout from './Imagenes/MotoBreakout.png';
import MotoFatboyHarley from './Imagenes/MotoFatboyHarley.PNG';
import TrikeFreewheeler from './Imagenes/TrikeFreewheeler.png';
// import ThreeScene from './Modelos/ThreeScene';

function Cuerpo() {
  // const initialState = {
  //   primero: 'Moto Breakout 2021',
  //   segundo: 'Fat Boy 2021',
  //   tercero: 'Trike Free Wheeler 2021',
  //   cuarto: 'Trike Free Wheeler 2021'
  // };
  const [open, setOpen] = useState(false);
  // const [nameMoto, setNameMoto] = useState(initialState);

  // const HandleInputChange = (e) => {
  //   setNameMoto({ ...nameMoto, [e.target.name]: e.target.value });
  //   console.log('nameMoto: ', nameMoto);
  // };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="personalizarcuerpo">
        <Grid container spacing={8}>
          <Grid item xs={3}>
            <div className="cuadro">
              <img src={MotoBreakout} alt="Moto1" width="100%" />
            </div>
          </Grid>
          <Grid item xs={3} >
            <div className="cuadro">
              <img src={MotoFatboyHarley} alt="Moto2" width="100%" />
            </div>
          </Grid>
          <Grid item xs={3} >
            <div className="cuadro">
              <img src={TrikeFreewheeler} alt="Moto3" width="100%" />
            </div>
          </Grid>
          <Grid item xs={3} >
            <div className="cuadro">
              <img src={TrikeFreewheeler} alt="Moto3" width="100%" />
            </div>
          </Grid>
          <Grid xs={3}>
            <div className="nombremoto">
              Moto Breakout 2021
            </div>
            <div className="marcamoto">
              Harley Davidson
            </div>
          </Grid>

          <Grid xs={3}>
            <div className="nombremoto">
              Fat Boy 2021
            </div>
            <div className="marcamoto">
              Harley Davidson
            </div>
          </Grid>
          <Grid xs={3} >
            <div className="nombremoto">
              Trike Free Wheeler 2021
            </div>
            <div className="marcamoto">
              Harley Davidson
            </div>
          </Grid>
          <Grid xs={3}>
            <div className="nombremoto">
              Trike Free Wheeler 2021
            </div>
            <div className="marcamoto">
              Harley Davidson
            </div>
          </Grid>
          <Grid item xs={3}>
            <button
              // name='primero'
              onClick={handleOpen}
              // onChange={HandleInputChange}
              // value={nameMoto}
              className="botones"
              id='Moto Breakout 2021'
            >
              Ver mas
            </button>
          </Grid>
          <Grid item xs={3}>
            <button
              onClick={handleOpen}
              className="botones"
              id='Fat Boy 2021'
            >
              Ver mas
            </button>
          </Grid>
          <Grid item xs={3}>
            <button
              onClick={handleOpen}
              className="botones"
              id='Trike Free Wheeler 2021'
            >
              Ver mas
            </button>
          </Grid>
          <Grid item xs={3}>
            <button
              onClick={handleOpen}
              className="botones"
              id='Trike Free Wheeler 2021'
            >
              Ver mas
            </button>
          </Grid>
        </Grid>
      </div>
      <Dialog
        onClose={handleClose}
        open={open}
      >
        <Box
          sx={{
            p: 2
          }}
          style={{
            backgroundColor: '#263238'
          }}
        >
          <Grid
            container
            spacing={2}
          >
            <Grid
              container
              justifyContent="space-between"
              spacing={2}
              item
              xs={12}
              display="flow"
            >
              <Grid
                item
                md={10}
                xs={12}
              >
                <div
                  className="TitVisModelo"
                >
                  Moto Breakout 2021
                </div>
              </Grid>
              <Grid
                item
                md={1}
                xs={12}
              >
                <IconButton
                  onClick={handleClose}
                  style={{
                    color: 'white'
                  }}
                >
                  x
                </IconButton>
              </Grid>
              <Grid
                justifyContent="space-between"
                spacing={2}
                item
                xs={12}
                display="flow"
              >
                <Box
                  sx={{
                    alignItems: 'center',

                  }}
                >
                  <Grid
                    item
                    md={12}
                    xs={12}
                  >
                    <div
                      class="sketchfab-embed-wrapper"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        backgroundColor: "white"
                      }}
                    >
                      <iframe
                        title="Moto"
                        frameborder="0"
                        allowfullscreen
                        mozallowfullscreen="true"
                        webkitallowfullscreen="true"
                        allow="autoplay; fullscreen; xr-spatial-tracking"
                        xr-spatial-tracking
                        execution-while-out-of-viewport
                        execution-while-not-rendered
                        web-share
                        src="https://sketchfab.com/models/82c3482d12f84bab89ae8be7ccb9844f/embed"
                      ></iframe>
                    </div>
                  </Grid>
                  <Box
                    sx={{
                      alignItems: 'center',
                      display: 'flex',
                      justifyContent: 'flex-end',
                      pt: 3
                    }}
                  >
                    <Button
                      variant="contained"
                      onClick={handleClose}
                    >
                      Cancel
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Dialog>
    </>

  )
}

export default Cuerpo;