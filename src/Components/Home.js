import React, { useEffect, useState } from "react";
import LatestArticles from "./LatestArticles";
import "./Home.css";
import Top2 from "./Top2";
import "../App.css"
import LatestStories from "./LatestStories";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
// import "./Media.css";
// import Info from "./Info";
// import Navbar from "./Navbar";
// import "./App.css";

function Home() {
  const params = useParams();

  const [data1, setData1] = useState();
  const [data2, setData2] = useState();
  const [data3, setData3] = useState();
  const [data4, setData4] = useState();
  const [data5, setData5] = useState();
  const [loaded1, setLoaded1] = useState(false);
  const [loaded2, setLoaded2] = useState(false);
  const [loaded3, setLoaded3] = useState(false);
  const [loaded4, setLoaded4] = useState(false);
  const [loaded5, setLoaded5] = useState(false);


  useEffect(() => {

    var url1 = "https://blogdata.onrender.com/bollywood";
    // var url1=  'https://newsapi.org/v2/everything?q=' +
    //     "bollywood" +
    //     "&from=" +
    //     'sortBy=popularity&' +
    //     'apiKey=f64582dcc19545d08902cbb3f5fe11ad';

    var url2 = "https://blogdata.onrender.com/hollywood";

    var url3 = "https://blogdata.onrender.com/food";

    var url4 = "https://blogdata.onrender.com/fitness";

    var url5 = "https://blogdata.onrender.com/technology";


    // const req1 = new Request(url1);
    // fetch(req1).then((resp) => {
    //   resp.json().then((data1) => {
    //     setData1(data1);
    //     setLoaded1(true);
    //     // console.log(data);
    //   });
    // });
    axios.get(url1).then((response1) => {
      setData1(response1.data);
      setLoaded1(true);
      console.log(response1.data);
    });

    axios.get(url2).then((response2) => {
      setData2(response2.data);
      setLoaded2(true);
    });

    axios.get(url3).then((response3) => {
      setData3(response3.data);
      setLoaded3(true);
    });

    axios.get(url4).then((response4) => {
      setData4(response4.data);
      setLoaded4(true);
    });

    axios.get(url5).then((response5) => {
      setData5(response5.data);
      setLoaded5(true);
    });

  }, [params]);

  if (loaded1 && loaded2 && loaded3 && loaded4 && loaded5) {
    return (
      <>
        {/* <Navbar /> */}
        <div id="SweetHome">
          <div className="Topper">
            <section className="Topver">
              <div id="TopLeft">
                <img
                  className="topImg"
                  src={data1[28].urlToImage}
                  alt="load"
                  onError={() => {
                    console.log("Having Error");
                  }}
                />
                <Link style={{textDecoration:"none",color:"black",fontWeight:"bold"}} to={`/Info/${data1[28].title}`} state={{article:data1[28],data:[data1[11],data1[23],data1[39]]}} className="computer">
                  <h3 className="letfull">{data1[28].title} </h3>
                </Link>
              </div>
              <section className="RightSideSet">
                <div id="TopRight">
                  <img
                    className="sideTopImg"
                    src={data2[30].urlToImage}
                    alt="load"
                  />
                  <Link style={{textDecoration:"none",color:"black",fontWeight:"bold"}} to={`/Info/${data2[30].title}`} state={{article:data2[30],data:[data2[11],data2[23],data2[39]]}} className="computer">
                    <h5 className="topRight">{data2[30].title} </h5>
                  </Link>
                </div>
                <div id="BottomRight">
                  <img
                    className="sideImg"
                    src={data3[40].urlToImage}
                    alt="load"
                  />
                  <Link style={{textDecoration:"none",color:"black",fontWeight:"bold"}} to={`/Info/${data3[40].title}`} state={{article:data3[40],data:[data3[11],data3[23],data3[39]]}} className="computer">
                    <h5 className="bottomright">{data3[40].title} </h5>
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
                  <img src={data1[39].urlToImage} alt="go" className="mg" />
                  <Link style={{textDecoration:"none",color:"black",fontWeight:"bold"}} to={`/Info/${data1[39].title}`} state={{article:data1[39],data:[data1[41],data1[23],data1[39]]}}>
                    <h4 className="const">{data1[39].title} </h4>
                  </Link>
                  <p className="const">{data3[61].content}</p>
                  <p className='published'>{data3[77].publishedAt}</p>
                </div>
                <div id="sid-box2" className="sid-box">
                  <img src={data3[61].urlToImage} alt="go" className="mg" />
                  <Link style={{textDecoration:"none",color:"black",fontWeight:"bold"}} to={`/Info/${data3[61].title}`} state={{article:data3[61],data:[data3[11],data3[23],data3[39]]}}>
                    <h4 className="const">{data3[61].title} </h4>
                  </Link>
                  <p className="const">{data1[17].content}</p>
                  <p className='published'>{data1[35].publishedAt}</p>
                </div>
                <div className="sid-box">
                  <img src={data4[11].urlToImage} alt="go" className="mg" />
                  <Link style={{textDecoration:"none",color:"black",fontWeight:"bold"}} to={`/Info/${data4[11].title}`} state={{article:data4[11],data:[data4[11],data4[23],data4[39]]}}>
                    <h4 className="const">{data4[11].title} </h4>
                  </Link>
                  <p className="const">{data4[11].content}</p>
                  <p className='published'>{data4[11].publishedAt}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="both">
            <div className="divForLatestArticle">
              <LatestArticles props={{ data1, data2, data3, data4, data5 }} />
            </div>
            {/* <Top2 props={{ data1, data2.articles, data3, data4, data5 }} /> */}
            <div className="hum">
              <div className="newDiv" > Advertisement
                {/* <img src={data5[49].urlToImage} alt="alt" id="bigImg" />
                <p className="baada">{data5[55].content}</p>
                <p className='published'>{data5[66].publishedAt}</p> */}
              </div>
              <Top2 propsToTop2={{ data1, data2, data3, data4, data5 }} />
            </div>
          </div>

          <div>
            <LatestStories propsToLatestStories={{ data1, data2, data3, data4, data5 }} />
          </div>
        </div>
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