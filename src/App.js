import React,{Component} from "react";
import {BrowserRouter,Route} from "react-router-dom"
import './App.css';
import Navpar  from "./component/navpar";
import Index  from "./component/index";
import Contact  from "./component/contact";

class App extends Component{
  render(){
  return (
    <BrowserRouter >
          <Navpar/>
          <Route exact path="/" component={Index} />
          <Route  path="/contact" component={Contact} />

    </BrowserRouter>
  )
}
}
export default App
