import axios, { Axios } from "axios";
import Spider from "../types/BaseSpider";
import Movie from "../types/Movie";
import { Error as E } from "../types/Errors"
import WebTorrent from "webtorrent";
const cheerio = require("cheerio");



export default class YtsSpider implements Spider {
    BaseUrl = "https://yts.rs/";

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
            return Promise.reject(E.DATA_ERROR);
        }
    }

    async makeRequest(url: string): Promise<string> {
        try {
            const res = await axios.get(url);
            return res.data;
        } catch (error) {
            console.log("An error occured while making a request to the server...");
            return Promise.reject(E.REQUEST_ERROR);
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
                watch_urls: this.getWatchUrls($, ".download-torrent.popup123")
            };

            return Promise.resolve(movie);
        } catch (error) {
            return Promise.reject(E.DATA_ERROR);
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


    handleWatchUrl($, str): { resolution: string, url: string } {
        const data = {
            resolution: $(str).text(),
            url: $(str).attr("href")
        }
        return data;
    }

    getWatchUrls($, str) {
        var movies = $(str).map((i: number, el: any) => this.handleWatchUrl($, el)).get()
        movies = movies.filter(movie => movie.url.startsWith("magnet"))

        return movies;
    }

    DownlaodMovie(url: string): Promise<WebTorrent.TorrentFile> {
        throw new Error("Method not implemented.");
    }
}