import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
// import DownArrow from "./downArrow.svg";
import axios from 'axios';
import './TopPosts.css';

function TopPosts({ props }) {
    // const focus = [50, 51, 52, 53];
    const [data, setData] = useState();
    const [newData,setNewData] = useState();
    const [loaded, setLoaded] = useState(false);
    const params = useParams();
    const [count, setCount] = useState(3);
    // const date = new Date();
    // const dateString =
    //     date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();

    useEffect(() => {
        var url = "https://blogdata.onrender.com/" + params.category;
        // var url = 'https://newsapi.org/v2/everything?q=' +
        //     params.category +
        //     "&from=" +
        //     dateString +
        //     'sortBy=popularity&' +
        //     'apiKey=f64582dcc19545d08902cbb3f5fe11ad';


        // var req = new Request(url);
        // fetch(req).then((response) => {
        //     response.json().then((data) => {

        //         setData(data);
        //         setLoaded(true);
        //         console.log("value in state : ",data);
        //     });
        // });
        axios.get(url).then((response) => {
          console.log(response.data.slice(31,response.data.length));
          setNewData(response.data.slice(31,response.data.length));
          console.log(newData);
          setData(response.data);
          setLoaded(true)
        })
    }, [params]);
    
    // let topPostArr = [];
    // for(let i = 12; i <= 16; i++) {
    //   topPostArr.push(data[i]);
    // }
    // console.log(topPostArr)
    if (loaded) {
        return (
            <div className='container2'>
                <h2 className='line'>Top Posts</h2>
                {/* <h1>{titleString}</h1> */}
                {newData.map((article,index) => {
                    // var article = props[value];
                    if (index < count) {
                        return (
                            <div className='article2' key={index}>
                                <img
                                    className='image2'
                                    src={article.urlToImage}
                                    alt="imageshow"
                                />
                                <div className='text-content2'>
                                    <Link style={{textDecoration:"none",color:"black"}} to={`/Info/${article.title}`} state={ {article:article,data:newData} } className='anchor2'>
                                        <p className='title'>{article.title}</p>
                                    </Link>
                                    {/* <p className='content'>{article.content}</p> */}
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