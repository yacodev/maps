import React from 'react';
import { MapView, BtnMyLocation, ReactLogo, SearchBar } from '../components';

export const HomeScreen = () => {
  return (
    <div>
      <MapView />
      <BtnMyLocation />
      <ReactLogo />
      <SearchBar />
    </div>
  );
};
