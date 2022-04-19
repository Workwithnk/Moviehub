import React, { useEffect } from "react";
import { FaFire } from "react-icons/fa";
import { MdMovieFilter, MdOutlineMovie, MdSearch } from "react-icons/md";
import { NavLink } from "react-router-dom";
import "./BottomNav.css";

function BottomNav() {
  useEffect(() => {
    const allLinks = document.querySelectorAll(".BottomNav__linkContainer");
    for (let i = 0; i < allLinks.length; i++) {
      allLinks[i].addEventListener("click", () => {
        allLinks.forEach((data) => data.classList.remove("activeLink"));
        allLinks[i].classList.add("activeLink");
      });
    }
  }, []);
  return (
    <div className="BottomNav">
      <div className="BottomNav__linkContainer activeLink">
        <NavLink to="/" className="BottomNav__trending BottomNav_Links ">
          <FaFire className="trendIcon BottomNav__Icon" />
          <h4>Trending</h4>
        </NavLink>
      </div>

      <div className="BottomNav__linkContainer">
        <NavLink to="/movie" className="BottomNav__movie BottomNav_Links">
          <MdMovieFilter className="movieIcon BottomNav__Icon" />
          <h4>Movies</h4>
        </NavLink>
      </div>
      <div className="BottomNav__linkContainer">
        <NavLink to="/tv" className="BottomNav__tv BottomNav_Links">
          <MdOutlineMovie className="tvIcon BottomNav__Icon" />
          <h4>TV Series</h4>
        </NavLink>
      </div>
      <div className="BottomNav__linkContainer">
        <NavLink to="/search" className="BottomNav__search BottomNav_Links">
          <MdSearch className="searchIcon BottomNav__Icon " />
          <h4>Search</h4>
        </NavLink>
      </div>
    </div>
  );
}

export default BottomNav;
