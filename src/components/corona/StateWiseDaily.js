import React, { useState, useEffect } from "react";
import StateWiseDailyContainer from "./StateWiseDailyContainer";

function StateWiseDaily() {
  const [results, setResults] = useState([]);
  const stateDailylist = [];

  async function getStateWiseDailyData() {
    const response = await fetch(
      "https://api.covid19india.org/states_daily.json"
    );
    const result = await response.json();
    console.log(result);
    setResults(result);
    return result;
  }

  useEffect(() => {
    getStateWiseDailyData();
  }, []);

  if (results) {
    // stateDailylist = results.map((item) => (
    //   <StateWiseDailyContainer
    //     date={item.id}
    //     status={item.login}
    //     stateCode={item.avatar_url}
    //     stateCount={item.avatar_url}
    //   />
    // ));
  }

  return <div></div>;
}

export default StateWiseDaily;
