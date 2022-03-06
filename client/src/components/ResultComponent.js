import React from "react";
import { Grid, Button } from "@mui/material";

const ResultComponent = (props) => {
  if (props.inputError) {
    return <div>{props.inputError}</div>;
  }
  if (props.results) {
    return (
      <Grid
        xs={12}
        style={{ textAlign: "center", height: "100%", paddingTop: 30,paddingBottom:20 }}
      >
        <h4>New shortend link...{"  "}</h4>
        <a
          href="https://www.josephraynovic.com/"
          target="_blank"
        >{`${props.results}.com`}</a>
      </Grid>
    );
  }
  return (
    <Grid
      xs={12}
      style={{ textAlign: "center", height: "100%", paddingTop: 30,paddingBottom:5, opacity:.3 }}
    >
      <h4>Results will be shown here...</h4>
    </Grid>
  );
};
export default ResultComponent;
