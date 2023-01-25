

export default class Movie {
    _id: string;
    id: number;
    imdb_code: string;
    title_english: string;
    title_long: string;
    slug: string;
    year: number;
    small_cover_image: string;


    // to get the movies from json string
    static fromJson(json: string): Movie {
        // just to make sure that there is no errors
        return JSON.parse(JSON.stringify(json));

    }

    // to get the movies list from json object
    static fromJsonList(json: string | undefined): Movie[] {
        // just to make sure that there is no errors
        return JSON.parse(JSON.stringify(json));
    }
}