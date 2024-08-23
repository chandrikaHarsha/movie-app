import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"
      )
      .then((res) => {
        setData(res.data.results);
      });
  }, []);

  return (
    <div>
      <div className="container">
        <h1>Movie App</h1>
        <form>
          <input type="text" name="movie" />
          <input type="submit" value="Submit" />
        </form>
        {data.map((v, i) => {
          console.log(v);
          return (
            <div className="movies">
              <div className="row">
                <div className="col">
                  <div className="img">
                    <img
                      src={`https://image.tmdb.org/t/p/w1280${v.poster_path}`}
                      alt="thumbnail"
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="desc">{v.original_title}</div>
                  <div className="desc">{v.release_date}</div>
                  <div className="desc">{v.overview}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
