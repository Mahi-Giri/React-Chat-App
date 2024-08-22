import axios from "axios";
import { HOST } from "../constant.js";

export const apiClient = axios.create({
    baseURL: HOST,
});
