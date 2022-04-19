import React, { useEffect, useState } from "react";
import { Data } from "../../Data";
// import DataNotFound from "../../assets/dataNotFound.png";
import PuffLoader from "react-spinners/PuffLoader";
import "./DetailsData.css";

const loaderStyle = {
  height: "60vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const imageStyle = {
  width: "25vw",
};

function DetailsData() {
  const [data, setData] = useState([]);
  Data.splice(0, Data.length - 1);

  const fetchDataById = async () => {
    const responce = await fetch(
      `https://api.themoviedb.org/3/${Data[0].baseMediaType}/${Data[0].getId}/videos?api_key=b615f79e75eab79f146fd61207605c72&language=en-US`
    );
    const result = await responce.json();
    setData(result.results);
  };

  useEffect(() => {
    fetchDataById();
  }, []);

  return (
    <div className="DetailsData__container">
      {data.length === 0 ? (
        <div style={loaderStyle}>
          <PuffLoader color="rgba(0,0,0,1)" />
        </div>
      ) : (
        data.map((data) => {
          return (
            <div className="DetailsData" key={data.id}>
              <iframe
                title="Trailer and Teaser"
                src={`https://www.youtube.com/embed/${data.key}`}
                className="DetailsData__iframe"
                allowFullScreen
              />
              <div className="DetailsData__details">
                <h1>{data.name}</h1>
                <h3>{data.type}</h3>
                <p>{data.published_at}</p>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default DetailsData;
