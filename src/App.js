import React from 'react';
import './App.css';
import Info from './components/Info';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      time: "",
    };

    this.showTime = this.showTime.bind(this);
    this.showDate = this.showDate.bind(this);
  }

  showTime() {
    let currentDate = new Date()
    let formattedTime = currentDate.getHours() + ":"+ currentDate.getMinutes() + ":" + currentDate.getSeconds()
    this.setState({
      time: formattedTime 
    })
    console.log(this.showTime);
  }

  showDate() {  
      let currentDate = new Date()
      let formattedDate = currentDate.toDateString();
      this.setState({
        date: formattedDate
      })
      console.log(this.showDate);
    }  
  
  componentDidMount() {
    this.showDate()
    this.showTime()
  }  


  

  render() {
    return (
        <div className="wrapper">
          <Info value={this.state.date} onTimer={this.showDate} rateRefresh={86400000} size={"51px"}></Info>
          <Info value={this.state.time} onTimer={this.showTime} rateRefresh={2000} size={"95px"}></Info>
        </div>
    );
  }
}

export default App;


 