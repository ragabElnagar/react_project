import React,{Component} from "react";
import axios from "axios"
import {Profile_skills,Profilee,Profile_item,Profile_list,Profile_title,Skills_title,Span,Skills,Web,Skills_desc,Bar,Title,Perc,Parent,Sp,Tspan,Sspan} from "./style.js";
class Profile extends Component{
  state={
    workes:[]
  }
  componentDidMount(){
    axios.get("js/data.json").then(res=>{this.setState({workes:res.data.Pro})})
  }
  render(){
    const {workes}=this.state;
    const theworkes=workes.map((e)=>{
      return(
                      <Bar key={e.id}>
                        <Title>{e.title}</Title>
                        <Perc>{e.perc}</Perc>
                        <Parent>
                            <Sp sp={e.id}></Sp>
                        </Parent>
                      </Bar>
      )
    })
  return (
    <Profile_skills>
            <div className="container">
                <Profilee>
                    <Profile_title><Tspan>My </Tspan>Profile</Profile_title>
                    <Profile_list>
                        <Profile_item>
                            <Span>Name</Span>
                            Ragab Elnagar
                        </Profile_item>
                        <Profile_item>
                            <Span>Birthday</Span>
                            25/6/1997
                        </Profile_item>
                        <Profile_item>
                            <Span>Address</Span>
                            Tanta
                        </Profile_item>
                        <Profile_item>
                            <Span>Phone</Span>
                            00000000
                        </Profile_item>
                        <Profile_item>
                            <Span>Email</Span>
                            ragabelnagar97@gmail.com
                        </Profile_item>
                        <Profile_item>
                            <Span>Website</Span>
                            <Web className="web">www.google.com</Web>
                        </Profile_item>
                    </Profile_list>
                </Profilee>

                <Skills>
                    <Skills_title className="skills-title">Some <Sspan>skills</Sspan></Skills_title>
                    <Skills_desc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </Skills_desc>
                    {theworkes}
                </Skills>

            </div>
        </Profile_skills>
  )
}}
export default Profile
