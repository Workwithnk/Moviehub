import React, { useEffect, useState } from "react";
import SingleData from "../SingleData/SingleData";
import PuffLoader from "react-spinners/PuffLoader";
import Intro from "../Intro/Intro";
import "./Trending.css";

const baseUrl = "https://api.themoviedb.org/3/trending/all/day?api_key=";
const apiKey = "b615f79e75eab79f146fd61207605c72";

const loaderStyle = {
  height: "75vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

function Trending() {
  const [trendingData, setTrendingData] = useState([]);
  const fetchTrendingData = async () => {
    const responce = await fetch(`${baseUrl}${apiKey}`);
    const result = await responce.json();
    setTrendingData(result.results);
  };

  useEffect(() => {
    fetchTrendingData();
  }, []);

  return (
    <div className="Trending__Container">
      {trendingData.length === 0 ? "" : <Intro latestData={trendingData} />}
      <div className="Trending">
        {trendingData.length === 0 ? (
          <div style={loaderStyle}>
            <PuffLoader color="#273c75" />
          </div>
        ) : (
          trendingData.map((data) => {
            return (
              <SingleData
                key={data.id}
                getId={data.id}
                image={data.poster_path}
                title={data.title}
                rating={data.vote_average}
                releaseDate={data.release_date}
                mediaType={data.media_type}
                overview={data.overview}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default Trending;
