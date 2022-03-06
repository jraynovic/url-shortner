import React from "react";

const ResultComponent = (props) => {
  if (props.inputError) {
    return <div>{props.inputError}</div>;
  }
  return(
      <div>
          Result Component
          {props.results}
      </div>
  )
};
export default ResultComponent;
