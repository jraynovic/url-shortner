import React, { useState } from "react";
import { Grid, Paper, TextField, Button } from "@mui/material";
import ResultComponent from "./ResultComponent";

const BodyComponent = () => {
  const [url, setUrl] = useState("");
  const [slug, setSlug] = useState("");
  const [inputError, setInputError] = useState('')

  const submitHandler = () => {
      if(url){
        setInputError('')
        console.log(`Submitted with URL:${url} Slug:${slug}`);  
      }else{
          setInputError('Please enter a valid URL')
      }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Grid xs={12} md={8}>
        <div>
          <Paper style={{ height: "60vh" }} elevation={3}>
            <Grid
              container
              style={{
                height: "50%",
                padding: 30,
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <Grid xs={12}>
                <h1>Lets make a short url!</h1>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField  error={inputError} variant="outlined" label="URL" onChange={(e)=>setUrl(e.target.value)}/>
              </Grid>
              <Grid item xs={12} md={4} style={{ textAlign: "left" }}>
                <TextField variant="outlined" label="Optional desired url" onChange={(e)=>setSlug(e.target.value)}/>
              </Grid>
              <Grid item xs={12} md={4}>
                <Button variant="outlined" onClick={()=>submitHandler()}>Submit</Button>
              </Grid>
            </Grid>
            <Paper style={{ height: "40%", margin: 20 }}>
              <ResultComponent inputError={inputError} />
            </Paper>
          </Paper>
        </div>
      </Grid>
    </div>
  );
};

export default BodyComponent;
