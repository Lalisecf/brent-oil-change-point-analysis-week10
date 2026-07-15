import axios from "axios";

// Flask Backend URL
const API = axios.create({
    baseURL: "http://127.0.0.1:5000",
});

// Fetch historical Brent oil prices
export const getPrices = async () => {
    const response = await API.get("/prices");
    return response.data;
};

// Fetch geopolitical events
export const getEvents = async () => {
    const response = await API.get("/events");
    return response.data;
};

// Fetch Bayesian change point results
export const getChangePoint = async () => {
    const response = await API.get("/change-point");
    return response.data;
};