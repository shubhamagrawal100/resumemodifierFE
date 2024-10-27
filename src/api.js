import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001", // Replace with your backend URL
});

export const login = (username, password) => api.post("/login", { username, password });
export const register = (username, password) => api.post("/register", { username, password });
export const uploadResume = (username, file) => {
  const formData = new FormData();
  formData.append("username", username);
  formData.append("resume", file);
  return api.post("/upload", formData, { headers: { "Content-Type": "multipart/form-data" } });
};
export const modifyResume = (username, jobdescriptionURL) =>
  api.post("/modify", { username, jobdescriptionURL });