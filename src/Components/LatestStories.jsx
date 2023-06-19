import React, { useEffect} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function LatestStories(props) {
  // const [data, setData] = useState();
  // const [loaded, setLoaded] = useState(false);
  const params = useParams();
  const nav = useNavigate();

  // const [count, setCount] = useState(3);


  useEffect(() => {
  }, [params]);

  console.log("Props", props.propsToLatestStories);
  const { data1, data2} = props.propsToLatestStories;
  console.log("Data1", data1);
  return (
    <div style={{marginLeft:"3.8em"}} className="DownSide">
      <hr className="shiro" />
      <h1>Latest Stories</h1>
      <div className="gasli">
        <div className="kasama">
          <div className="side-box">
            <Link style={{textDecoration:"none"}} to={`/Info/${data1[0].title}`} state={{article:data1[0]}}>
              <h3 style={{color:"black",fontWeight:"bold"}}  className="heading">{data1[0].title} </h3>
            </Link>
            <p className="cont">{data1[0].content}</p>
            <p className='published'>{data1[0].publishedAt}</p>
            <br />
          </div>
        </div>
        <div className="kasama">
          <div className="side-box">
            <Link style={{textDecoration:"none"}} to={`/Info/${data2[0].title}`} state={{article:data2[0]}}>
              <h3 style={{color:"black",fontWeight:"bold"}} className="heading">{data2[0].title} </h3>
            </Link>
            <p className="cont">{data2[0].content}</p>
            <p className='published'>{data2[0].publishedAt}</p>
            <br />
          </div>
        </div>
        <div className="kasama">
          <div className="side-box">
            <Link style={{textDecoration:"none"}} to={`/Info/${data1[59].title}`} state={{article:data1[0]}}>
              <h3 style={{color:"black",fontWeight:"bold"}} className="heading">{data1[59].title} </h3>
            </Link>
            <p className="cont">{data1[59].content}</p>
            <p className='published'>{data1[59].publishedAt}</p>
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