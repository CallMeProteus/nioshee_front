import { useState, useEffect } from "react";
import axios from 'axios';

const BASE_URL = "http://192.168.0.77:8000/api/user/";

const useAuth = (url, phoneNumber, otp) => {
const [data, setData] = useState(null);

const apiCaller = async () => {
try {
const response = await axios.get(BASE_URL + url, {
params: {
phone_number: phoneNumber
}
});
setData(response.data);
} catch (error) {
console.error(error);
}
};

useEffect(() => {
apiCaller(url);
}, []);

return [data];
};

export default useAuth;