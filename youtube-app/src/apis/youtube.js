const KEY = 'AIzaSyBV73CDTcohnaXNqZoMsYEpKrkWabdzvqA';

export default AudioContextOptions.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part : 'snippet',
        maxResults: 5,
        key: KEY
    }
});