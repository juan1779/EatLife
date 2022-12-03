import React from "react";
import Imgp from "/src/assets/Miproyecto.png";
import "./NavText.css";

function NavText() {
  return (
    <div className="containerText">
      <div className="NavText">
        <h1>Changing your eating habits</h1>
        <p>
          Always take care of your health starting from the food menu that you
          consume every day.
        </p>
        <button className="NavTextBtn">Explore menu</button>
      </div>
      <div className="divImg">
        <img className="imgNutrition" src={Imgp} />
      </div>
    </div>
  );
}

export default NavText;
