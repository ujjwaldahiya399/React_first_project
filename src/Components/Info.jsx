import React from "react";
import './Info.css';
import NewNav from "./NewNav";
import { useLocation, useNavigate,Link } from "react-router-dom";
function Info() {
  // let [data,setData] = useState();
  let infoFromLink = useLocation().state;
  console.log(infoFromLink);
  // let params = useLocation().state.paramsFromLink
  // let category = infoFromLink.paramFromLink.category;
  console.log(infoFromLink.data)

  let dataShow = infoFromLink.data;
  console.log(dataShow);
  let newDataShow = infoFromLink.data
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
    {/* <div className="top">
        <p className="theSirenTxt"><span>The</span><span>Siren</span></p>
        <p>Get Started</p>
    </div> */}
      <div className="infoAboutArticle">
        <div className="land">
          <div className="infoHeader">
            <img className="profilePng" src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" alt="img is loading" />
            <div className="infoOfArticle">
              <p className="authorName"><b>John Doe</b></p>
              <p className="dateOfPublish">2023-10Aug 2:12pm</p>
            </div>
          </div>
          <div className="socialMediaAccs">
            <img className="facebk" src="https://cdn-icons-png.flaticon.com/128/145/145802.png" alt="facebook" />
            <img className="twitr" src="https://cdn-icons-png.flaticon.com/128/3670/3670151.png" alt="twitter" />
            <img className="insta" src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png" alt="instagram" />
            <img className="youtube" src="https://cdn-icons-png.flaticon.com/128/3670/3670147.png" alt="youtube" />
          </div>
        </div>
        <img className="img" src={infoFromLink.article.imageUrl} alt="infoLoading" />
        <h3 className="infoTitle"> {infoFromLink.article.name} </h3>
        {/* <p className="id">{infoFromLink.article.id}</p> */}
        <p className="discrption">{infoFromLink.article.details}.To read more... <Link style={{textDecoration:"none"}}>{infoFromLink.url}</Link></p>
        <p className="authorName"><b>{infoFromLink.article.writtenBy}</b></p>
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
            <img alt = "loading" className="likeIcn" src="https://cdn-icons-png.flaticon.com/128/2636/2636668.png"/>
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
                2023-10Aug 2:12pm , Sunday
              </div>
            </div>
          </div>
        </div>
        <div className="moreFromSirenDiv">
                  <h2 className="more">More From Siren</h2>
        <div className="moreFromSameCategory">
          <div className="firstDiv">
              <img alt="loading" className="imgg spimgg" src={ newDataShow !== undefined ? newDataShow[2].imageUrl:dataShow[2].imageUrl} />
              <p className="authorName">Joshu Tree <br/>Overnight</p>
              <p className="readMore">To read more... <a href= { newDataShow !== undefined ? newDataShow[2].toKnowMoreUrl:dataShow[2].toKnowMoreUrl }>Click Here</a></p>
              <div className="oneMore">
                <p className="name">{newDataShow[2].name}</p>
                <div className="forProfilePngAndAuthor">
                <img id="someImg" className="profilePng" src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" alt="img is loading" />
                <p style={{marginLeft:"1em"}}>{ newDataShow !== undefined ? newDataShow[2].writtenBy:dataShow[2].author }</p>
                <p style={{marginLeft:"1em"}} >{ newDataShow !== undefined ? newDataShow[2].publishedAt:dataShow[2].publishedAt }</p>
                </div>

              </div>
          </div>
          <hr className="moreFromSireHr"/>
          <div className="secondDiv">
            <img alt="loading" className="imgg spimgg" src={ newDataShow !== undefined ? newDataShow[0].imageUrl:dataShow[0].imageUrl }/>
            <p className="authorName">Joshua Tree<br/> Overnight</p>
            <p className="readMore">To read more... <a href= { newDataShow !== undefined ? newDataShow[0].toKnowMoreUrl:dataShow[0].toKnowMoreUrl }>Click Here</a></p>
            <div className="oneMore">
                <p className="name">{newDataShow[0].name}</p>
                <div className="forProfilePngAndAuthor">
                <img id="someImg" className="profilePng" src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" alt="img is loading" />
                <p style={{marginLeft:"1em"}}>{ newDataShow !== undefined ? newDataShow[2].writtenBy:dataShow[2].author }</p>
                <p style={{marginLeft:"1em"}} >{ newDataShow !== undefined ? newDataShow[2].publishedAt:dataShow[2].publishedAt }</p>
                </div>
              </div>
          </div>
          <hr className="moreFromSireHr"/>
          <div className="thirdDiv">
            <img alt="loading" className="imgg spimgg" src={ newDataShow !== undefined ? newDataShow[1].imageUrl:dataShow[1].imageUrl }/>
            <p className="authorName">Joshua Tree<br/> Overnight</p>
            <p className="readMore">To read more... <a href= { newDataShow !== undefined ? newDataShow[1].toKnowMoreUrl:dataShow[1].toKnowMoreUrl }>Click Here</a></p>
            <div className="oneMore">
                <p className="name">{newDataShow[1].name}</p>
                <div className="forProfilePngAndAuthor">
                <img id="someImg" className="profilePng" src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" alt="img is loading" />
                <p style={{marginLeft:"1em"}}>{ newDataShow !== undefined ? newDataShow[2].writtenBy:dataShow[2].author }</p>
                <p style={{marginLeft:"1em"}} >{ newDataShow !== undefined ? newDataShow[2].publishedAt:dataShow[2].publishedAt }</p>
                </div>
              </div>
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
        <div className="footerDiv">
          {/* <NewNav/> */}
        </div>
      </div>
    </div>
  );
}

export default Info;
