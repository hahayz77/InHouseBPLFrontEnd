import { writable } from 'svelte/store';

export const userStore = writable(
    {
    menssagem: "",
    id: "",
    name: "none",
    main: 'Raigon',
    points: '0',
  }
  );