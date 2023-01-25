export interface User {
    name: string;
}

export interface Movie {
    slug: string;
    title: string;
    items: MovieData;
}

export interface MovieData {
    results: {
        poster_path: string;
        original_title: string;
        adult: boolean;
    }[]
}