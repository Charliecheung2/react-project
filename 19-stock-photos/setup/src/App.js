import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Photo from "./Photo";

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY2}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

// remove current scroll code
// set default page to 1
// setup two useEffects
// don't run second on initial render
// check for query value
// if page 1 fetch images
// otherwise setPage(1)
// fix scroll functionality

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState("");

  let url;
  let searchTerm = `&query=${query}`;
  let pageUrl = `&page=${page}`;

  const fetchImage = async () => {
    setLoading(true);
    try {
      if (query) {
        url = `${searchUrl}${clientID}${pageUrl}${searchTerm}`;
      } else {
        url = `${mainUrl}${clientID}${pageUrl}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      if (query && page === 1) {
        setPhotos(data.results);
      } else if (query) {
        setPhotos([...photos, ...data.results]);
      } else {
        setPhotos([...photos, ...data]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImage();
  }, [page]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (page === 1) {
      fetchImage();
    }
    setPage(1);
  };

  useEffect(() => {
    const scroll = window.addEventListener("scroll", () => {
      if (loading) return;
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
        setPage((prev) => prev + 1);
      }
    });
    return () => window.removeEventListener("scroll", scroll);
  }, []);

  return (
    <main>
      <section className="search">
        <form className="search-form">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="search"
            className="form-input"
          />
          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            <FaSearch />
          </button>
        </form>
      </section>
      <section className="photos">
        <div className="photos-center">
          {photos.map((photo) => {
            return <Photo key={photo.id} {...photo} />;
          })}
        </div>
        {loading && <h2 className="loading">Loading...</h2>}
      </section>
    </main>
  );
}

export default App;
