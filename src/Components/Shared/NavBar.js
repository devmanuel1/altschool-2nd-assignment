import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { NavigateContext } from "../../App";
import "../../Styles/Shared/NavBar.css";

const Handler = () => {
  const { activeRoute } = useContext(NavigateContext);

  return (
    <div className="nav_container">
      {/* logo side  */}
      <div className="nav_logo_div">
        <h1>
          Hello.
          <sup>
            <i>xyz</i>
          </sup>
        </h1>
      </div>
      {/* link side  */}
      <div className="nav_link_div">
        <ul>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <li
              className={`nav_link  ${activeRoute === "home" && "nav_active"}`}
            >
              Home
            </li>
          </Link>

          <Link to={"/users"} style={{ textDecoration: "none" }}>
            <li
              className={`nav_link ${activeRoute === "users" && "nav_active"}`}
            >
              Users
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Handler;
