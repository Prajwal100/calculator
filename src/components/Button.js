import React, { Component } from 'react'
import '../App.css'
export class Button extends Component {
    render() {
        const button={
           marginTop:30,
            
        }
        return (
            <div className="all-button">
               <button style={button} name="C" onClick={e=>this.props.onClick(e.target.name)}>C</button> 
               <button name="x" onClick={e=>this.props.onClick(e.target.name)}>x</button> 
               <button name="%" onClick={e=>this.props.onClick(e.target.name)}>%</button> 
               <button name="/" onClick={e=>this.props.onClick(e.target.name)}>/</button> <br></br>

               <button name="7" onClick={e=>this.props.onClick(e.target.name)}>7</button> 
               <button name="8" onClick={e=>this.props.onClick(e.target.name)}>8</button> 
               <button name="9" onClick={e=>this.props.onClick(e.target.name)}>9</button> 
               <button name="*" onClick={e=>this.props.onClick(e.target.name)}>*</button> <br></br>

               <button name="4" onClick={e=>this.props.onClick(e.target.name)}>4</button> 
               <button name="5" onClick={e=>this.props.onClick(e.target.name)}>5</button> 
               <button name="6" onClick={e=>this.props.onClick(e.target.name)}>6</button> 
               <button name="-" onClick={e=>this.props.onClick(e.target.name)}>-</button> <br></br>

               <button name="1" onClick={e=>this.props.onClick(e.target.name)}>1</button> 
               <button name="2" onClick={e=>this.props.onClick(e.target.name)}>2</button> 
               <button name="3" onClick={e=>this.props.onClick(e.target.name)}>3</button> 
               <button name="+" onClick={e=>this.props.onClick(e.target.name)}>+</button> <br></br>
               
               <button name="." onClick={e=>this.props.onClick(e.target.name)}>.</button> 
               <button name="0" onClick={e=>this.props.onClick(e.target.name)}>0</button> 
               <button className="equal" name="=" onClick={e=>this.props.onClick(e.target.name)}>=</button> 

               <h5>Designed & Developed By:<a href="http://www.prajjwalrai.com.np">Prajwal</a></h5>
            </div>
        )
    }
}

export default Button
