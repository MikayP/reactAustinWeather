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
            return ( <div> Loading... </div>)
            }
        else {
            // const maxTempDay = item.list[0].dt.filter(maxTemp == )

            // var array = [1, 2, 3, -1]
            // var maxValue = Number.MIN_SAFE_INTEGER
            // for (i = 0; i < array.length; i++){
                
            //     console.log(maxValue)
            //     if(array[i] > maxValue){
            //         maxValue = array[i]
            //     }
            // }
            // console.log(maxValue)
            var i;
            var maxTempsArray = [];
            var maxValue = Number.MIN_SAFE_INTEGER;
            var currentDay;
            debugger
            for (i = 0; i < items.list.length; i++){
                let item = items.list[i]
                let timeStamp = item.dt
                let date = new Date(timeStamp*1000)
                let dayOfMonth = date.getDate()

                // console.log(dayOfMonth)
                let allTemps = item.main
                let tempForecast = item.main.temp
                // console.log(dayOfMonth)
                // console.log(tempForecast)
                // console.log(allTemps)

                // console.log(tempForecast)
                if ( tempForecast > maxValue ){
                    maxValue = tempForecast
                }

                if (currentDay == undefined){
                    currentDay = dayOfMonth
                } else if (currentDay != dayOfMonth) {
                    currentDay = dayOfMonth
                    maxTempsArray.push(maxValue);
                    maxValue = 0;
                }
            }

           
            console.log(maxTempsArray)
            let list = items.list.map((item, key) => {
                let date = new Date(item.dt*1000)
                // let today = date.toDateString()
                let dayOfMonth = date.getDate()
                let month = date.getMonth()
                // console.log(date)
                let dayTemperatures = item.main.temp

                if(month = 9){
                    month = "September ";
                }
           
                // if (dayOfMonth == dayOfMonth){
                //  Math.max(dayTemperatures)
                //  console.log(dayTemperatures)
                // }
                return ( 
                <li key = "{key}">
                    {month} 
                    {dayOfMonth}th
                    

                    {dayTemperatures} 
                </li>
                    )
                })
//Math.max(...myArray)
            return ( <div>
                        <ul>{list}</ul>  
                    </div>
                );
            }
    }
}



                export default WeatherInfo;