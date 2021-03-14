import React,{Component} from "react";
import axios from "axios";
import {Wok,Worktitile,Part,Icon,Partdesc,Parttitle,Line} from "./style.js";
class Work extends Component{
state={
  works:[]
}
componentDidMount(){
  axios.get("js/data.json").then(res=>{this.setState({works: res.data.works})})
}
  render(){
    const {works}=this.state;
    const thework=works.map((e)=>{
      return(
          <Part first={e.id} key={e.id}>
            <Icon className={e.icon_name}></Icon>
            <Parttitle>{e.title}</Parttitle>
            <Line/>
            <Partdesc>{e.body}</Partdesc>
          </Part>

      )

    })
  return (
    <Wok>
        <div className="container">
          <Worktitile>My Work</Worktitile>
            {thework}
          </div>
    </Wok>
  )
}}
export default Work
