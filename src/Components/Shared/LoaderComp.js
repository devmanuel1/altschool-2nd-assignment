import React from "react";
import { BarLoader } from "react-spinners";
import "../../Styles/Shared/LoaderComp.css";

const Handler = () => {
  return (
    <div className="loader_container">
      <span>Wait a Sec...</span>
      <BarLoader color="#FF3B3F" speedMultiplier={1} />
    </div>
  );
};

export default Handler;
