import '../App.css';

export default function DataBlock(props){
    
    const convertData = () => {
        try{
            var forecast = props.forecast

            var a = forecast.dt_txt.split(" ");
            var time1 = a[0].slice(-5);
            var time2 = a[1].slice(0, 2);
            //[date, time, icon, description, temperature, humidity, cloudines, wind, wind gust]
            return [<div>{time1}<br />{(time2 % 12 == 0 ? 12 : time2 % 12) + (Math.floor(time2 / 12) ? " AM" : " PM")}</div>, <img alt={forecast.weather[0].description} src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`} />, <div>{forecast.weather[0].description}</div>, <div className="temperature">{Math.round(forecast.main.temp) + '\u00B0'}<br /></div>, <div>Humidity: {Math.round(forecast.main.humidity)}%<br />Cloudiness: {Math.round(forecast.clouds.all)}%<br />Wind: {Math.round(forecast.wind.speed)} mph<br />Wind Gusts: {Math.round(forecast.wind.gust)} mph</div>]
        }
        catch{}
    }


    return(
        <div className="carousel-item">
            <ul>
                {convertData()}
            </ul>
        </div>
    );
}