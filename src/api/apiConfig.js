const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'ba4aa4796321c714a5b5539fab7dd3c3',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;