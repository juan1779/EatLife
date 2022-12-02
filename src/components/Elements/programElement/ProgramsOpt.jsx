import React from "react";
import "./ProgramsOpt.css";

function ProgramsOpt({ Logo, Title, Description, Rute }) {
  return (
    <a href={Rute} target="__BLANK" className="BestProgramsDivOptn">
      <div className="IconPng">{Logo}</div>
      <h3>{Title}</h3>
      <p>{Description}</p>
    </a>
  );
}

export default ProgramsOpt;
