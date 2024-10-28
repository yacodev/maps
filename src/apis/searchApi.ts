import axios from 'axios';

const searchApi = axios.create({
  baseURL: 'https://api.mapbox.com/search/geocode/v6/forward',
  params: {
    limit: 5,
    language: 'es',
    access_token: '',
  },
});

export default searchApi;
