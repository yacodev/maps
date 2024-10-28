import { MapState } from './MapProvider';
import { Map } from 'mapbox-gl';
import { Marker } from 'mapbox-gl';

type MapAction =
  | {
      type: 'setMap';
      payload: Map;
    }
  | {
      type: 'setMarkers';
      payload: Marker[];
    };

export const mapReducer = (state: MapState, action: MapAction): MapState => {
  switch (action.type) {
    case 'setMap':
      return {
        ...state,
        map: action.payload,
        isMapReady: true,
      };
    case 'setMarkers':
      return {
        ...state,
        markers: action.payload,
      };
    default:
      return state;
  }
};
