import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const api = axios.create({
    baseURL: "https://gps-attendance-app-backend.vercel.app/api",
    timeout: 10000,
});

api.interceptors.request.use(async (config) => {
    try {
        const raw = await AsyncStorage.getItem("token");
        const token = raw ? JSON.parse(raw) : null;

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    } catch (e) {
        console.log("TOKEN ERROR →", e);
    }

    return config;
});

export default api;
