import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import { Routes, Link, Route } from "react-router-dom";
import Home from "./Components/Home";
import Articles from "./Components/Articles";
import Info from "./Components/Info";
import axios from "axios";
import "./App.css";
import myContext from "./Components/context";

function App() {
  const [jsonData,setJsonData] = useState([]);

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
  // useEffect(() => {
  //   console.log("inside useEffect of app.js")
  //   axios.get("/db/data.json")
  //     .then(res => setJsonData(res.data))
  //     .catch(err => console.error(err));
  //     console.log(jsonData);
  // },[]);
  return (
    <div className="biggerDiv">
      <div className="theSiren">
        <span className="the">The</span>
        <span className="siren">Siren</span>
      </div>
      <div>
        {/* <Home/> */}
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<Articles />}></Route>
        <Route path="/Info/:id" element={<Info />}></Route>
      </Routes>
    </div>
  );
}

export default App;
