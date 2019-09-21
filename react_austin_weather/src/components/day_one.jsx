import React from "react";
class DayOne extends React.Component {

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
            var dayOneArray = [];
            var maxValue = Number.MIN_SAFE_INTEGER;
            var currentDay;
            var otherDaysArray = [];
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

                if (currentDay === undefined){
                    currentDay = dayOfMonth
                } else if (currentDay !== dayOfMonth) {
                    currentDay = dayOfMonth
                    maxTempsArray.push(maxValue);
                    maxValue = 0;
                }
            }

            //Looping through all the days
            var firstDay = [];
            var firstDayVar;
            for (i = 0; i < items.list.length; i++){
                let item = items.list[i].dt
                let date = new Date(item*1000)
                let dateNumber = date.getDate()
                let date_text = items.list[i].dt_txt
                let dateString = date_text.substring(0,10)
                console.log(dateString)

                if (firstDayVar === undefined){
                    firstDayVar = dateNumber
                    // console.log(firstDay)
                } else if (firstDayVar !== dateNumber) {
                    firstDayVar = dateNumber
                   
                     firstDay.push(firstDayVar);
            }
            // console.log(item)
            // console.log(maxTempsArray)
        }
  
//Math.max(...myArray)
            return ( <div>
                        {firstDay[0]}
                        <ul>
                        
                        <li>{maxTempsArray[0]}</li>
                        <li>{maxTempsArray[1]}</li>
                        </ul>  
                    </div>
                );
          
    }
}
}
export default DayOne;