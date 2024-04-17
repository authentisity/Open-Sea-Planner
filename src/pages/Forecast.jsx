import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import DataBlock from '../components/Datablock.jsx';
import '../App.css';


export default function Forecast(props){
    const { country, city, id } = useParams();
    const [ forecastData, setForecastData ] = useState(Array(40).fill(["i"]));

    useEffect(() => {
        try{
            props.data.then(function(data){
                setForecastData(data.forecast);
            })
        }
        catch{}
    }, [props.data])

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "/src/components/carousel.js";
        document.body.appendChild(script);
    }, [])

    var rows = [];
    for(var i = 0; i < 40; i++){
        rows.push(<DataBlock forecast={forecastData[i]} key={i} />) 
    }
    return(
    <div>
        <h1>{city + ", " + country}</h1>
        <div className="forecast-carousel" data-carousel>
            <button className="carousel-button prev" data-carousel-button>&#10096;</button>
            <button className="carousel-button next" data-carousel-button>&#10097;</button>
                <ul data-slides>
                    {rows}
                </ul>
        </div>
    </div>
    );
}