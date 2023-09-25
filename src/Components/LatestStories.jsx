import React, { useEffect,useContext} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import myContext from "./context";
import "./Home.css"

function LatestStories(props) {
  // const [data, setData] = useState();
  // const [loaded, setLoaded] = useState(false);
  const params = useParams();
  const nav = useNavigate();
  const dataFromContext = useContext(myContext);
  console.log(dataFromContext);
  // const [count, setCount] = useState(3);


  useEffect(() => {
  }, [params]);

  const data = props.propsToLatestStories;
  console.log(data);
  return (
    <div className="DownSide">
      <hr className="shiro" />
      <h1 className="latestStoryText">Latest Stories</h1>
      <div className="gasli">
        <div className="kasama">
          <div className="side-box">
            <Link style={{textDecoration:"none"}} to={`/Info/${data[0].name}`} state={{article:data[0],data:dataFromContext.bollywood}}>
              <h3 style={{color:"black",fontWeight:"bold"}}  className="heading">{data[0].name} </h3>
            </Link>
            <p style={{color:"grey"}} className="cont">{data[0].details}</p>
            <p className='published'>TECH / TODAY AT 11:54</p>
            <br />
          </div>
        </div>
        <div className="kasama">
          <div className="side-box">
            <Link style={{textDecoration:"none"}} to={`/Info/${data[1].name}`} state={{article:data[1],data:dataFromContext.technology}}>
              <h3 style={{color:"black",fontWeight:"bold"}} className="heading">{data[1].name} </h3>
            </Link>
            <p style={{color:"grey"}} className="cont">{data[1].details}</p>
            <p className='published'>STYLE / AUGUST 30 2023</p>
            <br />
          </div>
        </div>
        <div className="kasama">
          <div className="side-box">
            <Link style={{textDecoration:"none"}} to={`/Info/${data[2].name}`} state={{article:data[2],data:dataFromContext.fitness}}>
              <h3 style={{color:"black",fontWeight:"bold"}} className="heading">{data[2].name} </h3>
            </Link>
            <p style={{color:"grey"}} className="cont">{data[2].details}</p>
            <p className='published PSP'>FITNESS / SEPTEMBER 20 2023</p>
            <br />
          </div>
        </div>
      </div>
      <hr className="shiro" />
      <p
        className="lM"
        onClick={() => {
          nav("/bollywood");
        }}
      >
        View More ➡️
      </p>
    </div>
  );
}

export default LatestStories;