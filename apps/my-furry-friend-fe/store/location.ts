import { atom } from 'jotai';

export const locationState = atom<{
  latitude: number;
  longitude: number;
}>({
  latitude: 0,
  longitude: 0,
});

export const currentLocationState = atom<{
  latitude: number;
  longitude: number;
}>({
  latitude: 0,
  longitude: 0,
});

export const locationPermissionState = atom<boolean>(false);
