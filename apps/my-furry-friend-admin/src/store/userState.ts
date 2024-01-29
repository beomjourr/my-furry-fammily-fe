import { atom } from 'jotai';

interface UserState {
  access_token: string;
  refresh_token: string;
}

export const userState = atom<UserState>({
  access_token: '',
  refresh_token: '',
});
