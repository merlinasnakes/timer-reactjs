import React, { Component } from 'react'

export default class Info extends Component { 

    componentDidMount() {
        setInterval(this.props.onTimer, this.props.rateRefresh);
        console.log(this.props.rateRefresh);
    let people = ['Rowe', 'Prevost', 'Gare'];
    let peopleLis = people.map((person, i) => <li key={people[i]}>{person}</li>);
    console.log(peopleLis);
      }




    render() {        
        return <div className="date" style={{fontSize:this.props.size}}>{this.props.value}</div>   
    }
}
