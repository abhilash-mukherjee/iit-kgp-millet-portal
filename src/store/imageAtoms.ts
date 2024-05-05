// src/store/imageAtoms.js
import { atom } from 'recoil';

export const imageAtom = atom<string[]>({
  key: 'imageAtom', // unique ID (with respect to other atoms/selectors)
  default: [] // default value as an empty array of strings
});
