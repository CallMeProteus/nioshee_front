import { useState, useEffect } from "react";
const BASE_URL="http://192.168.0.77:8000/api"
import axios from 'axios';


const useFetch = (url) => {
  const [data, setData] = useState(null);


  const apiCaller = async () => {
    try {
      const response = await axios.get(BASE_URL+url);
      setData(response.data);
    } catch (error) {
      console.log('unreachebale server');
    }
  };


   useEffect(() => {
    apiCaller(url);
  }, []);


  return [data];
};

export default useFetch;