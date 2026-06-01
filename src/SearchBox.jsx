import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ getWeather }) {
  const API_URL = import.meta.env.VITE_API_URL;
  const API_KEY = import.meta.env.VITE_API_KEY;

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`,
      );
      let data = await response.json();
      let result = {
        temp: data.main.temp,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        minTemp: data.main.temp_min,
        maxTemp: data.main.temp_max,
        disc: data.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  let [city, setCity] = useState("");
  let [searchedCity, setSearchedCity] = useState("Enter your City");

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    setSearchedCity(city);
    let info = await getWeatherInfo();
    getWeather(info);
    setCity("");
  };

  return (
    <div>
      <h2>{searchedCity}</h2>
      <h3>Search for the Weather</h3>
      <form className="weather-form" onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
