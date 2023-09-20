import React, { useEffect, useState } from "react";
import "./Articles.css";

import CircularProgress from '@mui/material/CircularProgress';
import { useParams,Link } from "react-router-dom";
import axios from "axios";
import TopPosts from "./TopPosts";
export default function Articles() {
  const [jsondata, setJsonData] = useState();
  const [loaded, setLoaded] = useState(false);
  const [count, setCount] = useState(7);
  let params = useParams();
  params = params.category.toLowerCase();
  console.log(params);

  console.log("Use Params returned:", params);
  useEffect(() => {
    axios.get("/db/data.json")
    .then((res) => {
      setJsonData(res.data);
      setLoaded(true);
    })
    .catch(err => console.error(err));
  }, [params]);
  if (loaded) {
    return (
      <>
      <div style={{display:"flex",justifyContent:"space-between",marginTop:"3em"}} className="mainContainer">
      {console.log(jsondata[params])}
        <div className="articles-container">
        <h2>{params.toUpperCase()}</h2>
            {jsondata[params].map((article,index) => {
                console.log(count,index);
                if (index<count) {
                    return (
                      
                        <div id= {index >= 7 ? "xxx":"noxxx"} className="article" key={index}>
                        {/* {console.log(index)} */}
                            <img src={article.imageUrl}
                                className="thumbnail"
                                alt=" loading..."
                             />
                             <div className="text-container">
                                <Link style={{textDecoration:"none",color:"black",fontWeight:"bold"}} to={`/info/${article.name}`} state={{article:article,data:jsondata[params]}}><p className="title">{article.name}</p></Link>
                                {/* <p className="title">{article.title}</p> */}
                                <p className="content">{article.details}</p>
                                <p className="published">{article.writtenBy}</p>
                             </div>
                        </div>
                    )
                }
            })}
            {/* <button className="loadMoreBtn"
                onClick={() => {
                    setCount(count+7)
                }}
                >
                Load More <img alt="loading" style={{display:"flex",width:"100%",height:"3em"}} className="dwnArrow" src="https://cdn-icons-png.flaticon.com/128/2989/2989995.png"/>
            </button> */}
        </div>
        <div className="divForTopPosts">
          <TopPosts/>
        </div>
        
        {/* <button className="loadMoreBtn"
                onClick={() => {
                    setCount(count+7)
                }}
                >
                Load More <img alt="loading" style={{display:"flex",width:"100%",height:"3em"}} className="dwnArrow" src="https://cdn-icons-png.flaticon.com/128/2989/2989995.png"/>
            </button>
        </div> */}
        
      </div>
      <div style={{display:"flex",justifyContent:"center"}}>
            <button className="loadMoreBtn"
                onClick={() => {
                    setCount(count+7)
                }}
                >
                Load More <img alt="loading" style={{display:"flex",width:"100%",height:"3em"}} className="dwnArrow" src="https://cdn-icons-png.flaticon.com/128/2989/2989995.png"/>
            </button>
      </div>
      </>
    ) 
    } else {
        return <div className="progressContainer"><CircularProgress /></div>
  }
}
// export default Articles;