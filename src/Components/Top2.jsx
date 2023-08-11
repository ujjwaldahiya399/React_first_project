import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import './Home.css'
import myContext from "./context";
import { useContext } from "react";
function Top2(props) {
    const dataFromContext = useContext(myContext)
    let data = props.propsToTop2;
    console.log(data)
    return (
        <div  className="rightSide">
            <div style={{width:"100%"}} className="someName">
                <h1 className="line">Top Post</h1>
                <div className="mainfake">
                    <img
                        src={data[0].imageUrl}
                        alt={<img src="" alt="The" />}
                        className="reimage"
                    />
                    <div className="recontant">
                        <Link style={{textDecoration:"none",color:"black",fontWeight:"bold"}} to={`/Info/${data[0].name}`} state={{article:data[0],data:dataFromContext.bollywood}}>
                            <h4 className="">{data[0].name} </h4>
                        </Link>
                        <p className="">{data[0].details}</p>
                        <p className='published'>{data[0].writtenBy}</p>
                    </div>
                </div>


                {/* Down Tree */}

                <div className="mainfake mainfake1">
                    <img className="reimage reimage1" src={data[1].imageUrl} alt="loding...." />
                    <div className="recontant">
                        <Link style={{textDecoration:"none",color:"black",fontWeight:"bold"}} to={`/Info/${data[1].name}`} state={{article:data[1],data:dataFromContext.technology}}>
                            <h5 className="">{data[1].name} </h5>
                        </Link>
                        {/* <p>{data1[88].content}</p> */}
                        <p>{data[1].writtenBy}</p>
                        <br />
                    </div>
                    
                </div>
                {/* <hr /> */}
                <div className="mainfake mainfake1">
                    <img className="reimage reimage1" src={data[2].imageUrl} alt="loding...." />
                    <div className="recontant">
                        <Link style={{textDecoration:"none",color:"black",fontWeight:"bold"}}  to={`/Info/${data[2].name}`} state={{article:data[2],data:dataFromContext.fitness}}>
                            <h5 className="">{data[2].name} </h5>
                        </Link>
                        {/* <p>{data3[64].content}</p> */}
                        <br />
                    </div>
                    {/* <hr /> */}
                </div>
                <div className="mainfake mainfake1">
                    <img className="reimage reimage1" src={data[3].imageUrl} alt="loding...." />
                    <div className="recontant">
                        <Link style={{textDecoration:"none",color:"black",fontWeight:"bold"}} to={`/Info/${data[3].name}`} state={{article:data[3],data:data.hollywood}}>
                            <h5 className="">{data[3].name} </h5>
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