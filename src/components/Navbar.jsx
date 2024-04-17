import { React, useState, useEffect, Fragment } from "react";
import '../App.css';



function GetLocation () {
    function successCallback(position) {
        console.log(position.coords.latitude, position.coords.longitude)
        return {coords: [position.coords.latitude, position.coords.longitude]}
    };
    
    const errorCallback = (error) => {
        console.log(error);
    };
    
    if (navigator.geolocation) {
        // const [location, setLocation] = useState(0);

        // useEffect(() => {
        //     setTimeout(() => {
        //     setLocation([40.7128, 74.0060])
        //     }, 3000);
        // });
        return navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

    } else {
        console.log("Geolocation not supported")
    }
    
}

function convertData(response){
    const weatherData = [21.7, "clear sky", "Los Angeles", undefined, 3.8520000000000003, "clear sky", "65%", "1016 hPa"]
    
    return weatherData 
}

// take 
export default function NavBar(props){

    return (
        <div>
            <div id="nav-header">
                <a href="./index.html">
                    <img src="/images/fish.png" alt="not loaded" id="logo"></img>
                </a>
                <ul id="menu">
                    <li className="location">{}</li>
                    <li className="location">Test2</li>
                </ul>
                <form onSubmit={props.onSubmit}>
                    <input type="text" placeholder="Search by " id="search-bar" onChange={props.onChange}></input>
                    <button type="submit" id="search-button"><img src="/images/fish.png" alt="not loaded" id="button-icon"></img></button>
                </form>
            </div>
            <div className="main-container">
                <div className="currernt-info">
                    <span id="current-location"></span>
                    <div id=""></div>
                    <div className="weather-block"></div>
                    <div className="weather-block"></div>
                </div>
            </div>
        </div>
    );
}