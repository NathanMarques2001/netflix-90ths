import { FeatureMovieData, FilmOrSerie, HomeListItem } from "../utils/interfaces";

const API_KEY = "b92d93c813e08c4c22bb45e911908d1d";
const API_URL = "https://api.themoviedb.org/3";


const basicFetch = async (endpoint: string): Promise<FilmOrSerie[]> => {
    const response = await fetch(`${API_URL}${endpoint}`);
    const data = await response.json();
    const AdultFilms = data.results.filter((item: FilmOrSerie) => item.adult === false)
    return AdultFilms;
}

const fetchFeatured = async (endpoint: string): Promise<FeatureMovieData> => {
    const response = await fetch(`${API_URL}${endpoint}`);
    const data = await response.json();
    return data;
}


export default {
    getHomeList: async (): Promise<HomeListItem[]> => {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/movie?with_network=213&language=pt-BR&api_key=${API_KEY}`),
                adult: true || false,
            },
            {
                slug: 'trending',
                title: 'Recomendados para voce',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`),
                adult: true || false,
            },
            {
                slug: 'toprated',
                title: 'Em alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`),
                adult: true || false,
            },
            {
                slug: 'action',
                title: 'Acao',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`),
                adult: true || false,
            },
            {
                slug: 'comedy',
                title: 'Comedia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`),
                adult: true || false,
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`),
                adult: true || false,
            },
            {
                slug: 'animation',
                title: 'Animacao',
                items: await basicFetch(`/discover/movie?with_genres=16&language=pt-BR&api_key=${API_KEY}`),
                adult: true || false,
            },
            {
                slug: 'documentary',
                title: 'Documentarios',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`),
                adult: true || false,
            },
        ]
    },
    getFeatureMovie: async (movieId: number): Promise<FeatureMovieData> => {
        const information = await fetchFeatured(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`)
        return information
    }
}