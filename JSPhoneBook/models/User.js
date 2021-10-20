import {ApiConfig} from "../config/ApiConfig.js";

export const User = {
    get() {
        return fetch(ApiConfig.root +  "/users").then((res) => res.json());
    }
};