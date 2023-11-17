//Get Latitude and Longitude data from OpenWeather's Geocoding API 
//Lat & Long required to get weather data from openweather(as far as I know)
export function getCoordinates(city){

  //geocode API url: https://openweathermap.org/api/geocoding-api
  const geocodeURL = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${'8955cc0d013f6954de9bc6298f724f0d'}`;

  //Send API call with error verification afterwards
  return fetch(geocodeURL)
    .then(response => response.json())
    .then(data => {
    if(data && data.length > 0){ //If API returned stuff then pass on latitude and longitude
      return{lat:data[0].lat, lon: data[0].lon}; 
    }
    throw new Error('Unknown Location.'); //If the API didn't find and return location data
  });
}

//Using Lat and Long make weather data api call
export function fetchWeather(lat, lon){
  //onecall API url: https://openweathermap.org/api/one-call-3
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${'8955cc0d013f6954de9bc6298f724f0d'}&units=metric`;

  return fetch(weatherUrl).then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        });
}
   
