import React, { useState,useContext } from "react";
import { Link } from "react-router-dom";
import myContext from "./context";
import "../App.css";
function LatestArticles(props) {
    const [count, setCount] = useState(4);
    const dataFromContext = useContext(myContext);
    console.log(dataFromContext);
    const data = props.latestArticleData
    // if (loaded) {
        console.log(data);
    return (
        <div className="latestArticleDiv">
            <div>
                <h1 className="lines">Latest Articles</h1>

                <div className="mainFirst">
                    <img className="mmypic" src={data[0].imageUrl} alt="lod.." />
                    <div className="sistum">
                        <Link style={{textDecoration:"none",color:"black",fontWeight:"bold"}} to={`/Info/${data[0].name}`} state={{article:data[0],data:dataFromContext.fitness}}>
                            <h4 className="heading">{data[0].name} </h4>
                        </Link>
                        <p>{data[0].details}</p>
                        <p className='published'>{data[0].writtenBy}</p>
                    </div>
                </div>
                <div className="mainFirst">
                    <img className="mmypic" src={data[1].imageUrl} alt="lod.." />
                    <div className="sistum">
                        <Link style={{textDecoration:"none",color:"black",fontWeight:"bold"}} to={`/Info/${data[1].name}`} state={{article:data[1],data:dataFromContext.bollywood}}>
                            <h4 className="heading">{data[1].name} </h4>
                        </Link>
                        <p>{data[1].details}</p>
                        <p className='published'>{data[1].writtenBy}</p>
                    </div>
                </div>
                <div className="mainFirst">
                    <img className="mmypic" src={data[2].imageUrl} alt="lod.." />
                    <div className="sistum">
                        <Link style={{textDecoration:"none",color:"black",fontWeight:"bold"}} to={`/Info/${data[2].name}`} state={{article:data[2],data:dataFromContext.hollywood}}>
                            <h4 className="heading">{data[2].name} </h4>
                        </Link>
                        <p>{data[0].details}</p>
                        <p className='published'>{data[2].writtenBy}</p>
                    </div>
                </div>
                <div className="mainFirst">
                    <img className="mmypic" src={data[3].imageUrl} alt="lod.." />
                    <div className="sistum">
                        <Link style={{textDecoration:"none",color:"black",fontWeight:"bold"}} to={`/Info/${data[3].name}`} state={{article:data[3],data:dataFromContext.food}}>
                            <h4 className="heading">{data[3].name} </h4>
                        </Link>
                        <p>{data[3].details}</p>
                        <p className='published'>{data[3].writtenBy}</p>
                    </div>
                </div>
            </div>
            <p
                onClick={() => {
                    setCount(count + 4);
                }}
                className="lM"
            >
                Load More ⬇️
            </p>
            <div className="somenm" >
                <img src={data[4].imageUrl} alt="alt" id="bigImg" />
                {/* <p className="baada">{data5[55].content}</p> */}
                <p className='published'>{data[4].writtenBy}</p>
            </div>
        </div>
    );
    // } else {
    //   return (
    //     <div className="lodwalpart">
    //       <h1 className="loading">Loading...</h1>;
    //     </div>
    //   );
    // }
}

export default LatestArticles;