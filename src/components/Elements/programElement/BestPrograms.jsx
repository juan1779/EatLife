import React from "react";
import "./BestPrograms.css";

function BestPrograms({ Logo, Title, Description, Rute }) {
  return (
    <a href={Rute} target="__BLANK" className="BestProgramsDivOpt">
      <div className="iconPg">{Logo}</div>
      <h3>{Title}</h3>
      <p>{Description}</p>
    </a>
  );
}

export default BestPrograms;
