import React, { useEffect, useState } from "react";
import SingleData from "../SingleData/SingleData";
import DataNotFound from "../../assets/dataNotFound.png";
import "./Search.css";

const loaderStyle = {
  height: "60vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const imageStyle = {
  width: "25vw",
};

function Search() {
  const defaultName = "Spider man";
  const [name, setName] = useState(defaultName);
  const [dataArr, setdataArr] = useState([]);

  const handleSearch = async () => {
    const responce = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=b615f79e75eab79f146fd61207605c72&language=en-US&query=${
        name.length === 0 ? defaultName : name
      }&page=1&include_adult=false`
    );
    const result = await responce.json();
    setdataArr(result.results);
  };

  useEffect(() => {
    handleSearch();
  }, [name]);

  return (
    <div className="Search">
      <div className="Search__container">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="eg. Spider man"
        />
      </div>
      <div className="Search__dataContainer">
        <>
          {dataArr.length === 0 ? (
            <div style={loaderStyle}>
              <img
                src={DataNotFound}
                className="Search__altImage"
                style={imageStyle}
                alt="Data not found"
              />
            </div>
          ) : (
            <>
              {dataArr.map((data) => (
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
              ))}
            </>
          )}
        </>
      </div>
    </div>
  );
}

export default Search;
