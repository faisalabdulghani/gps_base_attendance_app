import api from "./axiosInstance";

export const markAttendance = (location) => {
    return api.post("/attendance/mark", location);
};

export const getMontlyAttendance = () => {
    return api.get("/attendance/my");
};