import api from "./axiosInstance";

export const markAttendance = (location) => {
    return api.post("/attendance/mark", location);
};