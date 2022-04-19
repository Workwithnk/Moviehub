import React from "react";
import { NavLink } from "react-router-dom";
import { RiUserFollowFill } from "react-icons/ri";
import "../TopNavBar/TopNav.css";

function TopNavBar() {
  return (
    <div className="TopNavBar">
      <h1>
        <NavLink to="/"> MOVIEHUB</NavLink>
      </h1>
      <ul className="TopNavBar__links">
        <li>
          <a
            className="TopNavBar__followLink"
            href="https://nikhil-kavathiya-4a985.web.app/"
            target="_blank"
          >
            <RiUserFollowFill className="TopNavBar__followIcon" />
            <span>FOLLOW</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default TopNavBar;
