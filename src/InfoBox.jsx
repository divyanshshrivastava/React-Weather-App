export default function InfoBox({ weatherInfo }) {
  return (
    <>
      {weatherInfo.temp && (
        <div>
          <p>
            <span>Temperature:</span> {weatherInfo.temp}°C
          </p>
          <p>
            <span>Humidity:</span> {weatherInfo.humidity}%
          </p>
          <p>
            <span>Pressure:</span> {weatherInfo.pressure} hPa
          </p>
          <p>
            <span>Minimum Temperature:</span> {weatherInfo.minTemp}°C
          </p>
          <p>
            <span>Maximum Temperature:</span> {weatherInfo.maxTemp}°C
          </p>
          <p>
            <span>Description:</span> {weatherInfo.disc}
          </p>
        </div>
      )}
    </>
  );
}
