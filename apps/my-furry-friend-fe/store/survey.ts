import { atom } from 'jotai';

export const currentIndex = atom(0);
export const dogOrCatData = atom('강아지');
export const requestCuratorData = atom('');

export const surveyBody = atom((get) => {
  return {
    pet_type: get(dogOrCatData),
    request_curator: get(requestCuratorData),
  };
});
