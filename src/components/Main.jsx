import { useState } from "react";
import axios from "axios";

function Main() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [temp, setTemp] = useState("");
  const [desc, setDesc] = useState("");

  function handleChange(e) {
    setCity(e.target.value);
  }

  async function getWeather() {
    if (!city.trim()) {
      alert("Please enter a city name!");
      return;
    }

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=997f24b7612d09a1e3fe5e65215a7c9c&units=metric`
      );

      setWeather(response.data.weather[0].main);
      setTemp(response.data.main.temp);
      setDesc(response.data.weather[0].description);
    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 404) {
        alert("City not found. Please check the spelling.");
      } else {
        alert("Something went wrong. Please try again later.");
      }
    }
  }

  return (
    <>
      <div className="h-screen bg-[linear-gradient(to_bottom,#0B89B1_0%,#0087FA_50%,#049BE3_100%)] flex justify-center">
        <section className="w-[350px] h-[400px] rounded-2xl p-6 shadow-2xl bg-[linear-gradient(to_bottom,white_20%,#6FCDDA_80%)] mt-32 flex-wrap">
          <h1 className="font-semibold text-2xl">WEATHER REPORT ⛅</h1>
          <p className="mt-4">I can give weather reports about your city....!☂️</p>
          <input
            onChange={handleChange}
            type="text"
            className="mt-8 border border-black p-1 rounded-lg"
            placeholder="Enter city name"
          />
          <br />
          <button
            onClick={getWeather}
            type="submit"
            className="mt-4 bg-gray-500 text-white p-1 rounded-sm"
          >
            Get Report
          </button>

          <p className="mt-6 text-red-400">Weather 🌩️: {weather}</p>
          <p className="mt-1 text-red-400">Temperature 🌡️: {temp}°C</p>
          <p className="mt-1 text-red-400">Description ⚡: {desc}</p>
        </section>
      </div>
    </>
  );
}

export default Main;
