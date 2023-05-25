import Spider from '@myTypes/BaseSpider'
import Movie from '@myTypes/Movie';
import { ReadStream } from 'original-fs';
import { Error as E } from '../types/Errors';
var torrentStream = require('torrent-stream');

export default class TestSpider implements Spider {

    BaseUrl: string;
    engine: TorrentStream.TorrentEngine;
    TestMovies: Movie[] = [
        {
            title_english: 'Test Movie 1',
            year: 2020,
            imdb_code: 'tt1234567',
            slug: "test-movie-1-2020",
            small_cover_image: 'https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_FMjpg_UX1000_.jpg',
            watch_urls:
                [
                    {
                        resolution: ' 3D.bluray',
                        url: 'magnet:?xt=urn:btih:3A32019729D53EC621894FFC3202463D078E60E3&amp;dn=You%20People%20(2023)&amp;tr=udp%3A%2F%2Fglotorrents.pw%3A6969%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&amp;tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&amp;tr=udp%3A%2F%2Fp4p.arenabg.ch%3A1337&amp;tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337'
                    },
                    {
                        resolution: ' 720p.bluray',
                        url: 'magnet:?xt=urn:btih:3A32019729D53EC621894FFC3202463D078E60E3&amp;dn=You%20People%20(2023)&amp;tr=udp%3A%2F%2Fglotorrents.pw%3A6969%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&amp;tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&amp;tr=udp%3A%2F%2Fp4p.arenabg.ch%3A1337&amp;tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337'
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


    async getMovie(name: string): Promise<Movie> {
        const w = await this.wait(1)
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

    download(url, callback: (file) => void) {
        this.engine = torrentStream(url)
        this.engine.on('ready', () => {
            // find .mp4 file
            this.engine.files.find(file => {
                if (file.name.endsWith('.mp4')) {
                    callback(file)
                }
            })

        })
    }
}