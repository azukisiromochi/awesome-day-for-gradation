import { writable } from 'svelte/store';

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

export const hueStore = createHue();
export const gradationStore = createGradation();
