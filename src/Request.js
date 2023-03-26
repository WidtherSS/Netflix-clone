const key = '54c133bda900b7a55b82fddc2146ee9a'

const requests = {
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestToprated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestSimilar: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
    requestLatest: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`
}

export default requests