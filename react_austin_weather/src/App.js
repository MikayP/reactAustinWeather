import React from 'react';
import './App.css';
import Header from './components/header';
import WeatherInfo from './components/weatherInfo';
import DayOne from './components/day_one';
class App extends React.Component {


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
 

  render() {
    return (
      <div className="App">
        <Header />
        <DayOne />
        <WeatherInfo />
      </div>

    );
  }
};

export default App;
