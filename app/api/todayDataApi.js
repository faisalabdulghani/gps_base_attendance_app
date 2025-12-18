import api from "./axiosInstance";

export const getTodayData = () => {
    return api.get("/reports/today");
};