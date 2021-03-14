import React,{Component} from "react";

import About  from "./../about";
import Footer  from "./../footer";
import Home  from "./../home";
import Portofile  from "./../portofolio"; 
import  Profile from "./../profil";
import Socialmedia  from "./../socialmedia";
import Work  from "./../work";
class Index extends Component{
  render(){
  return (
    <div>
          <Home/>
          <Work/>
          <Portofile/>
          <Profile/>
          <About/>
          <Socialmedia/>
          <Footer/>

    </div>
  )
}
}
export default Index
