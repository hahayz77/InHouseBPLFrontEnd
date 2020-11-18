import { writable } from 'svelte/store';

export const userStore = writable(
    {
    menssagem: "",
    id: "",
    name: "hahay2",
    main: 'Sirius',
    points: '0',
  }
  );