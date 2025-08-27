import React, { useState, useEffect } from "react";
import axios from 'axios';

function Currency() {

  const [formData, setFormData] = useState({
    from: '',
    to: '',
    amount: ''
  });

  const [apiResponseData, setApiResponseData] = useState(null);

  const [displayResult, setDisplayResult] = useState('0.00');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiUrl = 'https://exchange-rate-api1.p.rapidapi.com/convert';
  const headers = {
    'x-rapidapi-key': '03c8e59efemshfc2760768e3aa0dp1ed3afjsn9f3eb5ed4f5f',
    'x-rapidapi-host': 'exchange-rate-api1.p.rapidapi.com',
    'Content-Type': 'application/json',
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const fetchData = async () => {
    console.log('fetchData called');
    setLoading(true);
    setError(null);
    setDisplayResult('Calculating...');

    const params = {
      base: formData.from,
      target: formData.to,
      amount: formData.amount,
    };

    try {
      // const response = await axios.get(apiUrl, {
      //     params: params,
      //     headers: headers,
      // });

      console.log("API Response:", response.data);
      setApiResponseData(response.data);

      if (response.data && response.data.convert_result && typeof response.data.convert_result.rate === 'number') {
        const convertedAmount = response.data.convert_result.rate * parseFloat(formData.amount);
        setDisplayResult(convertedAmount.toFixed(2));
        console.log("Displayed Result:", convertedAmount);
      } else {
        console.error("API response missing expected properties:", response.data);
        setError(new Error("Invalid data from API. Please check your API response structure."));
        setDisplayResult('Error: Invalid API response.');
      }

    } catch (err) {
      console.error("API Call Error:", err);

      if (axios.isAxiosError(err) && err.response) {
        setError(new Error(`API Error: ${err.response.status} - ${err.response.data.message || err.message}`));
        console.error("API Error Response Data:", err.response.data);
      } else {

        setError(new Error(`Network Error: ${err.message}`));
      }
      setDisplayResult('Error: Failed to fetch conversion.');
    } finally {
      setLoading(false);
    }
  };

  const handleEvent = (event) => {
    event.preventDefault();

    fetchData();
  };

  return (
    <div className="px-10 py-40 flex justify-center">
      <div className="px-4 pt-4 pb-8 rounded-lg bg-gray-400">
        <div className="text-2xl font-bold mb-4 text-white">
          Currency Converter
        </div>
        <form id="myForm" className=" space-y-3 space-x-3 flex flex-row" onSubmit={handleEvent}>
          <div className="space-y-3 flex flex-col">
            <input
              type="text"
              id="from"
              name="from"
              placeholder="from"
              className="bg-white rounded-md text-gray-400 p-3"
              value={formData.from}
              onChange={handleInputChange}
              required
            ></input>
            <input
              type="text"
              id="to"
              name="to"
              placeholder="to"
              className="bg-white rounded-md text-gray-400 p-3"
              value={formData.to}
              onChange={handleInputChange}
              required
            ></input>
          </div>
          <div className="space-y-3 flex flex-col">
            <input
              type="number"
              id="amount"
              name="amount"
              placeholder="amount"
              className="bg-white rounded-md text-gray-400 p-3"
              value={formData.amount}
              onChange={handleInputChange}
              required
            ></input>
            <button type="submit" className="bg-white rounded-md text-gray-400 p-3" disabled={loading}>
              {loading ? 'Converting...' : 'Convert'}
            </button>
          </div>
        </form>

        <div id="output-box" className=" bg-white rounded-md text-gray-400 p-3 ">
          {error ? (
            <span style={{ color: 'red' }}>{error.message}</span>
          ) : (
            <span>{displayResult}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Currency;