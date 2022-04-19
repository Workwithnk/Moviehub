import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";
import { Data } from "../../Data";
import "./Intro.css";

function Intro({ latestData }) {
  let filteredData = latestData.filter((data) => data.original_title);
  console.log(filteredData);

  let navigate = useNavigate();

  const [detailObj, setDetailsObj] = useState({});
  const takeRandomId = async () => {
    const id = Math.floor(Math.random(0, 5) * 10);
    let getImage = `https://image.tmdb.org/t/p/original${latestData[id].poster_path}`;
    let getTitle = `${
      filteredData[id].title ? filteredData[id].title : "Name is not available"
    }`;
    let getDetails = `${
      filteredData[id].overview
        ? filteredData[id].overview
        : "Overview is not available"
    }`;
    let getReleaseDate = `${
      filteredData[id].release_date
        ? filteredData[id].release_date
        : "Release date is not available"
    }`;
    let getRating = `${
      filteredData[id].vote_average
        ? filteredData[id].vote_average
        : "Vote is not available"
    }`;
    let getMediaType = `${
      filteredData[id].media_type
        ? filteredData[id].media_type
        : "MediaType is not available"
    }`;

    let getId = `${
      filteredData[id].id ? filteredData[id].id : "id is not available"
    }`;

    setDetailsObj({
      getId,
      getImage,
      getRating,
      getReleaseDate,
      getTitle,
      getDetails,
      getMediaType,
    });
  };

  useEffect(() => {
    takeRandomId();
  }, []);

  return (
    <div
      className="Intro"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.2),rgba(0,0,0,0.4),rgba(0,0,0,0.6),rgba(0,0,0,0.8),rgba(0,0,0,1)),url("${detailObj.getImage}") no-repeat top /cover `,
      }}
    >
      <div className="Intro__details">
        <h1>{detailObj.getTitle}</h1>
        <StarRatingComponent
          className="intro__rating"
          name="rate2"
          editing={false}
          renderStarIcon={() => (
            <span>
              <AiFillStar />
            </span>
          )}
          starCount={10}
          value={parseInt(detailObj.getRating)}
        />
        <p>{detailObj.getReleaseDate}</p>
        <p>{detailObj.getDetails}</p>
        <button
          onClick={() => {
            let getId = detailObj.getId;
            let baseMediaType = detailObj.getMediaType;
            Data.push({ getId: `${getId}`, baseMediaType });
            navigate("/details");
          }}
        >
          watch
        </button>
      </div>
    </div>
  );
}

export default Intro;
