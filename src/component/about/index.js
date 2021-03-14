import React,{Component} from "react";
import {Creative,Creative_info,Info_desc,Info_di,Info_dir,Info_title} from "./style.js"
const About=()=>{
  return (
    <Creative>
    <div className="container">
        <Creative_info>
            <Info_title>This is Me</Info_title>
            <Info_dir>Creative Director</Info_dir>
            <Info_desc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
            </Info_desc>
            <Info_di>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
            </Info_di>
        </Creative_info>
    </div>  
  </Creative>

  )
}
export default About
