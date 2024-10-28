import { useEffect, useReducer } from 'react';
import { PlacesContext } from './PlacesContext';
import { placesReducer } from './placesReducer';
import { getUserLocation } from '../../helpers';
import { searchApi } from '../../apis';
import { Feature, PlacesResponse } from '../../interfaces/places';

export interface PlacesState {
  isLoading: boolean;
  userLocation?: [number, number];
  isLoadingPlaces: boolean;
  places: Feature[];
}

const INITIAL_STATE: PlacesState = {
  isLoading: true,
  userLocation: undefined,
  isLoadingPlaces: false,
  places: [],
};

interface PlaceProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const PlacesProvider = ({ children }: PlaceProviderProps) => {
  const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE);

  useEffect(() => {
    getUserLocation().then((location) =>
      dispatch({ type: 'setUserLocation', payload: location })
    );
  }, []);

  const searchPlacesByTerm = async (query: string) => {
    if (query.length === 0) {
      dispatch({ type: 'setPlaces', payload: [] });
      return [];
    }

    if (!state.userLocation) throw new Error('User location not found');

    dispatch({ type: 'setLoadingPlaces' });

    const response = await searchApi.get<PlacesResponse>('', {
      params: {
        proximity: state.userLocation.join(','),
        q: query,
      },
    });
    console.log(response.data);
    dispatch({ type: 'setPlaces', payload: response.data.features });
    return response.data.features;
  };

  return (
    <PlacesContext.Provider
      value={{
        ...state,
        searchPlacesByTerm,
      }}
    >
      {children}
    </PlacesContext.Provider>
  );
};
