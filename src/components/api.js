function checkLocation(response) {
  if (!response.ok) {
      throw new Error("Please enter a real location");
  }
  return response;
}

export default function fetchAPI(locationObj) {
  const KEY = '83fbb406930f7d4acd11395f2d3b66a8';
  const url = 'https://api.openweathermap.org/data/2.5/forecast?' + (locationObj.coords == undefined ?  "q=" + locationObj.city : 'lat=' + locationObj.coords[0] + '&lon=' + locationObj.coords[1]) + '&APPID=' + KEY + '&units=imperial';
  //https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
  
  return fetch(url, {mode: 'cors'})
      .then(checkLocation)
      .then(function(response) {
          return response.json();
      })
      .then(function(response) {
        const loc = response;
        return {
        location: {country: loc.city.country, city: loc.city.name, id: loc.city.id},
        forecast: loc.list
        }
      })
      .catch(error => console.log(error));
}