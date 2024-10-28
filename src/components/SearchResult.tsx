import React, { useContext, useState } from 'react';
import { MapContext, PlacesContext } from '../context';
import { LoadingPlaces } from './';
import { Feature } from '../interfaces/places';

export const SearchResult = () => {
  const [activeId, setActiveId] = useState('');
  const { places, isLoadingPlaces, userLocation } = useContext(PlacesContext);
  const { map, getRouteBetweenPoints } = useContext(MapContext);

  const onPlaceClick = (place: Feature) => {
    const [lng, lat] = place.geometry.coordinates;
    setActiveId(place.id);
    map?.flyTo({
      center: [lng, lat],
      zoom: 14,
    });
  };

  const getRoute = async (place: Feature) => {
    if (!userLocation) return;
    const [lng, lat] = place.geometry.coordinates;

    await getRouteBetweenPoints(userLocation, [lng, lat]);
  };

  if (isLoadingPlaces) {
    return <LoadingPlaces />;
  }

  if (places.length === 0) {
    return <></>;
  }

  return (
    <ul className='list-group mt-3'>
      {places.map((place) => (
        <li
          className={`list-group-item list-group-item-action pointer ${
            activeId === place.id ? 'active' : ''
          }`}
          key={place.id}
          onClick={() => onPlaceClick(place)}
        >
          <h6>{place.properties.name}</h6>
          <p style={{ fontSize: '12px' }}>{place.properties.name}</p>
          <button
            onClick={() => getRoute(place)}
            className={`btn btn-sm ${
              activeId === place.id
                ? 'btn-outline-light'
                : 'btn-outline-primary'
            }`}
          >
            address
          </button>
        </li>
      ))}
    </ul>
  );
};
