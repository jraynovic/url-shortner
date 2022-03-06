import React from 'react'
import { Container, Grid } from '@mui/material'
import HeaderComponent from './HeaderComponent'
import BodyComponent from './BodyComponent'
import FooterComponent from './FooterComponent'

const MainComponent = () => {
  return (
    <Container fluid>
      <Grid item xs={12}>
        <HeaderComponent />
      </Grid>
      <Grid item xs={12}>
        <BodyComponent />
      </Grid>
      <Grid item xs={12}>
        <FooterComponent />
      </Grid>
    </Container>
  );
};

export default MainComponent
