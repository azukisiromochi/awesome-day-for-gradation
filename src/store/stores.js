import { writable } from 'svelte/store';

function createUrl() {
  const { subscribe, set } = writable('http://localhost:3000/');

  return {
    subscribe,
    set: (_url) => set(_url),
    clear: () => set('http://localhost:3000/')
  };
}

function createHue() {
  const { subscribe, set } = writable('');

  return {
    subscribe,
    set: (_hue) => set(_hue),
    clear: () => set('')
  };
}

function createGradation() {
  const { subscribe, set } = writable('');

  return {
    subscribe,
    set: (_gradation) => set(_gradation),
    clear: () => set('')
  };
}

export const urlStore = createUrl();
export const hueStore = createHue();
export const gradationStore = createGradation();
