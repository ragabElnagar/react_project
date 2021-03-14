import styled from "styled-components";
export const Profile_skills=styled.div `
    padding: 50px 0;
    overflow: hidden;
`

export const Profilee =styled.div`
    width: 50%;
    float: left;
`

 export const Profile_list=styled.ul`
    list-style: none
`

export const Profile_item =styled.li`
    margin-bottom: 8px
`

export const Span=styled.span`
    display: inline-block;
    width: 100px;
    font-weight: bold
`

export const  Web =styled.span`
    font-weight: normal;
    color: #eb5424
`

export const Skills =styled.div`
    width: 50%;
    float: left;
`
export const Skills_desc =styled.p`
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px
`

export const Bar =styled.div`
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px
`

export const Title =styled.span`
    float: left;
`

export const Perc =styled.span`
    float: right;
    margin-right: 100px
`

export const Parent =styled.div`
    height: 2px;
    clear: both;
    background: #f8f8f8;
    position: relative;
    top: 5px
`

export const Sp =styled.span`
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    width:${props=>props.sp ===1 ?"100%":""};
    width:${props=>props.sp ===2 ?"90%":""};
    width:${props=>props.sp ===3 ?"80%":""};

    `
export const Profile_title=styled.h2`
.profile_skills .skills .{
    font-size: 40px; 
    margin-bottom: 20px
`
export const Skills_title=styled.h2`

    font-size: 40px; 
    margin-bottom: 20px
`

export const Tspan=styled.span`
font-weight: normal;
`
export const Sspan=styled.span`
font-weight: normal;
`

