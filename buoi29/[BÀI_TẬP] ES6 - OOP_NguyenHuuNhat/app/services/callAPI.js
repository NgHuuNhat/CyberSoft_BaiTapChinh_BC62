import { API_URL } from "../configs/constants.js";

export default class Api {
    callApi(uri, method, data) {
        return axios({
            url: `${API_URL}/${uri}`,
            method,
            data,
        });
    }
}