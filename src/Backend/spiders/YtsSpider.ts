import axios, { Axios } from "axios";
import Spider from "../types/BaseSpider";
import Movie from "../types/Movie";
import { Error } from "../types/Errors"
const cheerio = require("cheerio");



export default class YtsSpider implements Spider {
    BaseUrl = "https://yts.rs/";

    constructor() {
        console.log("YTS is ready");
    }

    async search(query: string): Promise<Movie[]> {
        try {
            const url = `${this.BaseUrl}api/v2/search?q=${query}`;
            const data = await this.makeRequest(url);
            // to convert the data to JSON
            const JSONdata = JSON.parse(JSON.stringify(data));
            var movies: Movie[] = JSONdata.movies;
            //process the images
            movies = this.processImages(movies);
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

    async getMovie(name: string): Promise<Movie> {
        try {
            const url = `${this.BaseUrl}movie/${name}`;
            const data = await this.makeRequest(url);
            const $ = cheerio.load(data);
            const movie: Movie = {
                title_english: $(".hidden-xs h1").text().replace("Warning! Download only with VPN...", '').trim(),
                //find the year with regex
                year: $("h2").text().match(/\d+/g).map(Number)[0],

                imdb_code: "testcode6969",
                slug: $("h1").text(),
            };
            return Promise.resolve(movie);

        } catch (error) {
            return Promise.reject(Error.DATA_ERROR);
        }
    }

    processImages(data) {
        //replace the string small_cover_image with medium_cover_image
        data.forEach(movie => {
            movie.small_cover_image = movie.small_cover_image.replace("small", "medium")
        })

        data.forEach(movie => {
            movie.small_cover_image = "https://image.yts.rs" + movie.small_cover_image + ".jpg"
        })
        return data
    }
}