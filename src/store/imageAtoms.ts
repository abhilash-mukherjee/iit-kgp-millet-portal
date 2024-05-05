import { atom } from 'recoil';

export const imageAtom = atom({
  key: 'imageAtom', // unique ID (with respect to other atoms/selectors)
  default: [] // default value (aka initial value)
});