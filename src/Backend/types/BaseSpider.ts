import WebTorrent from "webtorrent";
import Movie from "./Movie"

// a class that makes a spider to crowal the web and get the data 
export default interface Spider {
    //TODO: make a function to get for the home page
    BaseUrl: string;
    getMovie(name: string): Promise<Movie>;
    makeRequest(url: string): Promise<string>;
    search(query: string): Promise<Movie[]>;
}
