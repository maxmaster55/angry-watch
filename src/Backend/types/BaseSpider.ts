import Movie from "./Movie";
// a class that makes a spider to crowal the web and get the data 

export default interface Spider {
    BaseUrl: string;
    getHtml(url: string): Promise<string>;
    crawl(url: string): Promise<string>;
    parse(html: string): Promise<string>;
    getMovies(url: string): Promise<Movie[]>;
}
