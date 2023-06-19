import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import './Home.css'

function Top2(props) {
    console.log(props.propsToTop2)
    let { data1, data2, data3, data4 } = props.propsToTop2;
    return (
        <div  className="rightSide">
            <div style={{width:"100%"}} className="someName">
                <h1 className="line">Top Post</h1>
                <div className="mainfake">
                    <img
                        src={data4[28].urlToImage}
                        alt={<img src="" alt="The" />}
                        className="reimage"
                    />
                    <div className="recontant">
                        <Link style={{textDecoration:"none",color:"black",fontWeight:"bold"}} to={`/Info/${data4[28].title}`} state={{article:data4[28],data:[data4[11],data4[21],data4[31]]}}>
                            <h4 className="">{data4[28].title} </h4>
                        </Link>
                        <p className="">{data4[28].content}</p>
                        <p className='published'>{data4[28].publishedAt}</p>
                    </div>
                </div>


                {/* Down Tree */}

                <div className="mainfake mainfake1">
                    <img className="reimage reimage1" src={data1[88].urlToImage} alt="loding...." />
                    <div className="recontant">
                        <Link style={{textDecoration:"none",color:"black",fontWeight:"bold"}} to={`/Info/${data1[88].title}`} state={{article:data1[88],data:[data1[11],data1[21],data1[31]]}}>
                            <h5 className="">{data1[88].title} </h5>
                        </Link>
                        {/* <p>{data1[88].content}</p> */}
                        <p>{data1[88].author}</p>
                        <br />
                    </div>
                    
                </div>
                {/* <hr /> */}
                <div className="mainfake mainfake1">
                    <img className="reimage reimage1" src={data3[64].urlToImage} alt="loding...." />
                    <div className="recontant">
                        <Link style={{textDecoration:"none",color:"black",fontWeight:"bold"}}  to={`/Info/${data3[64].title}`} state={{article:data3[64],data:[data3[11],data3[21],data3[31]]}}>
                            <h5 className="">{data3[64].title} </h5>
                        </Link>
                        {/* <p>{data3[64].content}</p> */}
                        <br />
                    </div>
                    {/* <hr /> */}
                </div>
                <div className="mainfake mainfake1">
                    <img className="reimage reimage1" src={data2[91].urlToImage} alt="loding...." />
                    <div className="recontant">
                        <Link style={{textDecoration:"none",color:"black",fontWeight:"bold"}} to={`/Info/${data2[91].title}`} state={{article:data2[91],data:[data2[11],data2[21],data2[31]]}}>
                            <h5 className="">{data2[91].title} </h5>
                        </Link>
                        {/* <p>{data2[91].content}</p> */}
                        <br />
                    </div>
                    {/* <hr /> */}
                </div>
            </div>
            {/* <button
              onClick={() => {
                setCount(count + 1);
              }}
            >
              Lode More
            </button> */}
        </div>
    );
}

export default Top2;