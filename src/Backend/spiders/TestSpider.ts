import Spider from '@myTypes/BaseSpider'
import Movie from '@myTypes/Movie';


export default class TestSpider implements Spider {
    BaseUrl: string;
    getMovie(name: string): Promise<Movie> {
        throw new Error('Method not implemented.');
    }
    makeRequest(url: string): Promise<string> {
        throw new Error('Method not implemented.');
    }
    search(query: string): Promise<Movie[]> {
        throw new Error('Method not implemented.');
    }

}