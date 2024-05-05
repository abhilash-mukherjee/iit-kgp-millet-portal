import { atom } from 'recoil';

export const badGrainAtom = atom({
  key: 'badGrain', // unique ID (with respect to other atoms/selectors)
  default: 50, // default value (aka initial value)
});

export const brokenGrainAtom = atom({
  key: 'brokenGrain',
  default: 10,
});

export const foreignGrainAtom = atom({
  key: 'foreignGrain',
  default: 20,
});

export const stonesPebblesAtom = atom({
  key: 'stonesPebbles',
  default: 70,
});
