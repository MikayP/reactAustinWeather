import React from "react";
 
class WeatherInfo extends React.Component {
    
    render(){
        const blah = 'hi';
        console.log(blah);
        return(
              <div>
                  Current Temperature: <input type="text"></input> <br></br>
                  Precipitation: <input type="text"></input><br></br>
                  High:  <input type="text"></input><br></br>
                  Low:  <input type="text"></input><br></br>
                  Wind:  <input type="text"></input><br></br>
              </div>
        );
    }
}

export default WeatherInfo;