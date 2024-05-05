import { atom } from 'recoil';

export const resultsRecieved = atom({
  key: 'resultsRecieved', // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});