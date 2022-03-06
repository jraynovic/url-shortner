import React from 'react'
import {Grid} from '@mui/material'

const HeaderComponent = () => {
  return (
    <Grid container style={{height:'10vh', marginBottom:20, paddingTop:10}}>
      <Grid xs={6} md={4} style={{height:'10vh'}}>
        <a href="https://www.josephraynovic.com/"
          target="_blank">
          <img src="https://www.josephraynovic.com/static/media/logo.7303cc08.png" height='100%' width='auto'/>
        </a>
        
      </Grid>
      <Grid xs={0} md={4}>
      </Grid>
      <Grid xs={6} md={4} style={{ display:'flex', alignItems:'center', justifyContent:'end'}}> 
         <a style={{textDecoration:'none', color:'black'}} href = "mailto: josephraynovic@gmail.com">Contact</a>  
      </Grid>
    
    </Grid>
  )
}

export default HeaderComponent