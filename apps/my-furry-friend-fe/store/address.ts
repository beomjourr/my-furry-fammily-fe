import { atom } from 'jotai';

export const addressState = atom<string>('내 위치를 설정해주세요');
export const searchAddressState = atom<string>('');
