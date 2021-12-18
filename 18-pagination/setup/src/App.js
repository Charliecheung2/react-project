import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";
function App() {
  const { loading, data } = useFetch();
  console.log(data);

  const [page, setPage] = useState(1);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    if (loading) return;
    setPeople(data[page - 1]);
  }, [loading, page]);

  const handlePrev = () => {
    setPage((old) => {
      if (old === 1) {
        return data.length;
      }
      return old - 1;
    });
  };

  const handleNext = () => {
    setPage((old) => {
      if (old === data.length) {
        return 1;
      }
      return old + 1;
    });
  };

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "loading..." : "Pagination"}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {people.map((person) => {
            return <Follower key={person.id} {...person} />;
          })}
        </div>
        {!loading && (
          <div className="btn-container">
            <button className="prev-btn" onClick={handlePrev}>
              prev
            </button>
            {data.map((item, index) => {
              return (
                <button
                  className={`page-btn ${index + 1 === page && "active-btn"}`}
                  key={index}
                  onClick={() => setPage(index + 1)}
                >
                  {index + 1}
                </button>
              );
            })}
            <button className="next-btn" onClick={handleNext}>
              next
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
