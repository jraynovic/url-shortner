import React from 'react'
import { Container, Grid } from '@mui/material'
import HeaderComponent from './HeaderComponent'
import BodyComponent from './BodyComponent'

const MainComponent = () => {
  return (
    <Container fluid>
      <Grid item xs={12}>
        <HeaderComponent />
      </Grid>
      <Grid item xs={12}>
        <BodyComponent />
      </Grid>
    </Container>
  );
};

export default MainComponent
