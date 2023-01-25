

export default class Movie {
    title: string;
    description?: string;
    url: string;
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

    constructor(title: string, image: string, url: string) {
        this.title = title;
        this.image = image;
        this.url = url;
    }

    static fromJSON(json: any): Movie {
        const movie = new Movie(json.name, json.image, json.url);
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

    toJSON(): any {
        return {
            title: this.title,
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