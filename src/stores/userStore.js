import { writable } from 'svelte/store';

export const userStore = writable(
    {
    menssagem: "",
    id: "",
    name: "Hahay",
    main: 'Ulric',
    points: '0',
    img: 'Freya'
  }
  );