import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ id, title, info }) => {
  const [showInfo, setShowInfo] = useState(true);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button onClick={() => setShowInfo(!showInfo)} className="btn">
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {/* <p>{showInfo ? info : ""}</p> */}
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
