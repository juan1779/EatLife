import React from "react";
import "./ProgramsBody.css";
import { Data } from "../Data/DataPrograms";
import Program from "./programElement/BestPrograms";

function ProgramsBody() {
  return (
    <div className="ProBody">
      <div className="BestPrograms">
        <h2>Our Best Programs</h2>
        <div className="BestProgramsDiv">
          {Data.map((Data, index) => {
            return (
              <div key={index}>
                <Program
                  key={index}
                  Rute={Data.Rute}
                  Logo={Data.Logo}
                  Title={Data.Title}
                  Description={Data.Description}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="Started">
        <h3>Get Started with EatLife</h3>
        <p>
          Discover tips & news for your Health from experts and get the best
          discounts by gettings started.
        </p>
        <button className="NavTextBtn">Get Started</button>
      </div>
    </div>
  );
}

export default ProgramsBody;
