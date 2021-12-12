import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  return (
    <>
      <div className="container">
        <div>
          <h3>Questions And Answers</h3>
        </div>
        <div className="info">
          {data.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
