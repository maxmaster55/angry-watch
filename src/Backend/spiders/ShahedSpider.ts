import axios, { Axios } from "axios";
import Spider from "../types/BaseSpider";
import Movie from "../types/Movie";
import * as cheerio from 'cheerio';


export default class ShahedSpider implements Spider {
    BaseUrl = "https://shahed4u.beauty/?s=";

    constructor() {
        console.log("ShahedSpider is ready");
    }
    parse(html: string): Promise<Movie[]> {
        const movies: Movie[] = [];
        try {
            const $ = cheerio.load(html);
            const items = $(".box-5x1.col-6.media-block");
            items.each((i, el) => {
                console.log($(el).html());
                const title = $(el).find(".fullClick").attr("title");
                const link = $(el).find(".fullClick").attr("href");
                const img = $(el).find(".Loaded img").attr("src");
                const movie = new Movie("title", img, "link");
                movies.push(movie);
            });
        } catch (error) {
            throw error;
        }
        return Promise.resolve(movies);
    }
    async search(query: string): Promise<Movie[]> {
        const url = this.BaseUrl + query;
        const html = await this.getHtml(url);
        const movies = await this.parse(html);
        return movies;
    }


    async getHtml(url: string): Promise<string> {
        const res = await axios.get(url);
        return res.data;
    }
}