import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  const [text, setText] = useState("## markdown preview");
  return (
    <main>
      <section className="markdown">
        <textarea
          className="input"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <article className="result">
          <ReactMarkdown>{text}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
}

export default App;
