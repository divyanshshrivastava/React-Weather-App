import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function Weatherapp() {
  let [weatherInfo, setWeatherInfo] = useState({});

  let getWeather = (result) => {
    setWeatherInfo(result);
  };

  return (
    <div>
      <SearchBox getWeather={getWeather} />
      <InfoBox weatherInfo={weatherInfo} />
    </div>
  );
}
