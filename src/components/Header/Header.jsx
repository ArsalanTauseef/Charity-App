import React from "react";
import "./Header.css";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaGooglePlusG,
} from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import {NavLink} from 'react-router-dom'

export const Header = () => {
  return (
    <>
      <header className="headerControl">
        <div className="upperHeader">
          <div id="UPDetails">
            <div id="UPinfo">
              <span>
                <p>Phone: +99 (0) 101 0000 888</p>
              </span>
              |
              <span>
                <p>Email: noreply@yourdomain.com</p>
              </span>
            </div>
            <div id="UPsocial">
              |
              <span>
                <FaTwitter />
              </span>
              <span>
                <FaFacebook />
              </span>
              <span>
                <FaInstagram />
              </span>
              <span>
                <FaGooglePlusG />
              </span>
            </div>
          </div>

          <div id="UPDropdown">
            <span id="DPblock0">
              <p>English</p>
              <span className="RiArrowDropDownLine">
                <RiArrowDropDownLine />
              </span>
              <ul id="DPblock">
                <li>Enlgish</li>
                <li>French</li>
                <li>Punjabi</li>
                <li>Urdu</li>
              </ul>
            </span>
            |
            <span id="DPblock1">  
              <p>Subscribe Now</p>
            </span>
          </div>
        </div>
      </header>
      <nav className="lowerHeader">
          <div id="navbr">
            <div id="logo">
              <h1>Charity<span style={{color:"#0CC97D"}}>.</span></h1>
            </div>
            <div id="navlinks">
              <ul>
                <li><NavLink className={"awa"} to='/' style={{textDecoration:'none'}}>Home</NavLink></li>
                <li><NavLink className={"awa"} to='about' style={{textDecoration:'none'}}>About</NavLink></li>
                <li>Latest Causes</li>
                <li>Social Events</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div id="btn">
              <button>Donate</button>
            </div>
          </div>
        </nav>
    </>
  );
};
