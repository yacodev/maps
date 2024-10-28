export interface PlacesResponse {
  type: string;
  features: Feature[];
  attribution: string;
}

export interface Feature {
  type: string;
  id: string;
  geometry: Geometry;
  properties: Properties;
}

export interface Geometry {
  type: string;
  coordinates: number[];
}

export interface Properties {
  mapbox_id: string;
  feature_type: string;
  full_address: string;
  name: string;
  name_preferred: string;
  coordinates: Coordinates;
  place_formatted: string;
  bbox?: number[];
  context: Context;
}

export interface Context {
  place: District;
  district?: District;
  region: Region;
  country: Country;
  locality?: District;
}

export interface Country {
  mapbox_id: string;
  name: string;
  wikidata_id: string;
  country_code: string;
  country_code_alpha_3: string;
  translations: Translations;
}

export interface Translations {
  es: Es;
}

export interface Es {
  language: Language;
  name: string;
}

export enum Language {
  Es = 'es',
  Fr = 'fr',
}

export interface District {
  mapbox_id: string;
  name: string;
  wikidata_id?: string;
  translations: Translations;
}

export interface Region {
  mapbox_id: string;
  name: string;
  wikidata_id: string;
  region_code: string;
  region_code_full: string;
  translations: Translations;
  alternate?: Region;
}

export interface Coordinates {
  longitude: number;
  latitude: number;
}
