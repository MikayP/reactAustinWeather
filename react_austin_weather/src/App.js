import React from 'react';
import './App.css';
import Header from './components/header';
import DailyWeather from './components/dailyWeather';


const API_Address = '583f803dfc6a7f2f96ff9957c330c2b0';
class App extends React.Component {
  getWeather = async (e) =>{
    e.preventDefault();
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Austin,USA&appid=${API_Address}&units=imperial`);
    const data = await api_call.json();
    console.log(data);
  }
  render() {
    return (
      <div className="App">
        <Header />
        <DailyWeather getWeather={this.getWeather}/>
      </div>

    );
  }
}

export default App;
