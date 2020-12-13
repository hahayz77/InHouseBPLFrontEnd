<script>
	import io from 'socket.io-client';

	import { fade } from 'svelte/transition';

	import { goto } from '@sapper/app';
	import { onMount } from 'svelte';

	import { matchesStore } from '../stores/matchesStore';
	import { userStore } from '../stores/userStore';
	import { reportStore } from '../stores/reportStore';
	import { rankingStore } from '../stores/rankingStore';

	import Matches from '../components/Matches.svelte';
	import Report from '../components/Report.svelte';
	import Erro from '../components/Erro.svelte';

	const PORT = "https://app-inhouseleagueblp.herokuapp.com";
	// const PORT = "http://localhost:8081/";

	const socket = io(PORT, {
		transports: ['websocket']
	})		

	let fetchURL = PORT;
	let error, status;
	let input = '';
	let queuePlayers;
	let reportMatch, reportResult;
	let reportRes;
	let winrate;
	let rankingUsers = [];

	onMount(() => {
		if($userStore.id === '' || $userStore._id === ''){
			window.location.replace( "https://battleritebrasil.netlify.app"+ "/login")
		}
		else{
			ranking();
			if ($userStore.name !== "none"){
				if($userStore.wins !== 0 || $userStore.loses !== 0){
					winrate = ($userStore.wins / ($userStore.wins + $userStore.loses)) * 100;
					winrate = parseFloat(winrate.toFixed(1));
				} else{
					winrate = 0;
				}
			
			}
		}
	})

	async function update(){
    try {
      const fetchUpdate = await fetch(fetchURL + "/match/update/" + $userStore.name )
      const result = await fetchUpdate.json();
      matchesStore.update(listaAtual => { return result.matches })
	  userStore.update(listaAtual => { return result.user })
	  ranking();
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
			socket.emit('queueUpdate', {name: $userStore.name});
		}
		else{
			var letQueue = $matchesStore[0].teams.indexOf($userStore.name);
			if( letQueue === -1){
				socket.emit('queueUpdate', {name: $userStore.name})
			}
			else{
			error = "Você tem uma partida para finalizar!";
			await setTimeout(() => {error = undefined}, 3000);
			}
		}
	}

	async function enterQueueINPUT(){
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

		async function outQueue(){
				socket.emit('queueDelete', $userStore.id || $userStore._id);
	}

	// ########################################   REPORT
	async function clickReport(){
		var response = await fetch(fetchURL + '/match/report/'+ $userStore.name);
		reportRes = await response.json();

		if(reportRes.id !== undefined){
			reportStore.update(()=>{ return reportRes })
		}
		if(reportRes.status === "nomatch"){
			return;
		}
		return;
	}
	
	  // ####################################### RANKING

	  async function ranking(){
		const fetchRanking = await fetch(fetchURL + "/user/ranking/")
		const result = await fetchRanking.json();

		rankingStore.update(listaAtual => { return result })
		rankingUsers = $rankingStore;
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
		<div class="col-12 col-sm-6 col-md-6 px-3">
			<div class="card user">
				<div class="card-header"><h2>{$userStore.name} <a href="/user/config" class="float-right"><i class="fas fa-cog text-dark"></i></a></h2></div>
				<div class="card-body">
					<img class="d-block mr-auto rounded-pill py-3" src="/champions/{$userStore.main}.jpg" alt="">
					<h4><i class="fas fa-award"></i> Pontos: {$userStore.points}</h4>
					<h5><i class="fas fa-heart"></i> Main: {$userStore.main}</h5>	
					<h5><i class="fas fa-arrow-circle-up"></i> Vitórias: {$userStore.wins}</h5>
					<h5><i class="fas fa-arrow-circle-down"></i> Derrotas: {$userStore.loses}</h5>
					<h5><i class="fas fa-percentage"></i> Winrate: {winrate}%</h5>
					<input type="button" on:click={enterQueue} class="btn btn-success" value="Entrar na fila">
					<input type="button" on:click={outQueue} class="btn btn-danger" value="Sair da fila">
					<input type="button" on:click={clickReport} class="btn btn-warning" value="Reportar resultado" data-toggle="modal" data-target="#exampleModal">
				</div>
			</div>
		</div>
		<div class="col-12 col-sm-6 col-md-6 px-3">
			<div class="card ranking">
				<div class="card-header"><h3>Ranking</h3></div>
				<div class="card-body">
					{#each rankingUsers as {name, main, points}, id}
					<div class="item-ranking">
						<span>{id+1}</span>
						<img src="/champions/{main}.jpg" alt="{main}" class=" mx-auto rounded-pill">
						<span>{name}</span>
						<span class="float-right">{points}</span>
					</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
	<section class="container jumbotron">
		<div class="row">
			{#if queuePlayers == undefined}
				<h2 class="text-center alert my-3">Carregando a fila...</h2>
			{:else if queuePlayers == ""}
				<h2 class="text-center alert my-3">Nenhum player aguardando</h2>
			{:else}
				<ul class="list-group col-12 col-sm-10 col-md-8 mx-auto">
					{#each queuePlayers as player, id}
						<li class='text-center list-group-item list-item-{id%2 === 0 ? "primary" : "secondary"}'><h4>{player.name}</h4></li>			
					{/each}
				</ul>
			{/if}
		</div>
	</section>
	<div class="row">
		{#if $matchesStore === undefined}
			<h2 class="text-center alert my-3">Carregando partidas...</h2>
		{:else if $matchesStore == ''}
			<h2 class="text-center alert my-3">Nenhuma partida em adamento!</h2>
		{:else}
			<Matches />
		{/if}
	</div>
</section>

		<div>
			<Report />
		</div>


<style>
	img{
		max-width: 100%;
	}
	.card{
		background-color: transparent ;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		-webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		-moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		border-radius: 10px;
	}
	.card-body{
		padding: auto 2rem;
	}
	.btn{
		border-radius: 25px;
		margin-top: 0.8rem;
		margin-bottom: 0.8rem;
	}
	.list-item-primary{
		background: rgba(255, 255, 255, 0.1);
		border-radius: 10px;
	}
	.list-item-secondary{
		background: rgba(0, 0, 0, 0.1);
		border-radius: 10px;
	}
	.list-group{
		padding: 1rem;
		margin-bottom: 1rem;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		-webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		-moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		border-radius: 10px;
	}
	.list-group-item{
		padding: 0.5rem 1rem;
		border: none;
	}
	.ranking, .user{
		max-height: 90vh;
	}
	.ranking .card-body{
		overflow: auto;
	}
	.item-ranking{
		margin: 1rem auto;
		font-size: 18px;
	}
	.item-ranking img{
		height: 50px;
	}
</style>