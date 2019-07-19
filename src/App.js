import React, { Component,Fragment } from 'react'
import "./App.css"
import Result from './components/Result'
import Button from './components/Button'
export class App extends Component {
  constructor(){
    super();
    this.state={
      result:""
    }
  }
onClick=button=>{
  if(button=="="){
    this.calculate();
  }
  else if(button=="x"){
    this.backspace();
  }
  else if(button=="C"){
    this.reset();
  }
  else{
    this.setState({
      result:this.state.result+button
    })
  }
}



  calculate=()=>{
    try{
      this.setState({
        result:(eval(this.state.result)),
      })
    }
    catch(err){
     this.setState({
       result:"Enter Valid Number!!!"
     })
    }
  }

  // Reset section

  reset=()=>{
    this.setState({
      result:""
    })
  }

  // backspace section

  backspace=()=>{
    this.setState({
      result:this.state.result.slice(0,-1)
    })
  }
  render() {

    return (
      <Fragment>
          <div className="cal-body">
            <h1>Calculator</h1>
            <Result result={this.state.result} />
            <Button onClick={this.onClick} />
            
          </div>
      </Fragment>
    )
  }
}

export default App
