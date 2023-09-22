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
      <h1>Latest Stories</h1>
      <div className="gasli">
        <div className="kasama">
          <div className="side-box">
            <Link style={{textDecoration:"none"}} to={`/Info/${data[0].name}`} state={{article:data[0],data:dataFromContext.bollywood}}>
              <h3 style={{color:"black",fontWeight:"bold"}}  className="heading">{data[0].name} </h3>
            </Link>
            <p className="cont">{data[0].details}</p>
            <p className='published'>{data[0].writtenBy}</p>
            <br />
          </div>
        </div>
        <div className="kasama">
          <div className="side-box">
            <Link style={{textDecoration:"none"}} to={`/Info/${data[1].name}`} state={{article:data[1],data:dataFromContext.technology}}>
              <h3 style={{color:"black",fontWeight:"bold"}} className="heading">{data[1].name} </h3>
            </Link>
            <p className="cont">{data[1].details}</p>
            <p className='published'>{data[1].writtenBy}</p>
            <br />
          </div>
        </div>
        <div className="kasama">
          <div className="side-box">
            <Link style={{textDecoration:"none"}} to={`/Info/${data[2].name}`} state={{article:data[2],data:dataFromContext.fitness}}>
              <h3 style={{color:"black",fontWeight:"bold"}} className="heading">{data[2].name} </h3>
            </Link>
            <p className="cont">{data[2].details}</p>
            <p className='published'>{data[2].writtenBy}</p>
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