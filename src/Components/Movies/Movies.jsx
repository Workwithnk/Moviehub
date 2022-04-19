import React, { useState, useEffect } from "react";
import SingleData from "../SingleData/SingleData";
import PuffLoader from "react-spinners/PuffLoader";
import "./Movie.css";

const mediaType = "movie";
const apiKey = "b615f79e75eab79f146fd61207605c72";
const baseUrl = `https://api.themoviedb.org/3/discover/${mediaType}?api_key=${apiKey}`;

const loaderStyle = {
  height: "75vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

function Movies() {
  const [movieData, setMovieData] = useState([]);
  const [pageData, setPageData] = useState(0);
  const fetchMovieData = async () => {
    const responce = await fetch(`${baseUrl}`);
    const result = await responce.json();
    setPageData(result.total_pages);
    setMovieData(result.results);
  };

  // const getClickPageCount = (pageNum) => {
  //   console.log("Movie", pageNum);
  // };

  useEffect(() => {
    fetchMovieData();
  }, [pageData]);

  return (
    <div className="MovieContainer comman">
      <div className="Movie">
        {movieData.length === 0 ? (
          <div style={loaderStyle}>
            <PuffLoader color="rgba(0,0,0,1)" />
          </div>
        ) : (
          movieData.map((data) => {
            return (
              <SingleData
                key={data.id}
                getId={data.id}
                image={data.poster_path}
                title={data.title}
                rating={data.vote_average}
                releaseDate={data.release_date}
                mediaType={mediaType}
                overview={data.overview}
              />
            );
          })
        )}
      </div>
      {/* <PageDetails pageDeatails={pageData} getPageNum={getClickPageCount} /> */}
    </div>
  );
}

export default Movies;
