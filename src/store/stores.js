import { writable } from 'svelte/store';

function createGradation() {
  const { subscribe, set } = writable('');

  return {
    subscribe,
    set: (_gradation) => set(_gradation),
    clear: () => set('')
  };
}

export const gradation = createGradation();
