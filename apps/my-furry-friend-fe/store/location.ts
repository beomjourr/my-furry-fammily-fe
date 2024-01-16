import { atom } from 'jotai';

export interface Location {
  latitude: number;
  longitude: number;
}

export const locationState = atom<Location | undefined>(undefined);
export const searchLocationState = atom<Location | undefined>(undefined);
