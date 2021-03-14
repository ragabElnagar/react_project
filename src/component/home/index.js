import React,{Component} from "react";
import {Hom,Homebutton,Homedesc,Homeinf,Hometitle,Information} from "./style";
import "./style.js"
const Home=()=>{
  return (
    <Hom>
          <div className="container">
              <Information>
                <Hometitle>Ragab Elnagar</Hometitle>
                <Homeinf>Creative Director</Homeinf>
                <Homedesc>
                  this is my first bag by using react js and i hope to be good bage
                </Homedesc>
                <Homebutton>Let's Begin</Homebutton>
              </Information>
          </div>
    </Hom>
  )
}
export default Home
