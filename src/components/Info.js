import React, { Component } from 'react'

export default class Info extends Component { 

    componentDidMount() {
        setInterval(this.props.onTimer, this.props.rateRefresh);
        console.log(this.props.rateRefresh);
      }

    render() {        
        return <div className="date" style={{fontSize:this.props.size}}>{this.props.value}</div>   
    }
}
