import { writable } from 'svelte/store';

export const userStore = writable(
    {
    menssagem: "",
    id: "",
    name: "",
    points: '',
    img: 'Freya'
  }
  );