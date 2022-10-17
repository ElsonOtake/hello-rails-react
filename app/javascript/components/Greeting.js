import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Greeting = () => {
  const [greetings, setGreetings] = useState([]);

  const loadData = async () => {
    const response = await axios.get('/api/v1/greetings');
    setGreetings(response.data.text);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <h1>{greetings}</h1>
    </>
  );
}

export default Greeting;
