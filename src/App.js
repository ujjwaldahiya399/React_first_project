import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import { Routes, Link, Route } from "react-router-dom";
import Home from "./Components/Home";
import Articles from "./Components/Articles";
import Info from "./Components/Info";
import axios from "axios";
import "./App.css";

function App() {
  // const [data,setData] = useState();
  // const [load,setLoad] = useState(false);
  // useEffect(() => {
  //   let url = "https://newsapi.org/v2/everything?q=" +
  //   params.category +
  //   "&from=" +
  //   dateString +
  //   "&sortBy=publishedAt&language=en&" +
  //   "apiKey=ad2f8f6ee02b4b5daa12032ed92fb380";
  //   axios.get(url).then((response) => {
  //     setData(response.data);
  //     setLoad(true);
  //   })
  // },[]);
  return (
    <div className="biggerDiv">
      <div className="theSiren">
        <span className="the">The</span>
        <span className="siren">Siren</span>
      </div>
      <div className="divForNavBar">
        <Navbar />
      </div>
      {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<Articles />}></Route>
        <Route path="/Info/:id" element={<Info />}></Route>
      </Routes>
    </div>
  );
}

export default App;
