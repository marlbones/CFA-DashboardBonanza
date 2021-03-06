import React, { Component } from 'react';
import './Weather.css';

class Weather extends Component {
  render() {
    return (
      <div className = {this.props.weather}>
        <h5>{this.props.city}</h5>
        <h4>{this.props.temp}&#176;C</h4>
        <p>{this.props.weather} - {this.props.sky}</p>
        {this.props.weather == 'Clouds' ? <img src={require('../../images/cloudy.png')} /> : <p></p>}
        {this.props.weather == 'Clear' ? <img src={require('../../images/sunny.png')} /> : <p></p>}
        {this.props.weather == 'Rain' ? <img src={require('../../images/rain.png')} /> : <p></p>}
      </div>
    )
  }
}

export default Weather;
