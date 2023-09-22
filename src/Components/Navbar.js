/* eslint-disable jsx-a11y/anchor-is-valid */
// import React from "react";
// import { Routes, Route, Link } from "react-router-dom";
// import './Navbar.css'
// function Navbar() {
//   return (
//     <div className="main">
    
//       {/* <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/bollywood">Bollywood</Link>
//           </li>
//           <li>
//             <Link to="/food">Food</Link>
//           </li>
//           <li>
//             <Link to="/hollywood">Hollywood</Link>
//           </li>
//         </ul>
//       </nav> */}
//       <div className="linkDiv">
//         <Link className="link" to="/">
//           Home
//         </Link>
//         <Link className="link" to="/bollywood">
//           Bollywood
//         </Link>
//         <Link className="link" to="/technology">Technology</Link>
//         <Link className="link" to="/hollywood">
//           Hollywood                                                           
//         </Link>
//         <Link className="link" to="/food">Food</Link>
//         <Link className="link" to="/fitness">Fitness</Link>
//       </div>
//       <hr />
//     </div>
//   );
// }

// export default Navbar;
import React ,{useState,useContext} from 'react'
import { NavLink } from 'react-router-dom';
import "../App.css";
import Hamburger from './Hamburger';
import myContext from "./context";
 

function Navbar(props) {
  const [toggleBurger,setToggleBurger] = useState(false); 
  const data = useContext(myContext);
  console.log(data);
  console.log(props.extraData)
  const newData = props.extraData;
  console.log(toggleBurger);
  const toggleHamburger = () => {
    console.log('toggleHamburger');
    setToggleBurger(!toggleBurger);
    console.log(toggleBurger);
  }
  return (
    <>
      <div onClick={toggleHamburger} className='hamburger'>
          <Hamburger />
      </div>
      <div className="nav-list Navbar">
        <NavLink
          state={{}}
          className={toggleBurger ? "xyz" : "abc"}
          to="/"
          id="myLinks"
          style={({ isActive }) => {
            return isActive
              ? { color: "green" }
              : { color: "blue" };
          }}
        >
          Home
        </NavLink>
        <NavLink
          state={{someData:data ? data : newData}}
          className={toggleBurger ? "xyz" : "abc"}
          to="/Bollywood"
          id="myLinks"
          style={({ isActive }) => {
            return isActive ? { color: "green" } : { color: "blue" };
          }}
        >
          Bollywood
        </NavLink>
        <NavLink
          state={{someData:data ? data : newData}}
          className={toggleBurger ? "xyz" : "abc"}
          to="/Technology"
          id="myLinks"
          style={({ isActive }) => {
            return isActive ? { color: "green" } : { color: "blue" };
          }}
        >
          Technology
        </NavLink>
        <NavLink
          state={{someData:data ? data : newData}}
          className={toggleBurger ? "xyz" : "abc"}
          to="/Hollywood"
          id="myLinks"
          style={({ isActive }) => {
            return isActive ? { color: "green" } : { color: "blue" };
          }}
        >
          Hollywood
        </NavLink>
        <NavLink
          state={{someData:data ? data : newData}}
          className={toggleBurger ? "xyz" : "abc"}
          to="/Fitness"
          id="myLinks"
          style={({ isActive }) => {
            return isActive ? { color: "green" } : { color: "blue" };
          }}
        >
          Fitness
        </NavLink>
        <NavLink
          state={{someData:data ? data : newData}}
          className={toggleBurger ? "xyz" : "abc"}
          to="/Food"
          id="myLinks"
          style={({ isActive }) => {
            return isActive ? { color: "green" } : { color: "blue" };
          }}
        >
          Food
        </NavLink>
      </div>
      <hr id='NavHr' />
      <style jsx={true}>
        {`
           NavLink {
            display: ${toggleBurger ? 'inline' : 'none'};
            height:100vh;
            width:50vw;
            background-color:red
          }
       `}
      </style>
    </>
  )
}

export default Navbar
