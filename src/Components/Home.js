import React, { useEffect, useState,useContext } from "react";
import LatestArticles from "./LatestArticles";
import "./Home.css";
import Top2 from "./Top2";
import "../App.css";
import myContext from "./context";
import LatestStories from "./LatestStories";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
// import "./Media.css";
// import Info from "./Info";
import Navbar from "./Navbar";
// import "./App.css";

function Home() {
  const contextData = useContext(myContext);
  console.log(contextData);
  const params = useParams();
  const [loaded,setLoaded] = useState(false);
  // const [data1, setData1] = useState();
  // const [data2, setData2] = useState();
  // const [data3, setData3] = useState();
  // const [data4, setData4] = useState();
  // const [data5, setData5] = useState();
  // const [loaded1, setLoaded1] = useState(false);
  // const [loaded2, setLoaded2] = useState(false);
  // const [loaded3, setLoaded3] = useState(false);
  // const [loaded4, setLoaded4] = useState(false);
  // const [loaded5, setLoaded5] = useState(false);

  const [data,setData] = useState([]);

  useEffect(() => {
    console.log("inside useEffect");
    // var url1 = "https://blogdata.onrender.com/bollywood";
    // // var url1=  'https://newsapi.org/v2/everything?q=' +
    // //     "bollywood" +
    // //     "&from=" +
    // //     'sortBy=popularity&' +
    // //     'apiKey=f64582dcc19545d08902cbb3f5fe11ad';

    // var url2 = "https://blogdata.onrender.com/hollywood";

    // var url3 = "https://blogdata.onrender.com/food";

    // var url4 = "https://blogdata.onrender.com/fitness";

    // var url5 = "https://blogdata.onrender.com/technology";


    // const req1 = new Request(url1);
    // fetch(req1).then((resp) => {
    //   resp.json().then((data1) => {
    //     setData1(data1);
    //     setLoaded1(true);
    //     // console.log(data);
    //   });
    // });
    // axios.get(url1).then((response1) => {
    //   setData1(response1.data);
    //   setLoaded1(true);
    //   console.log(response1.data);
    // });

    // axios.get(url2).then((response2) => {
    //   setData2(response2.data);
    //   setLoaded2(true);
    // });

    // axios.get(url3).then((response3) => {
    //   setData3(response3.data);
    //   setLoaded3(true);
    // });

    // axios.get(url4).then((response4) => {
    //   setData4(response4.data);
    //   setLoaded4(true);
    // });

    // axios.get(url5).then((response5) => {
    //   setData5(response5.data);
    //   setLoaded5(true);
    // });
    axios.get("/db/data.json")
    .then((res) => {
      setData(res.data)
      setLoaded(true);
    })
    .catch(err => console.error(err));
  }, []);

  if (loaded) {
    return (
      <>
      <myContext.Provider value={data}>
      {console.log(data)}
        <Navbar />
        <div id="SweetHome">
          <div className="Topper">
            <section className="Topver">
              <div id="TopLeft">
                <img
                  className="topImg"
                  src={data.hollywood[6].imageUrl}
                  alt="load"
                  onError={() => {
                    console.log("Having Error");
                  }}
                />
                <Link className="someName" style={{textDecoration:"none",color:"black",fontWeight:"bold"}} to={`/Info/${data.hollywood[6].name}`} state={{article:data.hollywood[6],data:data.hollywood}}>
                  <h3 className="letfull">{data.hollywood[6].name} </h3>
                </Link>
              </div>
              <section className="Set">
                <div id="TopRight">
                  <img
                    className="sideTopImg"
                    src={data.technology[2].imageUrl}
                    alt="load"
                  />
                  <Link style={{textDecoration:"none",color:"black",fontWeight:"bold"}} to={`/Info/${data.technology[2].name}`} state={{article:data.technology[2],data:data.technology}} className="computer">
                    <h5 className="topRight">{data.technology[2].name} </h5>
                  </Link>
                </div>
                <div id="BottomRight">
                  <img
                    className="sideImg"
                    src={data.bollywood[1].imageUrl}
                    alt="load"
                  />
                  <Link style={{textDecoration:"none",color:"black",fontWeight:"bold"}} to={`/Info/${data.bollywood[1].name}`} state={{article:data.bollywood[1],data:data.bollywood}} className="computer">
                    <h5 className="bottomright">{data.bollywood[1].name} </h5>
                  </Link>
                </div>
              </section>
            </section>
          </div>

          {/* LatestArticles wala */}
          <div className="UpSide">
            <h1 className="line">The Latest</h1>
            <div className="gasli">
              <div className="Top-let">
                <div className="sid-box">
                  <img src={data.latestArticles[1].imageUrl} alt="go" className="mg" />
                  <Link style={{textDecoration:"none",color:"black",fontWeight:"bold"}} to={`/Info/${data.latestArticles[1].name}`} state={{article:data.latestArticles[1],data:data.bollywood}}>
                    <h4 className="const">{data.latestArticles[1].name} </h4>
                  </Link>
                  <p className="const">{data.latestArticles[1].details}</p>
                  <p className='published'>{data.latestArticles[1].writtenBy}</p>
                </div>
                <div id="sid-box2" className="sid-box">
                  <img src={data.latestArticles[2].imageUrl} alt="go" className="mg" />
                  <Link style={{textDecoration:"none",color:"black",fontWeight:"bold"}} to={`/Info/${data.latestArticles[2].name}`} state={{article:data.latestArticles[2],data:data.bollywood}}>
                    <h4 className="const">{data.latestArticles[2].name} </h4>
                  </Link>
                  <p className="const">{data.latestArticles[2].details}</p>
                  <p className='published'>{data.latestArticles[2].writtenBy}</p>
                </div>
                <div className="sid-box">
                  <img src={data.latestArticles[3].imageUrl} alt="go" className="mg" />
                  <Link style={{textDecoration:"none",color:"black",fontWeight:"bold"}} to={`/Info/${data.latestArticles[3].name}`} state={{article:data.latestArticles[3],data:data.food}}>
                    <h4 className="const">{data.latestArticles[3].name} </h4>
                  </Link>
                  <p className="const">{data.latestArticles[3].details}</p>
                  <p className='published'>{data.latestArticles[3].writtenBy}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="both">
            <div className="divForLatestArticle">
              <LatestArticles latestArticleData= {data.latestArticles} />
            </div>
            {/* <Top2 props={{ data1, data2.articles, data3, data4, data5 }} /> */}
            <div className="hum">
              <div className="newDiv" > Advertisement
                {/* <img src={data5[49].urlToImage} alt="alt" id="bigImg" />
                <p className="baada">{data5[55].content}</p>
                <p className='published'>{data5[66].publishedAt}</p> */}
              </div>
              <Top2 propsToTop2={data.topposts} />
            </div>
          </div>

          <div>
            <LatestStories propsToLatestStories={data.latestStories} />
          </div>
        </div>
        </myContext.Provider>
      </>
    );
  } else {
    return (
      <div className="lodwalpart">
        <h1 className="loading">Loading*****</h1>;
      </div>
    );
  }
  
}

export default Home;