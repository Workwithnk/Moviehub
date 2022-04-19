import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";
import { Data } from "../../Data";
import imageNotFound from "../../assets/imageNotFound.png";

import "./SingleData.css";
const imageBaseUrl = "https://image.tmdb.org/t/p/original";

// export const DetailsOfData = createContext([]);

function SingleData({
  title,
  image,
  rating,
  releaseDate,
  mediaType,
  overview,
  getId,
}) {
  const navigate = useNavigate();
  const handleClick = async () => {
    const baseMediaType = mediaType === undefined ? "movie" : mediaType;
    Data.push({ getId, baseMediaType });
    navigate("/details");
  };
  let imageData = `${imageBaseUrl}${image}`;

  return (
    <div className="SingleData">
      <img src={image === null ? `${imageNotFound}` : imageData} alt={title} />
      <div className="SingleData__details">
        <h5>{title ? title : "none"}</h5>
        <StarRatingComponent
          className="SingleData__rating"
          name="rate2"
          editing={false}
          renderStarIcon={() => (
            <span>
              <AiFillStar />
            </span>
          )}
          starCount={10}
          value={rating}
        />
        <span>{releaseDate ? releaseDate : "none"}</span>
        <div className="SingleData__btnContaiber">
          <button onClick={handleClick}>watch</button>
        </div>
      </div>
    </div>
  );
}

export default SingleData;
