import React, { useEffect, useState } from "react";
import "./PageDetails.css";

function PageDetails({ pageDeatails, getPageNum }) {
  let [firstIndex, setFirstIndex] = useState(0);
  let [lastIndex, setLastIndex] = useState(10);
  // let [disableBtn, setDisableBtn] = useState(false);

  let [slicedArrData, setSlicedArrData] = useState([]);

  let totalPageCount = [];
  const firstSlicedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleNext = () => {
    setFirstIndex(firstIndex + 10);
    setLastIndex(lastIndex + 10);
  };
  const handlePrev = () => {
    setFirstIndex(firstIndex - 10);
    setLastIndex(lastIndex - 11);
  };
  function handlePageCount() {
    for (let i = 0; i <= pageDeatails; i++) {
      totalPageCount.push(i);
    }

    totalPageCount = totalPageCount.slice(firstIndex, lastIndex);
    console.log("slicedPageCount", totalPageCount);

    setSlicedArrData(totalPageCount);
  }

  useEffect(() => {
    handlePageCount();
  }, [firstIndex, lastIndex]);

  console.log("slicedArrData", slicedArrData);
  return (
    <div className="PageDetails">
      <button
        className="prevBtn btn"
        // disabled={disableBtn}
        onClick={handlePrev}
      >
        Prev
      </button>
      <>
        {slicedArrData.map((data, index) => {
          return (
            <button
              key={index}
              onClick={function () {
                console.log("clickedBtn", data);
                getPageNum(data);
              }}
              className="btn"
            >
              {data}
            </button>
          );
        })}
      </>{" "}
      <button className="nextBtn btn" onClick={handleNext}>
        Next
      </button>
    </div>
  );
}

export default PageDetails;
