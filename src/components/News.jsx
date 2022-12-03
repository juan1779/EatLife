import React from "react";
import Imgp2 from "/src/assets/comer1.png";
import ProgramOpt from "./Elements/programElement/ProgramsOpt";
import { Data2 } from "./Data/DataPrograms2";
import Header from "./Elements/Header";
import Footer from "./Elements/Footer";
import "./News.css";

function News() {
  return (
    <div>
      <Header />
      <ProgramNews />
      <Footer />
    </div>
  );
  function ProgramNews() {
    return (
      <div className="ProgramsImg">
        <div className="DivImgP">
          <img src={Imgp2} />
        </div>
        <div className="ContainerTextOpt">
          <div className="TextTitle">
            <h2>Our Value To Help You</h2>
            <p>
              We Always want to provide the best value for you and for you
              Health, join us to maximize the benefits.
            </p>
          </div>
          <div className="BtnOptions">
            {Data2.map((Data, index) => {
              return (
                <div key={index} className="Card">
                  <ProgramOpt
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
      </div>
    );
  }
}

export default News;
