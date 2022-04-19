import React, { useState, useEffect } from "react";
import SingleData from "../SingleData/SingleData";
import PuffLoader from "react-spinners/PuffLoader";
import "./Tv.css";

const mediaType = "tv";
const apiKey = "b615f79e75eab79f146fd61207605c72";
const baseUrl = `https://api.themoviedb.org/3/discover/${mediaType}?api_key=${apiKey}`;

const loaderStyle = {
  height: "75vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

function Tv() {
  const [tvData, setTvData] = useState([]);
  const fetchMovieData = async () => {
    const responce = await fetch(`${baseUrl}`);
    const result = await responce.json();
    setTvData(result.results);
    console.log(result.results);
  };

  useEffect(() => {
    fetchMovieData();
  }, []);

  return (
    <div className="Tv comman">
      {tvData.length === 0 ? (
        <div style={loaderStyle}>
          <PuffLoader color="rgba(0,0,0,1)" />
        </div>
      ) : (
        tvData.map((data) => {
          return (
            <SingleData
              key={data.id}
              getId={data.id}
              image={data.poster_path}
              title={data.name}
              rating={data.vote_average}
              releaseDate={data.first_air_date}
              mediaType={mediaType}
              overview={data.overview}
            />
          );
        })
      )}
    </div>
  );
}

export default Tv;
