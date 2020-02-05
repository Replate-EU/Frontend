import axios from "axios";

export default function axiosWithAuth() {
  const token = localStorage.getItem("token");
  const axiosInstance = axios.create({
    // baseURL: "http://localhost:7000",
    baseURL: "https://replate-eu.herokuapp.com",
    headers: {
      Authorization: token
    }
  });
  return axiosInstance;
}
