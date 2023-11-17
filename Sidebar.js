import './App.css';
import fetchAPI from './api';

function Sidebar(props){
    return(
        <div class="side-blocks">
            <div class="weather-block">
                <span class="weather">
                    {convertData("")}
                </span>
            </div>
            <div class="weather-block"></div>
            <div class="weather-block"></div>
            <div class="weather-block"></div>
            <div class="weather-block"></div>
            <div id="block-right">

            </div>
        </div>
    );
}

function convertData(response){
    // const loc = response
    // const weatherData = [loc.list[0].main.temp,
    // loc.list[0].weather[0].description,
    // loc.city.name,
    // loc.list[0].weather[0].main.feels_like,
    // (loc.list[4].wind.speed*3.6).toFixed(2)
    // loc.list[0].main.humidity + '%',
    // loc.list[0].main.pressure + ' hPa']

    const weatherData = [21.7, "clear sky", "Los Angeles", undefined, 3.8520000000000003, "clear sky", "65%", "1016 hPa"]
    
    return weatherData
}

export default Sidebar;