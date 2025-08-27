import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LocationSelector = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  

  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');

  const headers = {
          'Content-Type': 'application/json',
          'x-rapidapi-key': 'c50323f314msh29e2274c97dc160p14ad08jsn77b28a2882dc',
          'x-rapidapi-host': 'country-state-city-search-rest-api.p.rapidapi.com'
        };

  // Fetch countries on component mount
  useEffect(() => {
    axios.get('https://country-state-city-search-rest-api.p.rapidapi.com/allcountries',{headers: headers})
      .then(res => setCountries(res.data))
      .catch(err => console.error('Error fetching countries:', err));
  }, []);

  // Fetch states when country is selected
  useEffect(() => {
    if (selectedCountry) {
      axios.get(`https://country-state-city-search-rest-api.p.rapidapi.com/states-by-countrycode?countrycode=${selectedCountry}`,{headers: headers})
        .then(res => setStates(res.data))
        .catch(err => console.error('Error fetching states:', err));
      setCities([]); // Clear cities
      setSelectedState('');
    }
  }, [selectedCountry]);

  // Fetch cities when state is selected
  useEffect(() => {
    if (selectedCountry && selectedState) {
      axios.get(`https://country-state-city-search-rest-api.p.rapidapi.com/cities-by-countrycode-and-statecode?countrycode=${selectedCountry}&statecode=${selectedState}`,{headers: headers})
        .then(res => setCities(res.data))
        .catch(err => console.error('Error fetching cities:', err));
    }
  }, [selectedState]);

  return (
    <div className="flex px-10 py-40">
      <div className="space-y-4 max-w-md mx-auto px-4 pt-4 pb-8 rounded-lg bg-gray-400 w-[430px] text-white">
        <div>
          <label className="block mb-4 text-2xl font-bold">Country</label>
          <select
            className="w-full border rounded-md p-2"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            <option value="" className="text-gray-400 " >Select Country</option>
            {countries.map(country => (
              <option key={country.isoCode} value={country.isoCode} className="text-gray-400 ">
                {country.name}
              </option>
            ))}
          </select>
        </div>

        {states.length > 0 && (
          <div>
            <label className="block mb-4 text-2xl font-bold">State</label>
            <select
              className="w-full border rounded-md p-2"
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
            >
              <option value="" className="text-gray-400 ">Select State</option>
              {states.map(state => (
                <option key={state.isoCode} value={state.isoCode} className="text-gray-400 ">
                  {state.name}
                </option>
              ))}
            </select>
          </div>
        )}

        {cities.length > 0 && (
          <div>
            <label className="block mb-4 text-2xl font-bold">City</label>
            <select className="w-full border rounded-md p-2">
              <option value="" className="text-gray-400 ">Select City</option>
              {cities.map(city => (
                <option key={city.name} value={city.name} className="text-gray-400 ">
                  {city.name}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationSelector;
