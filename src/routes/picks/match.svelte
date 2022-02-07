<script>
	import io from 'socket.io-client';
	// import Push from 'push.js';

	// import { goto } from '@sapper/app';
	// import { onMount } from 'svelte';

	// import { matchesStore } from '../stores/matchesStore';
	// import { userStore } from '../stores/userStore';

	// import Erro from '../components/Erro.svelte';
	// import Config from '../components/Config.svelte';

	// SEM "/" NO FINAL
	// const fetchURL = "http://localhost:8081";
	// const fetchURL = "https://projeto.br-rgt.net";
	let fetchURL = 'https://app-inhouseleagueblp.herokuapp.com';

	const socket = io(fetchURL, {
		transports: ['websocket']
	})		

    </script>

<section class="container">
    <dib class="row">
        <div class="col">
            <h1>hello!</h1>
        </div>
    </dib>

</section>