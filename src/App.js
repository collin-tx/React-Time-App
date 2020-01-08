import React from 'react';
import './App.css';
import BackgroundDay from './img/.day.jpg.icloud';
import BackgroundNight from './img/.night.jpg.icloud';

export default class App extends React.Component {

  state = {
    time: '',
    day: '',
    date: '',
    hours: new Date().getHours()
  }


  componentDidMount(){
    this.getDate();
    this.setBackground();
  }

  getDate = () => {
    let date = new Date();
    let year = date.getFullYear();
    let monthNumber = date.getMonth() + 1;
    let dayNumber = date.getDate();

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let weekDay = days[date.getDay()];

    let hour = date.getHours();
    let minute = date.getMinutes();
    let minString = minute.toString();
    if (minString.length < 2){
       minString = 0 + minString;
    }
    let hh = hour;
    let dd = "AM"

    if (hour > 12){
      hh = hour - 12;
      dd = "PM";
    }

    if (hour === 0){
      hh = 12;
    }
    this.setState({
      time: hh +":"+minString+" "+dd,
      day: weekDay,
      date: monthNumber + "." + dayNumber + "." + year,
      hours: hour
    });
  }

  setBackground = () => {
    if (this.state.hours > 6 && this.state.hours < 21) {
    document.body.style.background = `url(${BackgroundDay})`;
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundRepeat = "no-repeat";

  } else {
    document.body.style.background = `url(${BackgroundNight})`;
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundRepeat = "no-repeat";
  }
}

  render(){
  return (
    <main id="main">
    <div className="container">
      <div id="time" className="row">
        {this.state.time}
      </div>
      <div id="day" className="row">
        {this.state.day}
      </div>
      <div id="date" className="row">
        {this.state.date}
      </div>
    </div>
    </main>
  );
}
}