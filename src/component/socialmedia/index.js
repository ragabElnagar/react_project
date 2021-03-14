import React,{Component} from "react";
import axios from "axios"
import {Social_media,Social,Icon,P,Span1,Span2} from "./style.js"
class Socialmedia extends Component{
  state={
    social:[]
  }
componentDidMount(){
  axios.get("js/data.json").then(res=>{
    this.setState({social:res.data.social})
  })
}

  render(){
    const {social}=this.state;
    const thesocial=social.map((e)=>{
      return(
        <Social key={e.id} item={e.id}>
        <Icon className={e.icon}></Icon>
        <P>
            <Span1>{e.title}</Span1>
            <Span2>{e.body}</Span2>
        </P>
    </Social>
      )
    })
  return (
    <Social_media>
      {thesocial}
</Social_media>

  )
}}
export default Socialmedia
