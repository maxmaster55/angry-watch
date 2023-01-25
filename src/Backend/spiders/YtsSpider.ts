import axios, { Axios } from "axios";
import Spider from "../types/BaseSpider";
import Movie from "../types/Movie";
import { Error } from "../types/Errors"

export default class YtsSpider implements Spider {
    BaseUrl = "https://yts.rs/api/v2/search?q=";

    constructor() {
        console.log("YTS is ready");
    }

    async search(query: string): Promise<Movie[]> {
        try {
            const url = this.BaseUrl + query;
            const data = await this.makeRequest(url);
            // to convert the data to JSON
            const JSONdata = JSON.parse(JSON.stringify(data));
            const movies: Movie[] = JSONdata.movies;
            return Promise.resolve(movies);
        } catch (error) {
            console.log("An error occured while handling the data...");
            return Promise.reject(Error.DATA_ERROR);
        }
    }


    async makeRequest(url: string): Promise<string> {
        try {
            const res = await axios.get(url);
            console.log("Request to " + url + " was successful status: " + res.status);
            return res.data;
        } catch (error) {
            console.log("An error occured while making a request to the server...");
            return Promise.reject(Error.REQUEST_ERROR);
        }
    }
}