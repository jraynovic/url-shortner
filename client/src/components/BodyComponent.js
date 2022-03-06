import React, { useState } from "react";
import { Grid, Paper, TextField, Button } from "@mui/material";
import ResultComponent from "./ResultComponent";
import { useMutation, gql } from "@apollo/client";
import { CREATE_LINK } from "../GraphQL/Queries";

const BodyComponent = () => {
  const [url, setUrl] = useState("");
  const [slug, setSlug] = useState("");
  const [inputError, setInputError] = useState('')
  const [results, setResults] = useState('')
  const [createLink, {error}] = useMutation(CREATE_LINK)
  const slugError = 'Oops... that is already taken. Try again or a new desired URL'
  const urlError = 'Please enter a valid URL'

  const submitHandler = async() => {
      if(url){
        setInputError('')
        console.log(`Submitted with URL:${url} Slug:${slug}`);
        try{
           const link = await createLink({variables:{url, slug}}) 
           setResults(link.data.createLink.slug) 
        }catch(err){
            setInputError(slugError)
        }
        
      }else{
          setInputError(urlError)
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
                <TextField  error={inputError === urlError} variant="outlined" label="URL" onChange={(e)=>setUrl(e.target.value)}/>
              </Grid>
              <Grid item xs={12} md={4} style={{ textAlign: "left" }}>
                <TextField error={inputError === slugError} variant="outlined" label="Optional desired url" onChange={(e)=>setSlug(e.target.value)}/>
              </Grid>
              <Grid item xs={12} md={4}>
                <Button variant="contained" onClick={()=>submitHandler()}>Submit</Button>
              </Grid>
            </Grid>
            <Paper elevation={results? 8: 2} style={{ height: "40%", margin: 20 }}>
              <ResultComponent inputError={inputError} results={results} />
            </Paper>
          </Paper>
        </div>
      </Grid>
    </div>
  );
};

export default BodyComponent;
