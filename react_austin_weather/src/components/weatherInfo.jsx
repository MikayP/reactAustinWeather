import React from "react";
import REACT_APP_OPEN_WEATHER_API_KEY from '../.env';

const REACT_APP_API_ADDRESS = REACT_APP_OPEN_WEATHER_API_KEY;

//const REACT_APP_API_ADDRESS = `${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`;
            console.log('HI', REACT_APP_OPEN_WEATHER_API_KEY);

class WeatherInfo extends React.Component {

        constructor() {
            super();
            this.state = {
                items: [],
                isLoaded: false,
            }
        }
        componentDidMount() {
            
            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Austin,USA&appid=${REACT_APP_API_ADDRESS}&units=imperial`)
                .then(results => results.json())
                .then(json => {
                        this.setState({
                            isLoaded: true,
                            items: json                           
                        })
                    });
                    
                }

            render() {
       
            
                let {
                    isLoaded,
                    items
                } = this.state;
                if (!isLoaded) {
                    return (<div> Loading... </div>)
                } else {
                    return ( <div>
                    {/* Day 1  */}
                    <ul>
                        <li>3am: {items.list[0].main.temp}</li>
                        <li>6am: {items.list[1].main.temp}</li>
                        <li>9am: {items.list[2].main.temp}</li>
                        <li>Noon: {items.list[3].main.temp}</li>
                    </ul>
                    <li>{items.list[1].main.temp}</li>
                        <ul>
                            {items.list.map((item, key) => (
                                <li key={key}>
                                    {item.main.temp}
                                </li>
                            ))}
                        </ul> 
                        </div>
                    );
                }
            }
        } 

        export default WeatherInfo;