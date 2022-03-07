import React, { useState } from "react";
import { Grid, Paper, TextField, Button } from "@mui/material";
import ResultComponent from "./ResultComponent";
import { useMutation, gql } from "@apollo/client";
import { CREATE_LINK } from "../GraphQL/Queries";

const BodyComponent = () => {
  const [url, setUrl] = useState("");
  const [slug, setSlug] = useState("");
  const [inputError, setInputError] = useState("");
  const [results, setResults] = useState("");
  const [createLink, { error }] = useMutation(CREATE_LINK);
  const slugError =
    "Oops... that is already taken. Try again or a new desired URL";
  const urlError = "Please enter a valid URL";
  const inputStyle = { marginTop: 8, marginBottom: 8 };

  const urlValid = (url) => {
    const valid =
      /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(
        url
      );
    return valid;
  };
  const submitHandler = async () => {
    if (url && urlValid(url)) {
      setInputError("");
      console.log(`Submitted with URL:${url} Slug:${slug}`);
      try {
        const link = await createLink({ variables: { url, slug } });
        setResults(link.data.createLink.slug);
      } catch (err) {
        setInputError(slugError);
      }
    } else {
      setInputError(urlError);
    }
  };

  const handleKeypress = (e) => {
    console.log(e.key)
    if (e.key === 'Enter') {
      submitHandler();
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
                // height: "50%",
                padding: 30,
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <Grid xs={12}>
                <h1>Lets make a short url!</h1>
              </Grid>
              <Grid item xs={12} md={4} style={inputStyle}>
                <TextField
                  error={inputError === urlError}
                  variant="outlined"
                  label="URL"
                  onChange={(e) => setUrl(e.target.value)}
                  onKeyPress={(e)=>handleKeypress(e)}
                />
              </Grid>
              <Grid item xs={12} md={4} style={inputStyle}>
                <TextField
                  error={inputError === slugError}
                  variant="outlined"
                  label="Optional desired url"
                  onChange={(e) => setSlug(e.target.value)}
                  onKeyPress={(e)=>handleKeypress(e)}

                />
              </Grid>
              <Grid item xs={12} md={4} style={inputStyle}>
                <Button variant="contained" onClick={() => submitHandler()}>
                  Submit
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Paper
                  elevation={results ? 8 : 2}
                  style={{ height: "100%", margin: 20 }}
                >
                  <ResultComponent inputError={inputError} results={results} />
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </Grid>
    </div>
  );
};

export default BodyComponent;
