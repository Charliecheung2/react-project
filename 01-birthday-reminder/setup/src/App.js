import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        {people.length === 0 ? (
          <h3> {people.length} birthday today</h3>
        ) : (
          <h3> {people.length} birthdays today</h3>
        )}
        <List people={people} />
        <button
          onClick={() => {
            setPeople([]);
          }}
        >
          clear all
        </button>
      </section>
    </main>
  );
}

export default App;
