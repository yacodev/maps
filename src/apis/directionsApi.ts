import axios from 'axios';

const directionsApi = axios.create({
  baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
  params: {
    alternatives: false,
    geometries: 'geojson',
    overview: 'simplified',
    steps: false,
    access_token:
      'pk.eyJ1IjoieWFjb2RldiIsImEiOiJjbTJzNmJsN3gxbDB3MmpvcW1wbXM0NjdvIn0.m6gLJHQ35z_M_kZ4h8OLhA',
  },
});

export default directionsApi;
