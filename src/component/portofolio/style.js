import styled from "styled-components";
export const Protofilesecton=styled.div`
    background-color: #F8F8F8;
    padding-top: 20px;
    overflow: hidden;
`
export const Title=styled.h2`
    text-align: center;
    font-size: 35px;
`
export const Ul=styled.ul`
    list-style: none;
    text-align: center;
    margin: 20px 0;
`
export const Li=styled.li`
    display:inline-block;
    width: 100px;
    padding: 10px;
    background: ${props=>props.active ? "#eb4524" : ""};
    color: ${props=>props.active ? "#FFF" : ""};
`
export const Another=styled.div`
     width: 25%;
     float: left;
     position: relative;
     font-size: 0;
     &:hover >div{
         opacity: 1;
     }
 `
 export const Img=styled.img`
     width: 100%
 `
 export const Overlay=styled.div`
 position: absolute;
 top: 0;
 left: 0;
 bottom:0;
 right:0;
 background:rgba(235,84,35,0.5);
 font-size:15px;
 opacity:0;
 margin:0;

`

 export const Par=styled.p`
     position: absolute;
     top: 50%;
     left: 50%;
     transform: translate(-50%,-50%);
     background-color: #FFF;
     display:block;
     padding: 10px 20px;
     cursor: pointer;
     border: 2px solid #eb5424;

 `