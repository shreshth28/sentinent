import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import BtnGrid from "./BtnGrid";
import AppCard from "./mainAppCard";
import "tachyons";

class App extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()   // Create a ref object 
}
scrollToMyRef = () => {   // run this method to execute scrolling. 
  window.scrollTo({
      top:this.myRef.current.offsetTop, 
      behavior: "smooth"   // Optional, adds animation
  })
}
  render() {
    return (
      <div>
        <Header />
        <div>
          <BtnGrid getView={this.scrollToMyRef} />
        </div>
        <section ref={this.myRef} class="mw5 mw9-ns center">
          <AppCard />
        </section>
      </div>
    );
  }
}

export default App;
