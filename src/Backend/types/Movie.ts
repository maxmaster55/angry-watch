

export default class Movie {
    id: number;
    name: string;
    description?: string;
    watchUrls?: string[];
    year?: number;
    duration?: number;
    genre?: string;
    director?: string;
    actors?: string;
    image: string;
    trailer?: string;
    rating?: number;
    createdAt?: Date;
    updatedAt?: Date;

    constructor(id: number, name: string, image: string) {
        this.id = id;
        this.name = name;
        this.image = image;
    }

    static fromJSON(json: any): Movie {
        const movie = new Movie(json.id, json.name, json.image);
        movie.description = json.description;
        movie.year = json.year;
        movie.duration = json.duration;
        movie.genre = json.genre;
        movie.director = json.director;
        movie.actors = json.actors;
        movie.trailer = json.trailer;
        movie.rating = json.rating;
        movie.createdAt = json.createdAt;
        movie.updatedAt = json.updatedAt;
        return movie;
    }

    getWatchUrls(): string[] | undefined {
        return this.watchUrls;
    }

    setWatchUrls(watchUrls: string[]): void {
        this.watchUrls = watchUrls;
    }

    toJSON(): any {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            year: this.year,
            duration: this.duration,
            genre: this.genre,
            director: this.director,
            actors: this.actors,
            image: this.image,
            trailer: this.trailer,
            rating: this.rating,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }

}