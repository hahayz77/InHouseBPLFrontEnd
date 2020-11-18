import { writable } from 'svelte/store';

export const reportStore = writable({
    status: "",
    mensagem: "",
    id: "",
    teams: [0,0,0,0,0,0],
    reported: "",
    preresult: ""
});