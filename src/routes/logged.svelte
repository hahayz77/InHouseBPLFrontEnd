<script>
	import io from 'socket.io-client';

	import { fade } from 'svelte/transition';

	import { matchesStore } from '../stores/matchesStore';
	import { userStore } from '../stores/userStore';
	import { reportStore } from '../stores/reportStore';

	import Matches from '../components/Matches.svelte';
	import Report from '../components/Report.svelte';
	import Erro from '../components/Erro.svelte';


	const socket = io("http://localhost:8081/", {
		transports: ['websocket']
	})		

	let fetchURL = "http://localhost:8081";
	let error, status;
	let input = '';
	let queuePlayers;
	let reportMatch, reportResult;
	let reportRes;


	async function update(){
    try {
      const fetchUpdate = await fetch(fetchURL + "/match/update/" + $userStore.name )
      const result = await fetchUpdate.json();
      matchesStore.update(listaAtual => { return result.matches })
      userStore.update(listaAtual => { return result.user })
    } catch (error) {
      console.log(error);
    }
  }

	// ########################################   MATCH

	socket.on('matchInit', async (matches) => {
		try {
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

	// ########################################   QUEUE

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

	async function enterQueue(){
		await update();
		if ($matchesStore[0] === undefined){
			socket.emit('queueUpdate', {name: input.value});
		}
		else{
			var letQueue = $matchesStore[0].teams.indexOf($userStore.name);
			if( letQueue === -1){
				socket.emit('queueUpdate', {name: input.value})
			}
			else{
			error = "Você tem uma partida para finalizar!";
			await setTimeout(() => {error = undefined}, 3000);
			}
		}
	}

	// ########################################   REPORT
	async function clickReport(){
		var response = await fetch(fetchURL + '/match/report/'+ $userStore.name);
		reportRes = await response.json();
		console.log(reportRes);
		if(reportRes.id !== undefined){
			reportStore.update(()=>{ return reportRes })
		}
		if(reportRes.status === "nomatch"){
			return;
		}
		return;
	}
	

	  // ########################################   ERROR
	  
	socket.on('error', async (err) => {
		error = await err;
		console.log(error);
		await setTimeout(()=>{ error = undefined }, 3000);
		return;
	})
</script>

<svelte:head>
	<title>Logged</title>
</svelte:head>

{#if error !== undefined}<Erro  error={error}/>{/if}


<section class="container jumbotron">
	<div class="row">
		<div class="col-12 col-sm-6 px-3">
			<div class="card">
				<div class="card-header"><h2>{$userStore.name}</h2></div>
				<div class="card-body">
					<img class="d-block mr-auto rounded-pill" src="/champions/{$userStore.main}.jpg" alt="">
					<h2>Pontos: {$userStore.points}</h2>
					<h3>Main: {$userStore.main}</h3>
					<h4>Partidas</h4>
					<h4>Winrate</h4>
					<input type="button" on:click={clickReport} class="btn btn-danger" value="Reportar Resultado" data-toggle="modal" data-target="#exampleModal">
					</div>
			</div>
		</div>
		<div class="col-12 col-sm-6 alignjustify-content-center">
			<Report />
		</div>

</section>


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
	.card{
		background-color: transparent ;
	}
</style>