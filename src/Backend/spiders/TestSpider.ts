import Spider from '@myTypes/BaseSpider'
import Movie from '@myTypes/Movie';
import { Error as E } from '../types/Errors';

export default class TestSpider implements Spider {

    BaseUrl: string;
    TestMovies: Movie[] = [
        {
            title_english: 'Test Movie 1',
            year: 2020,
            imdb_code: 'tt1234567',
            slug: "test-movie-1-2020",
            watch_urls:
                [
                    {
                        resolution: ' 3D.bluray',
                        url: 'magnet:?xt=urn:btih:D5D7DC9374B6E2F7C26B024A85DD18…r=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337'
                    },
                    {
                        resolution: ' 720p.bluray',
                        url: 'magnet:?xt=urn:btih:44C2FAC39605DB697C045D0EB664C9…r=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337'
                    },
                    {
                        resolution: ' 1080p.bluray',
                        url: 'magnet:?xt=urn:btih:EADF812FFF1D9F1200AA87AB93DAEE…r=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337'
                    },
                    {
                        resolution: ' 2160p.bluray',
                        url: 'magnet:?xt=urn:btih:DE22F7D84A92567ABA6EBD4D060CCD…r=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337'
                    },
                    {
                        resolution: ' 720p.web',
                        url: 'magnet:?xt=urn:btih:E70B6A744044DD0CAAA33335F4B620…r=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337'
                    },
                    {
                        resolution: ' 1080p.web',
                        url: 'magnet:?xt=urn:btih:A753EA13F243EF9C4006D103DCBDBC…r=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337'
                    }
                ]
        },
        {
            title_english: 'Test Movie 2',
            year: 2020,
            imdb_code: 'tt1234567',
            slug: "test-movie-2-2020",
            small_cover_image: 'https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_FMjpg_UX1000_.jpg',
        },
        {
            title_english: 'Test Movie 3',
            year: 2020,
            imdb_code: 'tt1234567',
            slug: "test-movie-3-2020",
            small_cover_image: 'https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_FMjpg_UX1000_.jpg',
        },
    ]

    constructor() {
    }

    async getMovie(name: string): Promise<Movie> {
        const w = await this.wait(2)
        const movie = this.TestMovies.find(movie => movie.slug === name)
        return Promise.resolve(movie)

    }
    makeRequest(url: string): Promise<string> {
        throw new Error('Method not implemented.');
    }
    async search(query: string): Promise<Movie[]> {
        const w = await this.wait(2)
        const movies = this.TestMovies.filter(movie => movie.title_english.includes(query))
        return Promise.resolve(movies)
    }

    async wait(seconds: number): Promise<void> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, seconds * 1000);
        });
    }

}