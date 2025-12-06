// leaveApi.js
import api from "./axiosInstance";

export const applyLeave = (data) => {
    return api.post("/leave/apply", data);
};

export const allLeaves = () => {
    return api.get("/leave/my");
};
