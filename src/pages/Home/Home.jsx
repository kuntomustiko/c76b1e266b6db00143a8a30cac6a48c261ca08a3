import React, { useState, useEffect } from 'react';
import HomeComponent from '../../components/Home';
import axios from '../../config/axios';

// home logic
function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get('/cards').then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  };

  return <HomeComponent renderData={data} abc="sasa" />;
}

export default Home;
