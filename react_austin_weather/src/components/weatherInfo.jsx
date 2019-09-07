import React from "react";
// import REACT_APP_OPEN_WEATHER_API_KEY from '../.env';

// const REACT_APP_API_ADDRESS = REACT_APP_OPEN_WEATHER_API_KEY;

//const REACT_APP_API_ADDRESS = `${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`;
            // console.log('HI', REACT_APP_OPEN_WEATHER_API_KEY);

            class WeatherInfo extends React.Component {

                constructor() {
                    super();
                    this.state = {
                        items: [],
                        isLoaded: false
                    }
                }
         
                componentDidMount() {
                    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Austin,USA&appid=583f803dfc6a7f2f96ff9957c330c2b0&units=imperial`)
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
                                <ul>
                                    {items.list.map((item, key) => (
                                        <li key="{key}">
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

        //dates as keys each date will have its own array of data