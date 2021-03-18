import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {MdFingerprint} from 'react-icons/md'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Button} from '../components/Button'
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false)
    const[button, setButton]=useState(true);

    const handleClick = () => setClick(!click)
    const closeMobileMenu =() => setClick(false)

    const showButton =() => {
        if(window.innerWidth <=960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

window.addEventListener('resize', showButton)


    return (
        <>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to='/' className="navbar-logo">
                <MdFingerprint className="navbar-icon" />
                Pearl Rehabilitation Centre
             </Link>
             <div className="menu-icon" onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars /> }
             </div>
             <ul className={click ? 'nav-menu active': 'nav-menu'}>
                 <li className="nav-item">
                     <Link to='/' className="nav-links">
                         Home 
                     </Link>
                 </li>
                 <li className="nav-item">
                     <Link to='/services' className="nav-links">
                         Services
                     </Link>
                 </li>
                 {/* <li className="nav-item">
                     <Link to='/pricing' className="nav-links">
                         Pricing 
                     </Link>
                 </li> */}
                 <li className="nav-item">
                     <Link to='/Admission' className="nav-links">
                         Admission
                     </Link>
                 </li>
                 <li className="nav-item">
                     <Link to='/team' className="nav-links">
                         Meet the Team
                     </Link>
                 </li>
                 <li className="nav-item">
                     <Link to='/contact' className="nav-links">
                         Contact Us
                     </Link>
                 </li>
                 <li className="nav-btn">
                     {
                          button ? (
                              <Link to='/sign-up' className="btn-link">
                                  <Button buttonStyle='btn--outline'>
                                    Sign Up
                                  </Button>
                              </Link>
                          ) : (
                              <Link  to='/sign-up' className="btn-link">
                               <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>

                                   Sign Up
                               </Button>
                              </Link>
                          )
                     }
                 </li>
             </ul>
          </div>
        </div>
        </>
    )
}

export default Navbar