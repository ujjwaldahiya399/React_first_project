import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
function LatestArticles(props) {
    const [count, setCount] = useState(4);
    console.log("Props", props.props);

    const { data1, data2, data3, data5 } = props.props
    // if (loaded) {
        console.log(data1[11]);
        console.log(data2);
    return (
        <div style={{marginLeft:"1.4em"}} className="latestArticleDiv">
            <div>
                <h1 className="lines">Latest Articles</h1>

                <div className="mainFirst">
                    <img className="mmypic" src={data1[55].urlToImage} alt="lod.." />
                    <div className="sistum">
                        <Link style={{textDecoration:"none",color:"black",fontWeight:"bold"}} to={`/Info/${data1[55].title}`} state={{article:data1[55],data:[data1[11],data1[23],data1[39]]}}>
                            <h4 className="heading">{data1[55].title} </h4>
                        </Link>
                        <p>{data1[55].content}</p>
                        <p className='published'>{data1[55].publishedAt}</p>
                    </div>
                </div>
                <div className="mainFirst">
                    <img className="mmypic" src={data3[55].urlToImage} alt="lod.." />
                    <div className="sistum">
                        <Link style={{textDecoration:"none",color:"black",fontWeight:"bold"}} to={`/Info/${data3[55].title}`} state={{article:data3[55],data:[data3[11],data3[23],data3[43]]}}>
                            <h4 className="heading">{data3[55].title} </h4>
                        </Link>
                        <p>{data3[55].content}</p>
                        <p className='published'>{data3[55].publishedAt}</p>
                    </div>
                </div>
                <div className="mainFirst">
                    <img className="mmypic" src={data5[55].urlToImage} alt="lod.." />
                    <div className="sistum">
                        <Link style={{textDecoration:"none",color:"black",fontWeight:"bold"}} to={`/Info/${data5[55].title}`} state={{article:data5[55],data:[data5[21],data5[11],data5[37]]}}>
                            <h4 className="heading">{data5[55].title} </h4>
                        </Link>
                        <p>{data5[55].content}</p>
                        <p className='published'>{data5[55].publishedAt}</p>
                    </div>
                </div>
                <div className="mainFirst">
                    <img className="mmypic" src={data2[55].urlToImage} alt="lod.." />
                    <div className="sistum">
                        <Link style={{textDecoration:"none",color:"black",fontWeight:"bold"}} to={`/Info/${data2[55].title}`} state={{article:data2[55],data:[data2[33],data2[11],data2[41]]}}>
                            <h4 className="heading">{data2[55].title} </h4>
                        </Link>
                        <p>{data2[55].content}</p>
                        <p className='published'>{data2[55].publishedAt}</p>
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
                <img style={{width:"100%",height:"100%"}} src={data5[49].urlToImage} alt="alt" id="bigImg" />
                {/* <p className="baada">{data5[55].content}</p> */}
                <p className='published'>{data5[66].publishedAt}</p>
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