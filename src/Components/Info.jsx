import React, { useEffect, useState } from "react";
import './Info.css';
import axios from "axios";
import { useLocation, useNavigate,Link } from "react-router-dom";
function Info() {
  // let [data,setData] = useState();
  const [loaded, setLoaded] = useState(false);
  let infoFromLink = useLocation().state;
  console.log(infoFromLink);
  // let params = useLocation().state.paramsFromLink
  // let category = infoFromLink.paramFromLink.category;
  console.log(infoFromLink.data)

  let dataShow = infoFromLink.data;
  console.log(dataShow);
  let newDataShow = infoFromLink.data.articles
  console.log(newDataShow)
  // let dataShowFromArticlesPage;
  // infoFromLink.article[21] !=="" ? dataShowFromArticlesPage = infoFromLink.article[21] : dataShowFromArticlesPage = ""
  // console.log(dataShowFromArticlesPage)
  // console.log(infoFromLink.article.title, infoFromLink.urltoImage);
  let navigate = useNavigate();
  
    // var url = "https://newsapi.org/v2/everything?q=" +
    //   category +
    //   "&from=" +  // put date string for latest articles
    //   "&sortBy=publishedAt&language=en&" +
    //   "apiKey=ad2f8f6ee02b4b5daa12032ed92fb380";

      // axios.get(url).then((response) => {
      //   console.log(data)
      //   setData(response.data);
      //   setLoaded(true);
        
      // })
  return (
    <div className="mainContainer">
    <div className="top">
        <p className="theSirenTxt"><span>The</span><span>Siren</span></p>
        <p>Get Started</p>
    </div>
      <div className="infoAboutArticle">
        <div className="land">
          <div className="infoHeader">
            <img className="profilePng" src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" alt="img is loading" />
            <div className="infoOfArticle">
              <p className="authorName"><b>John Doe</b></p>
              <p className="dateOfPublish">{infoFromLink.article.publishedAt}</p>
            </div>
          </div>
          <div className="socialMediaAccs">
            <img className="facebk" src="https://cdn-icons-png.flaticon.com/128/145/145802.png" alt="facebook" />
            <img className="twitr" src="https://cdn-icons-png.flaticon.com/128/3670/3670151.png" alt="twitter" />
            <img className="insta" src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png" alt="instagram" />
            <img className="youtube" src="https://cdn-icons-png.flaticon.com/128/3670/3670147.png" alt="youtube" />
          </div>
        </div>
        <img className="img" src={infoFromLink.article.urlToImage} alt="infoLoading" />
        <h3 className="infoTitle"> {infoFromLink.article.title} </h3>
        <p className="id">{infoFromLink.article.id}</p>
        <p className="discrption">{infoFromLink.article.description}.To read more... <Link style={{textDecoration:"none"}}>{infoFromLink.url}</Link></p>
        <p className="authorName"><b>{infoFromLink.article.author}</b></p>
        <p className="postname">{infoFromLink.article.name}</p>
        <div className="sharePost">
          <div className="likes">
            <img className="likeIcn" src="https://cdn-icons-png.flaticon.com/128/2636/2636668.png" alt="likeImage" />
            <p>11.9k</p>
          </div>
          <div className="hand">
            <img className="shareIcon" src="https://cdn-icons-png.flaticon.com/128/3416/3416189.png" alt="shareIcon" />
            <p>Share this article</p>
          </div>
        </div>
        <div className="writtenBysection">
          <div className="likeBox">
            <img className="likeIcn" src="https://cdn-icons-png.flaticon.com/128/2636/2636668.png"/>
            <p>11.9k</p>
          </div>
          <hr/>
          <div className="writterDetails">
            <img className="profilePngg" src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" alt="profileIcon"/>
            <div className="details">
              {/* <p>WRITTEN BY</p>
              <p><b>John Doe</b></p>
              <p>{infoFromLink.article.publishedAt}</p> */}
              <div className="wrtnDtls">
                WRITTEN BY:<br/>
                John Doe<br/>
                {infoFromLink.article.publishedAt}
              </div>
            </div>
          </div>
        </div>
        <p>More From Siren</p>
        <div className="moreFromSameCategory">
          <div className="firstDiv">
              <img className="imgg" src={ newDataShow !== undefined ? newDataShow[2].urlToImage:dataShow[2].urlToImage} />
              <h2>Joshua Tree<br/> Overnight</h2>
              <p>To read more... <a href= { newDataShow !== undefined ? newDataShow[2].url:dataShow[2].url }>Click Here</a></p>
              <div className="oneMore">
                <img style={{display:"flex",width:"4em"}} id="someImg" className="profilePng" src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" alt="img is loading" />
                <p style={{marginLeft:"1em"}}>{ newDataShow !== undefined ? newDataShow[2].author:dataShow[2].author }</p>
                <p style={{marginLeft:"1em"}} >{ newDataShow !== undefined ? newDataShow[2].publishedAt:dataShow[2].publishedAt }</p>
              </div>
          </div>
          <div className="secondDiv">
            <img src={ newDataShow !== undefined ? newDataShow[0].urlToImage:dataShow[0].urlToImage }/>
            <h2>Joshua Tree<br/> Overnight</h2>
            <p>To read more... <a href= { newDataShow !== undefined ? newDataShow[0].url:dataShow[0].url }>Click Here</a></p>
            <div className="oneMore">
                <img style={{display:"flex",width:"4em"}} id="someImg" className="profilePng" src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" alt="img is loading" />
                <p style={{marginLeft:"1em"}}>{ newDataShow !== undefined ? newDataShow[0].author:dataShow[0].author }</p>
                <p style={{marginLeft:"1em"}} >{ newDataShow !== undefined ? newDataShow[0].publishedAt:dataShow[0].publishedAt }</p>
              </div>
          </div>
          <div className="thirdDiv">
            <img src={ newDataShow !== undefined ? newDataShow[1].urlToImage:dataShow[1].urlToImage }/>
            <h2>Joshua Tree<br/> Overnight</h2>
            <p>To read more... <a href= { newDataShow !== undefined ? newDataShow[1].url:dataShow[1].url }>Click Here</a></p>
            <div className="oneMore">
                <img style={{display:"flex",width:"4em"}} id="someImg" className="profilePng" src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" alt="img is loading" />
                <p style={{marginLeft:"1em"}}>{ newDataShow !== undefined ? newDataShow[1].author:dataShow[1].author}</p>
                <p style={{marginLeft:"1em"}} >{ newDataShow !== undefined ? newDataShow[1].publishedAt:dataShow[1].publishedAt }</p>
              </div>
          </div>
        </div>
        <div className="bckBtn">
          <button
            onClick={() => {
              navigate(-1);
            }}
            className="backBtn"
          >
            <img src="https://cdn-icons-png.flaticon.com/128/3415/3415823.png" alt="backBtnIcon" className="backBtnIcon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Info;
