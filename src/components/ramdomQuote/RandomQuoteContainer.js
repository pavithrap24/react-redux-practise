import React, { useState } from "react";

function RandomQuoteContainer() {
  const quotes = [
    {
      id: 0,
      quote:
        "Life isn’t about getting and having, it’s about giving and being.",
      author: "Kevin Kruse",
    },
    {
      id: 1,
      quote:
        "Whatever the mind of man can conceive and believe, it can achieve.",
      author: "Napoleon Hill",
    },
    {
      id: 2,
      quote: "Strive not to be a success, but rather to be of value.",
      author: "Albert Einstein",
    },
    {
      id: 3,
      quote:
        "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
      author: "Robert Frost",
    },
    {
      id: 4,
      quote: "I attribute my success to this: I never gave or took any excuse.",
      author: "Florence Nightingale",
    },
    {
      id: 5,
      quote: "You miss 100% of the shots you don’t take.",
      author: "Wayne Gretzky",
    },
    {
      id: 6,
      quote:
        "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
      author: "Michael Jordan",
    },
    {
      id: 7,
      quote:
        "The most difficult thing is the decision to act, the rest is merely tenacity.",
      author: "Amelia Earhart",
    },
    {
      id: 8,
      quote: "Every strike brings me closer to the next home run.",
      author: "Babe Ruth",
    },
    {
      id: 9,
      quote:
        "Definiteness of purpose is the starting point of all achievement.",
      author: "W. Clement Stone",
    },
  ];

  const min = 0;
  const max = 10;
  const rand = Math.floor(min + Math.random() * (max - min));
  const [randomQuote, setRandomQuote] = useState(quotes[rand]);

  function shareTwitter() {
    window.alert("Shared in Twitter");
  }

  function shareTumbler() {
    window.alert("Shared in Tumbler");
  }

  function newQuoteButtonClick() {
    const min = 0;
    const max = 10;
    const rand = Math.floor(min + Math.random() * (max - min));
    setRandomQuote(quotes[rand]);
  }

  function QuoteBox({ quote }) {
    return (
      <div>
        <label>{quote["quote"]}</label>
        <br />
        <label> - {quote["author"]}</label>
        <br />
      </div>
    );
  }

  return (
    <div>
      <QuoteBox quote={randomQuote} />
      <button onClick={shareTwitter}>Twitter</button>
      <button onClick={shareTumbler}>Tumbler</button>
      <button onClick={newQuoteButtonClick}>New Quote</button>
    </div>
  );
}

export default RandomQuoteContainer;
