import React from 'react';
import './App.css';
import Header from './components/header';
import DailyWeather from './components/dailyWeather';
import WeatherInfo from './components/weatherInfo';
import OPEN_WEATHER_API_KEY from './.env';


const API_Address = OPEN_WEATHER_API_KEY;
class App extends React.Component {
  getWeather = async (e) =>{
    e.preventDefault();
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Austin,USA&appid=${API_Address}&units=imperial`);
    const data = await api_call.json();
    console.log(data);

  //   // get temperatures
  //   const currentTemp = result.main.temp;
  //   const temperatures = currentTemp.map(temp) => {
  //     const currentTemp = [];
  //     return {
  //       currentTemp;
  //     };
  //   };
  // }

  // _buildNoteTypesList = () => {
  //   return noteTypes.map(noteType) => (
  //     <MenuItem key={noteType.id.type} value={noteType.id.type}>
  //       {noteType.typeDisplay}
  //     </MenuItem>
  //   ));
  };

  render() {
    return (
      <div className="App">
        <Header />
        <WeatherInfo />
        <DailyWeather getWeather={this.getWeather}/>
      </div>

    );
  }
}

export default App;

//         <Card>
{/* <div>{this._buildNoteTypesList}</div>
</Card> */}

// const result_london = {
//   "coord": {
//     "lon": -0.13,
//     "lat": 51.51
// },
// "weather": [{
//     "id": 300,
//     "main": "Drizzle",
//     "description": "light intensity drizzle",
//     "icon": "09d"
// }],
// "base": "stations",
// "main": {
//     "temp": 280.32,
//     "pressure": 1012,
//     "humidity": 81,
//     "temp_min": 279.15,
//     "temp_max": 281.15
// },
// "visibility": 10000,
// "wind": {
//     "speed": 4.1,
//     "deg": 80
// },
// "clouds": {
//     "all": 90
// },
// "dt": 1485789600,
// "sys": {
//     "type": 1,
//     "id": 5091,
//     "message": 0.0103,
//     "country": "GB",
//     "sunrise": 1485762037,
//     "sunset": 1485794875
// },
// "id": 2643743,
// "name": "London",
// "cod": 200
// }
