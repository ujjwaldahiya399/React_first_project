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
import React from 'react'
import { NavLink } from 'react-router-dom';
import "../App.css";
function Navbar() {
  return (
    <>
      <header className="Navbar">
        <NavLink
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
          to="/Bollywood"
          id="myLinks"
          style={({ isActive }) => {
            return isActive ? { color: "green" } : { color: "blue" };
          }}
        >
          Bollywood
        </NavLink>
        <NavLink
          to="/Technology"
          id="myLinks"
          style={({ isActive }) => {
            return isActive ? { color: "green" } : { color: "blue" };
          }}
        >
          Technology
        </NavLink>
        <NavLink
          to="/Hollywood"
          id="myLinks"
          style={({ isActive }) => {
            return isActive ? { color: "green" } : { color: "blue" };
          }}
        >
          Hollywood
        </NavLink>
        <NavLink
          to="/Fitness"
          id="myLinks"
          style={({ isActive }) => {
            return isActive ? { color: "green" } : { color: "blue" };
          }}
        >
          Fitness
        </NavLink>
        <NavLink
          to="/Food"
          id="myLinks"
          style={({ isActive }) => {
            return isActive ? { color: "green" } : { color: "blue" };
          }}
        >
          Food
        </NavLink>
      </header>
      <hr id='NavHr' />
    </>
  )
}

export default Navbar
