import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {

  constructor(){
    super();
    this.state = {
      string: 'Hello Ricky'
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>{this.state.string}</p>
          <button onClick={() => this.setState({ string: 'Hello Spires'})}>Change Text</button>
        </header>
      </div>
    );
  }
}

export default App;
