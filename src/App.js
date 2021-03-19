// import React, { Component } from "react";
// import "./App.css";
// import SignUp from "./components/Home/SignUp/SignUp";
// import SignIn from "./components/Home/SignIn/SignIn";
// import Home from "./components/Home/Home";
// import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

// export default class App extends Component {
//   render() {
//     let navLink = (
//       <div className="Tab">
//         <NavLink to="/sign-in" activeClassName="activeLink" className="signIn">
//           Sign In
//         </NavLink>
//         <NavLink exact to="/" activeClassName="activeLink" className="signUp">
//           Sign Up
//         </NavLink>
//       </div>
//     );
//     const login = localStorage.getItem("isLoggedIn");

//     return (
//       <div className="App">
//         {login ? (
//           <Router>
//             <Route exact path="/" component={SignUp}></Route>
//             <Route path="/sign-in" component={SignIn}></Route>
//             <Route path="/home" component={Home}></Route>
//           </Router>
//         ) : (
//           <Router>
//             {navLink}
//             <Route exact path="/" component={SignUp}></Route>
//             <Route path="/sign-in" component={SignIn}></Route>
//             <Route path="/home" component={Home}></Route>
//           </Router>
//         )}
//       </div>
//     );
//   }
// }



import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/HomePage/Home';
import Footer from './components/pages/Footer/Footer';
import Services from './components/pages/Services/Services'
import Products from './components/pages/Products/Products'
import SignUp from './components/pages/SignUp/SignUp'



function App() {
  return (
    <Router>
 <Navbar />  
 <Switch>
   <Route path='/'exact component={Home}/> 
   <Route path='/services' component={Services}/>
   <Route path='/products' component={Products}/> 
   <Route path='/sign-up' component={SignUp}/>  
 </Switch>
 <Footer />

    </Router>
     
   
  )
}

export default App; 