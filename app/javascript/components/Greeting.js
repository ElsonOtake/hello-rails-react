import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadData } from '../redux/greeting';

const Greeting = () => {
  const greetings = useSelector((state) => state.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData());
  }, []);

  return (
    <>
      <h1>{greetings}</h1>
    </>
  );
}

export default Greeting;
