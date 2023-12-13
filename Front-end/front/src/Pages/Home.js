import React from "react";
import Header from "../Components/Header";
const Home = () => {
  return (
    <div className="Home-Main-Page">
        <Header/>
      <div className="fakebody">
        <div className="Menu-Main-ItemsContainer ">
          <ul className="Menu-Main-Items d-flex">
            <li>Home</li>
            <li>Articles</li>
            <li>Dashboard</li>
          </ul>
        </div>
        <h1 className="CTA">Discover Articles</h1>
      </div>
    </div>
  );
};

export default Home;
