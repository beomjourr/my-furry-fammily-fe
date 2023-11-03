import { atom } from 'jotai';

export const currentLocation = atom<{
  latitude: number;
  longitude: number;
}>({
  latitude: 0,
  longitude: 0,
});
