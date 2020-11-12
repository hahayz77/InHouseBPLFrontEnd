<script>
	import io from 'socket.io-client';
	import { matchesStore } from '../stores/matches';
	import Matches from '../components/Matches.svelte';


	// import Teste from '../components/Teste.svelte'

	const socket = io("http://localhost:8081/", {
		'reconnectionDelay': 60000,
		'reconnectionDelayMax' : 90000,
		'reconnectionAttempts': 3
	})

	socket.on('matchInit', async (matches) => {
		try {
			console.log(matches);
			matchesStore.update((listaAtual)=>{
				return matches;
			})
		} catch (error) {
			throw {error}	
		}
	})


	socket.on('matchUpdate', async (matches) => {
		try {
			matchesStore.update((listaAtual)=>{
				return matches;
			})
		} catch (error) {
			throw {error}	
		}
	})

	socket.on('queueInit', async (queue) => {
		try {
			queuePlayers =  await queue;
			return await queuePlayers;
		} catch (error) {
			throw {error}
		}
	})

	socket.on('queueUpdate', async (queue) => {
		try {
			queuePlayers = await queue;
			return await queuePlayers;
		} catch (error) {
			throw {error}
		}
	})

	socket.on('error', (err) => {
		console.log("error");
	})

	socket.on('newMatch', async (matches)=>{
		queuePlayers =  await matches;
		return queuePlayers;
		console.log("newMatch");
	})
	

	function enterQueue(){
		socket.emit('queueUpdate', {name: input.value});
	}
	// async function objectsUpdate(){
	// 	console.log(await matches);
	// 	return await matches;
	// }

	let input = '';
	let queuePlayers;

</script>

<svelte:head>
	<title>Logged</title>
</svelte:head>

	<section class="container jumbotron">
		
		<div class="row">
			<div class="col">
				<h1>Youre LoggedIn!</h1>
				<input type="text" bind:this={input}>
				<button type="button" on:click={enterQueue}>Enter</button>
			</div>
		</div>
	</section>
	
	{#if queuePlayers == undefined}
		<h2 style="color: white">Carregando a fila...</h2>
	{:else if queuePlayers == ""}
		<h2 style="color: white">Nenhum player aguardando</h2>
	{:else}
		{#each queuePlayers as player, id}
				<div class="item">
					<h3 style="color: white">{player.name} --- {player.time}</h3>
					
				</div>
			{/each}
	{/if}
	

	{#if $matchesStore === undefined}
		<h2 style="color: white">Carregando partidas...</h2>
	{:else if $matchesStore == ''}
		<h2 style="color: white">Nenhuma partida em adamento!</h2>
	{:else}
		<Matches />
	{/if}


<style>

</style>