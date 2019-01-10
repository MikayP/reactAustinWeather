import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';


const API_Key = "583f803dfc6a7f2f96ff9957c330c2b0";


class App extends Component {
  getWeather = async () =>{
    const API_Address = 'https://api.openweathermap.org/data/2.5/weather?q=Austin,USA&appid=${API_Key}';
    const api_call = await fetch(API_Address);
    const data = await api_call.json();
    console.log(data);
  }
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
