import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

  constructor(){
    super();
    this.handleClick2 = this.handleClick1.bind(this);
  }

  handleClick1() {
    console.log('button 1 clicked');
  }

  handleClick3 = () => console.log('button 3 clicked');


  render() {
    return (
      <div>
        <button onClick={this.handleClick1()}>click 1</button>
        <button onClick={this.handleClick1}>click 2</button>
        <button onClick={this.handleClick2}>click 3</button>
        <button onClick={this.handleClick3}>click 4</button>
      </div>
    );
  }
}

export default App;



// MY PREDICTIONS

// CLICK 1 = 'button 1 clicked'
// CLICK 2 = UNDEFINDED
// CLICK 3 = CALLS THIS
// CLICK 4 = 'button 3 clicked'


// WHAT HAPPENED

// as soon as the page is refreshed you get a console.console.log();
// saying button1 clicked even though you didnt because your invoking the function

// CLICK 1 = nothing happend because its already consoled
// CLICK 2 = 'button 1 clicked' because you assigned 1

// note :   handleClick1() {
//     console.log(this);
//   }
//
//   - would be UNDEFINDED

// CLICK 3 = 'button 1 clicked' because = this.handleClick2 = this.handleClick1.bind(this);
//
// note :   handleClick1() {
//     console.log(this);
//   }
//
//   - would give an object


// CLICK 4 = 'button 3 clicked' - CORRECT

// NOTE:
//
// handleClick3 = () => console.log(this);

//   - would give an object
