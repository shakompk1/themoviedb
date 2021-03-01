import * as url from "src/url.json";
import { API_KEY } from "src/api";
import axios from "axios";

export const getDataFromApi = async (urls, params = {}) => {
    return await axios
        .get(`${url.host}${urls}`, {
            params: {
                api_key: API_KEY,
                ...params,
            },
        })
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            throw error;
        });
};
