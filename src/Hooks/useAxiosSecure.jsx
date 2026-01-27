import axios from 'axios';
import React from 'react';

const axiosSequre = axios.create({
    baseURL: "http://localhost:3000"
});

const useAxiosSecure = () => {
    return axiosSequre;
}
export default useAxiosSecure;