import axios from "axios";
import Spider from "../types/BaseSpider";
import Movie from "../types/Movie";

class ShahedSpider implements Spider {
    BaseUrl = "https://shahed4u.beauty/";

    constructor() {
        console.log("ShahedSpider is ready");
    }


    getHtml(url: string): Promise<string> {
        return axios.get(this.BaseUrl);
    }
    crawl(url: string): Promise<string> {
        throw new Error("Method not implemented.");
    }
    parse(html: string): Promise<string> {
        throw new Error("Method not implemented.");
    }
    getMovies(url: string): Promise<Movie[]> {
        throw new Error("Method not implemented.");
    }

}