import api from "./axiosInstance";


export const getSummary = () => {
    return api.get("/reports/summary");
};