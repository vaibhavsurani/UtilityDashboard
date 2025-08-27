// url : "https://open-weather13.p.rapidapi.com/city"
// params: {
//     city: 'new york',
//     lang: 'EN'
//   }
// headers: {
//     'x-rapidapi-key': 'c50323f314msh29e2274c97dc160p14ad08jsn77b28a2882dc',
//     'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
// }

//i have an api that gives weather details as per given format and i want to showcase them to dashboard api takes city and lang as parameters

// function Weather () {
//     return(
//         <>

//         </>
//     )
// }

// export default Weather;

import React, { useEffect, useState } from "react";
import axios from 'axios';

const WeatherDashboard = () => {
  const [city, setCity] = useState("");
  const [lang, setLang] = useState("EN"); // example: Hindi
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const headers = {
    'x-rapidapi-key': '03c8e59efemshfc2760768e3aa0dp1ed3afjsn9f3eb5ed4f5f',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
  };

  const fetchWeather = async () => {
    // setLoading(true);
    // try {
    //   const response = await axios.get(`https://open-weather13.p.rapidapi.com/city?city=${city}&lang=${lang}`,{headers : headers});
    //   setWeather(response.data);
    //   setError("");
    // } catch (err) {
    //   setError("Failed to fetch weather data.");
    // } finally {
    //   setLoading(false);
    // }
  };

  // useEffect(() => {
  //   fetchWeather();
  // }, [city,lag]);

  return (
    <div className="flex justify-center px-10 py-40">
      <div className="w-[430px] p-4 bg-gray-400 text-white rounded-xl">
        <h1 className="text-2xl font-bold mb-4">Weather Dashboard</h1>

        <div className="mb-4 flex gap-2">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="border-white p-2 rounded-md w-full bg-white text-gray-400"
            placeholder="Enter city"
          />
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="border p-2 rounded-md"
          >
            <option value="AF" className="text-gray-400 ">Afrikaans</option>
            <option value="AL" className="text-gray-400 ">Albanian</option>
            <option value="AR" className="text-gray-400 ">ArabicFR</option>
            <option value="AZ" className="text-gray-400 ">Azerbaijani</option>
            <option value="EU" className="text-gray-400 ">Basque</option>
            <option value="BG" className="text-gray-400 ">Bulgarian</option>
            <option value="CA" className="text-gray-400 ">Catalan</option>
            <option value="ZH_CN" className="text-gray-400 ">Chinese Simplified</option>
            <option value="ZH_TW" className="text-gray-400 ">Chinese Traditional</option>
            <option value="HR" className="text-gray-400 ">Croatian</option>
            <option value="CZ" className="text-gray-400 ">Czech</option>
            <option value="DA" className="text-gray-400 ">Danish</option>
            <option value="NL" className="text-gray-400 ">Dutch</option>
            <option value="EN" className="text-gray-400 ">English</option>
            <option value="FI" className="text-gray-400 ">Finnish</option>
            <option value="FR" className="text-gray-400 ">French</option>
            <option value="GL" className="text-gray-400 ">Galician</option>
            <option value="DE" className="text-gray-400 ">German</option>
            <option value="EL" className="text-gray-400 ">Greek</option>
            <option value="HE" className="text-gray-400 ">Hebrew</option>
            <option value="HI" className="text-gray-400 ">Hindi</option>
            <option value="HU" className="text-gray-400 ">Hungarian</option>
            <option value="ID" className="text-gray-400 ">Indonesian</option>
            <option value="IT" className="text-gray-400 ">Italian</option>
            <option value="JA" className="text-gray-400 ">Japanese</option>
            <option value="JA" className="text-gray-400 ">Japanese</option>
            <option value="KR" className="text-gray-400 ">Korean</option>
            <option value="LA" className="text-gray-400 ">Latvian</option>
            <option value="LT" className="text-gray-400 ">Lithuanian</option>
            <option value="MK" className="text-gray-400 ">Macedonian</option>
            <option value="NO" className="text-gray-400 ">Norwegian</option>
            <option value="FA" className="text-gray-400 ">Persian(Farsi)</option>
            <option value="PL" className="text-gray-400 ">Polish</option>
            <option value="PT" className="text-gray-400 ">Portuguese</option>
            <option value="PT_BR" className="text-gray-400 ">Português Brasil</option>
            <option value="RO" className="text-gray-400 ">Romanian</option>
            <option value="RU" className="text-gray-400 ">Russian</option>
            <option value="SR" className="text-gray-400 ">Serbian</option>
            <option value="SK" className="text-gray-400 ">Slovak</option>
            <option value="SL" className="text-gray-400 ">Slovenian</option>
            <option value="SP" className="text-gray-400 ">Spanish</option>
            <option value="SE" className="text-gray-400 ">Swedish</option>
            <option value="TH" className="text-gray-400 ">Thai</option>
            <option value="TR" className="text-gray-400 ">Turkish</option>
            <option value="UK" className="text-gray-400 ">Ukrainian</option>
            <option value="VI" className="text-gray-400 ">Vietnamese</option>
            <option value="ZU" className="text-gray-400 ">Zulu</option>
          </select>
          <button id="getInfo" className="bg-white text-gray-400 rounded-md p-2" onClick={fetchWeather}>Get</button>
        </div>

        {loading && <p>Loading weather...</p>}
        {error && <p className="text-red-600">{error}</p>}

        {weather && (
          <div className="bg-white text-left text-gray-400 p-4 rounded-lg space-y-2">
            <div className="text-left gap-2 pb-6">
              <div>
                <h2 className="text-2xl font-semibold">{weather.name}, {weather.sys.country}</h2>
                <p>{weather.weather[0].description}</p>
              </div>
            </div>

            <p><strong>Temperature:</strong> {weather.main.temp}°F</p>
            <p><strong>Feels Like:</strong> {weather.main.feels_like}°F</p>
            <p><strong>Humidity:</strong> {weather.main.humidity}%</p>
            <p><strong>Pressure:</strong> {weather.main.pressure} hPa</p>
            <p><strong>Wind:</strong> {weather.wind.speed} mph @ {weather.wind.deg}°</p>
            <p><strong>Cloud Cover:</strong> {weather.clouds.all}%</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherDashboard;
