import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { NavigateContext } from "../App";
import "../Styles/HomePage.css";

const Handler = () => {
  const { setActiveRoute } = useContext(NavigateContext);

  useEffect(() => {
    setActiveRoute("");
  });

  return (
    <div className="home_container">
      <h1>Page Not Found 404.</h1>
    </div>
  );
};

export default Handler;
