import { atom } from 'jotai';

export interface SurveyData {
  dogOrCat: null | string;
  species: null | string;
  gender: null | string;
  isNeutering: null | string;
  birth: null | string;
  weight: null | string;
  howLong: null | string;
  feed: null | string;
  disease: null | string;
  allergy: null | string;
  bodyType: null | string;
  requestCurator: null | string;
}

export const surveyData = atom<SurveyData>({
  dogOrCat: null,
  species: null,
  gender: null,
  isNeutering: null,
  birth: null,
  weight: null,
  howLong: null,
  feed: null,
  disease: null,
  allergy: null,
  bodyType: null,
  requestCurator: null,
});
