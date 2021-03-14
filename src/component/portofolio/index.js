import React,{Component ,useState,useEffect} from "react";
import axios from "axios"
import {Par,Protofilesecton,Title,Ul,Li,Another,Overlay,Img} from "./style.js"
const Portofile=()=>{
  const [images ,setimages]=useState([])
  useEffect( ()=>{
    axios.get("js/data.json").then(res=>{setimages(res.data.portfolio)} )
  },[])
  const portimage=images.map((e)=>{
    return(
      <Another key={e.id}>
      <Img src={e.image} />
          <Overlay>
          <Par>Show Image</Par>
        </Overlay>
    </Another>
    )
  })
  return (
    <Protofilesecton>
          <Title>My Portofile</Title>
          <Ul>
            <Li active>All</Li>
            <Li>HTML</Li>
            <Li>PhotoShop</Li>
            <Li>WordPres</Li>
            <Li>MobLie</Li>
          </Ul>
          {portimage}
          
          
    </Protofilesecton>
  )
}
export default Portofile
