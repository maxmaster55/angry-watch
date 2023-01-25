import Movie from "./Movie";
// a class that makes a spider to crowal the web and get the data 

export default interface Spider {
    //TODO: make a function to get for the home page
    BaseUrl: string;
    getHtml(url: string): Promise<string>;
    parse(html: string): Promise<Movie[]>;
    search(query: string): Promise<Movie[]>;
}
