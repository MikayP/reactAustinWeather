import React from "react";
 
class DailyWeather extends React.Component {
    render(){
        return(
              <form onSubmit={this.props.getWeather}>
                  <button>Get Log</button>
              </form>
        );
    }
}

export default DailyWeather;