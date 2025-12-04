import axios from "axios";
import api from "./axiosInstance";

export const loginUser = (email, password) => {
    return api.post("auth/login", { email, password });
};

export const registerUser = (data) => {
    return api.post("/auth/register", data);
};

export const logoutUser = () => {
    return api.post("/auth/logout");
};

