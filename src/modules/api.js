/* WeatherAPI module : Take location and return weather data for that location */

const WeatherAPI = (() => {
  async function getData(city) {
    const endpoint = `http://api.weatherapi.com/v1/current.json?key=06858513d3a441c5b2e91215232112&q=${city}&aqi=no`;
    try {
      const response = await fetch(endpoint, { mode: "cors" });
      if (!response.ok)
        throw new Error(`City ${city} not found, Please enter new city.`); // enter catch scope
      const data = convertData(await response.json());
      console.log(data);
      return data;
    } catch (error) {
      alert(error);
      return null;
    }
  }

  function convertData(data) {
    // Extracting information
    const cityName = data["location"]["name"];
    const temperature = data["current"]["temp_c"];
    const feelsLike = data["current"]["feelslike_c"];
    const humidity = data["current"]["humidity"];
    const windSpeed = data["current"]["wind_kph"];
    return { cityName, temperature, feelsLike, humidity, windSpeed };
  }

  return { getData };
})();

export default WeatherAPI;
