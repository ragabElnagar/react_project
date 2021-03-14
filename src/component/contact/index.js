import React,{Component,Fragment} from "react";
import Footer from "../footer" ;
import {Drop,Drop_title,Span,Form,Textarea,Form_input,Inputemail,Inputsubmit,Inputsup,Inputtext} from"./style.js"
const Contact=()=>{
  return (
    <Fragment>
    <Drop>
    <div className="container">
        <Drop_title><Span>Drop </Span>Me A line</Drop_title>
        <Form>
            <Form_input>
                <Inputtext type="text" placeholder="Your Name"/>
                <Inputemail type="email" placeholder="Your Email"/>
            </Form_input>
            <Inputsup type="text" className="sub" placeholder="Your Subject"/>
            <Textarea cols="30" rows="10" placeholder="Your Message"></Textarea>
            <Inputsubmit type="submit" value="Send Message"/>
        </Form>
    </div>
</Drop>
<Footer/>
</Fragment>
  )
}
export default Contact
