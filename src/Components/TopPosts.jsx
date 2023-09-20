import React, { useEffect, useState ,useContext} from 'react'
import { Link, useParams } from 'react-router-dom';
// import DownArrow from "./downArrow.svg";
import axios from 'axios';
import './TopPosts.css';
import myContext from './context';
function TopPosts({ props }) {
    // const focus = [50, 51, 52, 53];
    const dataFromContext = useContext(myContext)
    console.log(dataFromContext);
    let data = dataFromContext ? dataFromContext:[];
    // let newData = data[params]
    // const [data, setData] = useState();
    const [newData,setNewData] = useState();
    const [loaded, setLoaded] = useState(true);
    let params = useParams();
    params = params.category.toLowerCase();
    console.log(params);
    const [count, setCount] = useState(4);
    console.log(params);
    console.log(data[params].slice(7,data[params].length-1));
    let newDataa = data[params].slice(7,data[params].length);
    // const date = new Date();
    // const dateString =
    //     date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();

    // useEffect(() => {
    //     var url = "https://blogdata.onrender.com/" + params.category;
    //     // var url = 'https://newsapi.org/v2/everything?q=' +
    //     //     params.category +
    //     //     "&from=" +
    //     //     dateString +
    //     //     'sortBy=popularity&' +
    //     //     'apiKey=f64582dcc19545d08902cbb3f5fe11ad';


    //     // var req = new Request(url);
    //     // fetch(req).then((response) => {
    //     //     response.json().then((data) => {

    //     //         setData(data);
    //     //         setLoaded(true);
    //     //         console.log("value in state : ",data);
    //     //     });
    //     // });
    //     axios.get(url).then((response) => {
    //       console.log(response.data.slice(31,response.data.length));
    //       setNewData(response.data.slice(31,response.data.length));
    //       console.log(newData);
    //       setData(response.data);
    //       setLoaded(true)
    //     })
    // }, [params]);
    
    // let topPostArr = [];
    // for(let i = 12; i <= 16; i++) {
    //   topPostArr.push(data[i]);
    // }
    // console.log(topPostArr)
    if(loaded) {
        return (
            <div className='container2'>
                <h2 className='line'>Top Posts</h2>
                {/* <h1>{titleString}</h1> */}
                {newDataa.map((article,index) => {
                    // var article = props[value];
                    if (index < count) {
                        return (
                            <div className='article2' key={index}>
                                <img
                                    className='image2'
                                    src={article.imageUrl}
                                    alt="imageshow"
                                />
                                <div className='text-content2'>
                                    <Link style={{textDecoration:"none",color:"black"}} to={`/Info/${article.name}`} state={ {article:article,data:newDataa} } className='anchor2'>
                                        <p className='title'>{article.name}</p>
                                    </Link>
                                    <p id='someContent' className='content'>{article.details}</p>
                                    <p className='published'>{article.publishedAt}</p>
                                </div>
                            </div>
                        );
                    }
                
                }
                )}


                <div className='advertize'>
                    <div className='advertisementBox'>Advertisement</div>
                </div>
                
            </div>
        );

    }
    else {
        return <div>loaded</div>
    }

}

export default TopPosts