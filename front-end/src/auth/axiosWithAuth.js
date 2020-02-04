import axios from "axios";

export default function axiosWithAuth() {
  const token = localStorage.getItem("token");
  const axiosInstance = axios.create({
    baseURL: "https://replate-eu.herokuapp.com",
    headers: {
      "Content-type": "application/json",
      Authorization: token
    }
  });
  return axiosInstance;
}
