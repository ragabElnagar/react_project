import styled from "styled-components"
export const Hom=styled.div `
    height:500px;
    background-image:url("images/1.png");
    background-size: cover;
    background-position: center;
    text-align: center;
    position: relative;
`
export const Information=styled.div`
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
`
export const Hometitle=styled.h2`
    font-size: 60px;
    font-weight: bold;
    color:#5e5e5e;
`

export const Homeinf=styled.h4`
    font-size: 35px;
    margin-bottom: 20px;
    color:chocolate;
`
export const Homedesc=styled.p`
    font-size: 20px;
    line-height: 1.5;
    color:#5e5e5e;
    margin-bottom: 20px;
`
export const Homebutton=styled.button`
    background-color: chocolate;
    color: #FFF;
    font-size: 18px;
    font-weight: bold;
    width: 150px;
    border:0;
    padding: 15px;
    &:hover{
        background:#FFF;
        color:#eb5424
    }

`
