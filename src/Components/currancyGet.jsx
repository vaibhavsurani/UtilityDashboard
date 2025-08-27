import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetcher({ data1 }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  
    useEffect(() => {
      const fetchData = async () => {
        const apiUrl = 'https://exchange-rate-api1.p.rapidapi.com/convert';
        const params = {
          base: data1.from,
          target: data1.to,
        };

        const headers = {
          'Content-Type': 'application/json',
          'x-rapidapi-key': 'c50323f314msh29e2274c97dc160p14ad08jsn77b28a2882dc',
          'x-rapidapi-host': 'exchange-rate-api1.p.rapidapi.com'
        };

        try {
          const response = await axios.get(apiUrl, {
            params: params,
            headers: headers,
          });
          setData(response.data);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }, []);
  
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }



  return (
    <div>
      <h1>Fetched Data:</h1>
      <pre>{data.convert_result.rate}</pre>
    </div>
  );


  return (
    <div>
      <pre>{data1.amount}</pre>
    </div>
  );
}

export default DataFetcher;