import React, { useState, useEffect } from "react";

function StateWiseDailyContainer(props) {
  return (
    <div>
      <h1>Date: {props.date} </h1>
      <h3>Status: {props.status}</h3>
      <h3>
        {props.stateCode} : {props.stateCount}
      </h3>
    </div>
  );
}

export default StateWiseDailyContainer;
