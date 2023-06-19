import React, { useEffect, useState } from "react";
import "./Articles.css";
// import ".App.css";
// import { LinearProgress } from "@muimaterial";
import CircularProgress from '@mui/material/CircularProgress';
import { useParams,Link } from "react-router-dom";
import axios from "axios";
import TopPosts from "./TopPosts";
export default function Articles() {
  const [data, setData] = useState();
  const [loaded, setLoaded] = useState(false);
  const params = useParams();
//   var titleString = params.category;
//   titleString = titleString.toUpperCase();
  const [count, setCount] = useState(7);
  console.log("Use Params returned:", params);
//   Loadedindicatesifthedatahasbeenloadedornot;
  const date = new Date();
  const dateString =
    date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
  useEffect(() => {
    // var url = "https://blogdata.onrender.com/" + params.category;
      var url = "https://newsapi.org/v2/everything?q=" +
      params.category +
      "&from=" +  // put date string for latest articles
      "&sortBy=publishedAt&language=en&" +
      "apiKey=ad2f8f6ee02b4b5daa12032ed92fb380";

    // var req = new Request(url);
    // fetch(req).then((response) => {
    //   response.json().then((data) => {
    //     setData(data);
    //     setLoaded(true);
    //     console.log(data);
    //   });
    // });
    axios.get(url).then((res) => {
      console.log(res.data.articles[0]);
      setData(res.data);
      setLoaded(true);
    })
  }, [params]);
  if (loaded) {
    return (
      <div style={{display:"flex",justifyContent:"space-between",marginTop:"3em"}} className="mainContainer">
        <div className="articles-container">
            {data.articles.map((article,index) => {
                console.log(count,index);
                if (index<count) {
                    return (
                        <div className="article" key={index}>
                            <img src={article.urlToImage}
                                className="thumbnail"
                                alt=" loading..."
                             />
                             <div className="text-container">
                                <Link style={{textDecoration:"none",color:"black",fontWeight:"bold"}} to={`/info/${article.title}`} state={{article:article,data:data}}><p className="title">{article.title}</p></Link>
                                {/* <p className="title">{article.title}</p> */}
                                <p className="content">{article.content}</p>
                                <p className="published">{article.publishedAt}</p>
                             </div>
                        </div>
                    )
                }
            })}
            <button className="loadMoreBtn"
                onClick={() => {
                    setCount(count+7)
                }}
                >
                Load More <img style={{display:"flex",width:"100%",height:"3em"}} className="dwnArrow" src="https://cdn-icons-png.flaticon.com/128/2989/2989995.png"/>
            </button>
        </div>
        <div className="divForTopPosts">
          <TopPosts/>
        </div>
        
        
      </div>
    ) 
    } else {
        return <div className="progressContainer"><CircularProgress /></div>
  }
}
// export default Articles;