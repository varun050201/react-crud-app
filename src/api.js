import axios from "axios";

const API_URL = "https://67a24566409de5ed5254e183.mockapi.io/crud"; // Sample API

export const getUsers = () => axios.get(API_URL);
export const createUser = (data) => axios.post(API_URL, data);
export const updateUser = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteUser = (id) => axios.delete(`${API_URL}/${id}`);
