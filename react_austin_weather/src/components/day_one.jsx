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
            fetch('https://api.openweathermap.org/data/2.5/forecast?q=Austin,USA&appid=583f803dfc6a7f2f96ff9957c330c2b0&units=imperial').then(response => response.json()).then(data => {
                const groupedData = data.list.reduce((days, row) => {
                  const date = row.dt_txt.split(' ')[0];
                  days[date] = [...(days[date] ? days[date]: []), row];
                  return days;
                }, {});
                
                for(let date of Object.keys(groupedData)){
                  console.log('Date:', date); 
                  // current date -> date
                  // original items array for this date -> groupedData[date]
                  console.log('RowCount:', groupedData[date].length);
                  console.log('MaxTemp:', getMax(groupedData[date], 'temp_max'));
                  console.log('MinTemp:', getMin(groupedData[date], 'temp_min'));
                  console.log('MaxHumidity:', getMax(groupedData[date], 'humidity'));
                  
                  console.log('\n\n');
                }
              });
              
              function getMax(arr, attr){
                return Math.max.apply(Math, arr.map(item => item.main[attr]));
              }
              
              function getMin(arr, attr){
                return Math.min.apply(Math, arr.map(item => item.main[attr]));
              }
        }
  
//Math.max(...myArray)
            return ( <div>
                        
                    </div>
                );
          
    }
}

export default DayOne;