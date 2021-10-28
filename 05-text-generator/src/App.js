import React, {Component} from "react"
import './App.css'
//import axios from "axios";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      type: "hipster-centric",
      paras: 4,
      text: " Brooooo"
    }
    this.getSampleText = this.getSampleText.bind(this)
  }

/*
componentWillMount(){
  this.getSampleText()
}
*/

getInfo(){
  const para = document.querySelector("#paragraph")
  this.setState({
    paras: para.value
  })
  console.log(this.state.paras);
}

async getSampleText(){
  this.getInfo()
  const data = await fetch(`http://hipsum.co/api/?type=hipster-centric&paras=10`)
  const getText = await data.json()
  this.setState({
    text: getText[0]
  })
}


  render(){
    return (
      <div className="App">
        <label htmlFor="paras">Number of paragraphs:</label>
        <input type="text" name="paras" id="paragraph" placeholder="Enter num of paragraphs"/>
        <button onClick={this.getSampleText}>Generate Text</button>
        <p>{this.state.text}</p>
      </div>
    )
  }
}

export default App;
