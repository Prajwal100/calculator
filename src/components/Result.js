import React, { Component } from 'react'

export class Result extends Component {
    render() {
      let  {result}=this.props;
        return (
            <div class="display">
                <p>{result}</p>
            </div>
        )
    }
}

export default Result
