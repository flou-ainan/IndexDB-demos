import React from "react";
import ReactDOM from "react-dom";
import { demos } from "./demos";

ReactDOM.render(
  <React.StrictMode>
    <h1>Using IndexedDB with idb</h1>
    <h2>
      These are demos for{" "}
      <a
        href="https://hackernoon.com/use-indexeddb-with-idb-a-1kb-library-that-makes-it-easy-8p1f3yqq"
        target="_blank"
        rel="noopener noreferrer"
      >
        this blogpost
      </a>
      .
    </h2>
    <h2>
      Demos are supposed to be clicked sequentially, skipping and jumping may
      cause errors.
    </h2>
    {Object.entries(demos).map(entry => {
      const [key, value] = entry;
      return (
        <div key={key}>
          <button onClick={value}>{key}</button>
        </div>
      );
    })}
  </React.StrictMode>,
  document.getElementById("root")
);
