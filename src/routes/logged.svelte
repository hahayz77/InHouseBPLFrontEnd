<script>
	import io from 'socket.io-client';

	const socket = io("http://localhost:8081/", {
		'reconnectionDelay': 60000,
		'reconnectionDelayMax' : 90000,
		'reconnectionAttempts': 3
	})

	socket.on('matchInit', async (match) => {
		try {
			matches = await match;
			console.log(await matches);
			return await matches;
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

	let input = '';
	let queuePlayers;
	let matches;

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
	

	{#if matches == undefined}
		<h2 style="color: white">Carregando as Partidas...</h2>
	{:else if matches == ""}
		<h2 style="color: white">Nenhum Partida em Andamento!</h2>
	{:else}
				
				<div class="item">
				{#each matches.teams as teams, id}
					<span>{teams} +</span>
				{/each}
				{#each matches.result as teams, id}
					<span>{teams}</span>
				{/each}
				</div>
				
	{/if}


<style>

</style>