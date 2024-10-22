import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:8080/"
});

apiClient.interceptors.response.use((res) => { return res }, (error) => {
    if (error.response.status == 401) {
        localStorage.removeItem("token");
        window.location.reload();
    }

    if (error.response && error.response.status % 400 <= 99) {
        return error.response;
    } else {
        return Promise.reject(error);
    }
})

apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers["Authorization"] = `Bearer ${token}`;
    return config;
})

export default apiClient;