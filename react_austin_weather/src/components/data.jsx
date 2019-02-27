import React from "react";

class Data extends React.Component{

    constructor() {
        super();
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
            
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Austin,USA&appid=1a94fd127ebfea3f96e4a60f9a349e5f&units=imperial`)
            .then(results => results.json())
            .then(json => {

                    this.setState({
                        isLoaded: true,
                        items: json                           
                    })
                });
                
            }


}

//reduce

export default Data;

acc[forecast["date"]]

[{"date": "2019-01-01", val: 1}, 
{"date": "2019-01-01", val: 2},
{"date": "2019-01-03", val: 3}].reduce(function(acc, forecast){ 
    acc[forecast["date"]] = (acc[forecast["date"]] || []); acc[forecast["date"]].push(forecast); 
    return acc;},

    forecasts.reduce(function(acc, forecast){ 
        const key = forecast['date'];
        acc[key] = acc[key] || [];
        acc[key].push(forecast); 
         return acc;
        },
        
        
        const forecasts = [{"date": "2019-01-01", val: 1}, {"date": "2019-01-01", val: 2},{"date": "2019-01-03", val: 3}];
        var acc = {};
        forecasts.forEach(function(forecast) {
        const key = forecast['date'];
        acc[key] = acc[key] || [];
        acc[key].push(forecast); 
        }

        create class to create the data, then you can take that data from the compomenent at a later time. do in vanilla js