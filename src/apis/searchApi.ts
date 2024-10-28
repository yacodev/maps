import axios from 'axios';

const searchApi = axios.create({
  baseURL: 'https://api.mapbox.com/search/geocode/v6/forward',
  params: {
    limit: 5,
    language: 'es',
    access_token:
      'pk.eyJ1IjoieWFjb2RldiIsImEiOiJjbTJzNmJsN3gxbDB3MmpvcW1wbXM0NjdvIn0.m6gLJHQ35z_M_kZ4h8OLhA',
  },
});

export default searchApi;
