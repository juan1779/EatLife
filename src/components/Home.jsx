import React from "react";
import Header from "./Elements/Header";
import Footer from "./Elements/Footer";
import NavText from "./Elements/NavText";
import "./Home.css";

function Home() {
  return (
    <div className="ContainerHome">
      <Header />
      <NavText />
      <Footer />
    </div>
  );
}

export default Home;
