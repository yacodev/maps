import React from 'react';
import { PlacesProvider, MapProvider } from './context';
import { HomeScreen } from './screens';
import './styles.css';

export const MapsApp = () => {
  return (
    <PlacesProvider>
      <MapProvider>
        <HomeScreen />
      </MapProvider>
    </PlacesProvider>
  );
};
