import React,{Component} from "react";
import { Link} from "react-router-dom";
import {Navbar,Logo,Logotext,Anchor,Ullist,Lilist} from "./style.js"
const Navpar=()=>{
  return (
    <Navbar>
        <div className="container">
          <Logo>
            <Logotext>Ultra Profile</Logotext>
          </Logo>
          <Ullist>
            <Lilist><Link className="a" to="/">Home</Link> </Lilist>
            <Lilist><Anchor href="#">Work</Anchor> </Lilist>
            <Lilist><Anchor href="#">Protofolo</Anchor> </Lilist>
            <Lilist><Anchor href="#">Resume</Anchor> </Lilist>
            <Lilist><Anchor href="#">About</Anchor> </Lilist>
            <Lilist><Link className="a" to="/contact">Contact</Link> </Lilist>

          </Ullist>

        </div>

    </Navbar>
  )
}
export default Navpar
