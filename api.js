console.log("test");

function checkLocation(response) {
  if (!response.ok) {
      throw "Please enter a real location";
  }
  return response;
}

function fetchAPI(city) {
  const KEY = '83fbb406930f7d4acd11395f2d3b66a8';
  const url = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&APPID=' + KEY + '&units=metric';
  fetch(url, {mode: 'cors'})
      .then(checkLocation)
      .then(function(response) {
          return response.json();
      })
      .then(function(response) {
        const loc = response;
        console.log(loc.list[0].main.temp);
        console.log(loc.list[0].weather[0].description);
        console.log(loc.city.name);
        console.log(loc.list[0].weather[0].main.feels_like);
        console.log(loc.list[4].wind.speed*3.6);
        console.log(loc.list[0].weather[0].description);    
        console.log(loc.list[0].main.humidity + '%');
        console.log(loc.list[0].main.pressure + ' hPa');    
 
      })
      .catch(error => console.log(error));
}
