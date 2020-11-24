import { writable } from 'svelte/store';

export const userStore = writable(
    {
    menssagem: '',
    email: '',
    id: '',
    _id: '',
    name: 'none',
    main: 'Raigon',
    points: 0,
    wins: 0,
    loses: 0
    }
  )