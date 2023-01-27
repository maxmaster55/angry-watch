import Spider from '@myTypes/BaseSpider'
import Movie from '@myTypes/Movie';


export default class TestSpider implements Spider {
    BaseUrl: string;
    TestMovies: Movie[] = [
        {
            title_english: 'Test Movie 1',
            year: 2020,
            imdb_code: 'tt1234567',
            slug: "test-movie-1-2020",
            small_cover_image: 'https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_FMjpg_UX1000_.jpg',
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