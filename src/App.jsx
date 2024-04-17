import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import NavBar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import fetchAPI from './components/api.js';
import Forecast from './pages/Forecast.jsx';


// New York City
const defaultCoords = [40.7128, 74.0060]

function App() {
  const [locationData, setLocationData] = useState(NaN);
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();


  const updateSearch = (e) => {
    e.preventDefault()
    var lowerCase = e.target.value.toLowerCase();
    setSearchInput(lowerCase);
  }

  const searchQuery = (e) => {
    e.preventDefault()

    try{
      var weatherData = fetchAPI({city: searchInput});
      weatherData.then(function(data){
        navigate("/forecast/" + data.location.country + "/" + data.location.city + "/" + data.location.id);
      });
      setLocationData(weatherData);
    }
    catch (e){
      console.log(e);
    }
  }

  // console.log(fetch("https://api.ipify.org"));

  return (
    <div>
      <NavBar onChange={updateSearch} onSubmit={searchQuery} searchInput={searchInput} locationData={locationData}/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/forecast/:country/:city/:id" element={<Forecast data={locationData}/>} />
        </Routes>
    </div>
  );
}

export default App;
