<script>
	import io from 'socket.io-client';
	import Push from 'push.js';

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
	import Config from '../components/Config.svelte';
	import Player from '../components/Player.svelte';
	import Ranking from '../components/Ranking.svelte';
	import History from '../components/History.svelte';

	// const fetchURL = "http://localhost:8081";
	const fetchURL = "https://projeto.br-rgt.net";

	const socket = io(fetchURL, {
		transports: ['websocket']
	})		

	let error, status;
	let queuePlayers;
	let reportMatch, reportResult;
	let reportRes;
	let winrate;
	let rankingUsers = [];
	let rankingPlayer;
	let oldRankings = [];
	let pressed = false;
	let matchesHistory;
	let timeResult = [];

	onMount(async () => {
		if($userStore.id === '' || $userStore._id === ''){
			goto("/login");
		}
		else{
			await update();
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

async function notify(){
	try {
		Push.create("Partida encontrada!", {
			body: "Simbora pra pancadaria!!!",
			icon: 'logo-192.png',
			timeout: 30000,
			onClick: function () {
				this.close();
			}
		})
	} catch (error) {
		console.log("Partida encontrada!")
	}
}

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
			notify();
		} catch (error) {
			throw {error}	
		}
	})

	async function getHistoric(){
    try {
      const fetchHistory = await fetch(fetchURL + "/match/historic/")
      const result = await fetchHistory.json();
	  matchesHistory = result.historic;
	  
	  for(var i in  matchesHistory){
            var d = new Date(matchesHistory[i].time);
            timeResult[i] = d.toLocaleDateString() + "  " + d.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
		}
	  
	  return;
	  
    } catch (error) {
      console.log(error);
    }
  }

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
		pressed = true;
		await update();
		const player = await $userStore.name;
		if ($matchesStore[0] === undefined){
			socket.emit('queueUpdate', player);
		}
		else{
			var letQueue = $matchesStore[0].teams.indexOf(player);
			if( letQueue === -1){
				socket.emit('queueUpdate', player)
			}
			else{
			error = "Você tem uma partida para finalizar!";
			await setTimeout(() => {error = undefined}, 3000);
			}
		}
		return await setTimeout(() => { pressed = false; }, 3000);
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

	  async function oldRankingsClick(){
		try {
			const fetchUpdate = await fetch( fetchURL + "/user/pastrankings/");
			const result = await fetchUpdate.json();
			oldRankings = result;
			console.log(result);
			return;	
		} catch (error) {
			console.log(error);
		}	
	  }

	  function showPlayer(main, name, points, wins, loses, id){
		let winratePlayer = (wins / (wins + loses)) * 100;
      	winratePlayer = parseFloat(winratePlayer.toFixed(1));

		  rankingPlayer = {main: main, name: name, points: points, wins: wins, loses: loses, id: id, winrate: winratePlayer};
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
	<title>InHouse Reborn</title>
</svelte:head>

{#if error !== undefined}<Erro  error={error}/>{/if}


<section class="container jumbotron">
	<div class="row">
		<div class="col-12 col-sm-6 col-md-6 px-3 user">
			<div class="card">
				<div class="card-header"><h2>{$userStore.name} <a href={""} data-toggle="modal" data-target="#ModalConfig" class="float-right"><i class="fas fa-cog text-dark"></i></a></h2></div>
				<div class="card-body">
					<img class="d-block mr-auto rounded-pill py-3" src="/champions/{$userStore.main}.jpg" alt="">
					<h4><i class="fas fa-award"></i> Pontos: {$userStore.points}</h4>
					<h5><i class="fas fa-heart"></i> Main: {$userStore.main}</h5>	
					<h5><i class="fas fa-arrow-circle-up"></i> Vitórias: {$userStore.wins}</h5>
					<h5><i class="fas fa-arrow-circle-down"></i> Derrotas: {$userStore.loses}</h5>
					<h5><i class="fas fa-percentage"></i> Winrate: {winrate}%</h5>
					{#if pressed === false}
						<button type="button" on:click={enterQueue} class="btn btn-success"><i class="fas fa-play"></i> Entrar na fila</button>
					{:else}
						<button type="button" class="btn btn-success disabled" disabled><i class="fas fa-clock"></i> Entrar na fila</button>
					{/if}
					<button type="button" on:click={outQueue} class="btn btn-danger"><i class="fas fa-stop"></i> Sair da fila</button>
					<button type="button" on:click={clickReport} class="btn btn-warning" data-toggle="modal" data-target="#reportModal"><i class="fas fa-dice"></i> Reportar resultado</button>
				</div>
			</div>
		</div>
		<div class="col-12 col-sm-6 col-md-6 px-3 ranking">
			<div class="card">
				<div class="card-header"><h3>RANKING <a href={""} on:click={oldRankingsClick} data-toggle="modal" data-target="#ModalRanking" class="float-right"><i class="fas fa-trophy text-dark"></i></a></h3></div>
				<div class="card-body">
					{#each rankingUsers as {name, main, points, wins, loses}, id}
					<div class="item-ranking">
						<a href={""} on:click={showPlayer(main, name, points, wins, loses, id)} data-toggle="modal" data-target="#ModalPlayer">
							<span class="rank">{id+1}</span>
							<img src="/champions/{main}.jpg" alt="{main}" class="rounded-pill">
							<span class="name">{name}</span>
						</a>
						<span class="points float-right">{points}</span>
					</div>
					<hr class="my-0 mx-3">
					{/each}
				</div>
			</div>
		</div>
	</div>
	<section class="container jumbotron">
		<div class="row">
			<div class="col-12">
				<div class="card">
					<div class="card-header">
						<h3>FILA</h3>
					</div>
					<div class="card-body">
						{#if queuePlayers == undefined}
							<h4 class="text-center alert my-3">Carregando fila...</h4>
						{:else if queuePlayers == ""}
							<h4 class="text-center alert my-3">Nenhum player aguardando na fila!</h4>
						{:else}
							<ul class="list-group col-12 col-sm-10 col-md-8 mx-auto">
								{#each queuePlayers as player, id}
									<li class='text-center list-group-item list-item-{id%2 === 0 ? "primary" : "secondary"}'><h4>{player.name}</h4></li>			
								{/each}
							</ul>
						{/if}
					</div>
				</div>	
			</div>
		</div>
	</section>
	<section class="container jumbotron">
		<div class="row">
			<div class="col-12">
				<div class="card match">
					<div class="card-header">
						<h3>PARTIDAS <a href={""} on:click={getHistoric} data-toggle="modal" data-target="#ModalHistory" class="float-right"><i class="fas fa-history text-dark"></i></a></h3>
					</div>
					<div class="card-body">
						{#if $matchesStore === undefined}
							<h4 class="text-center alert my-3">Carregando partidas...</h4>
						{:else if $matchesStore == ''}
							<h4 class="text-center alert my-3">Nenhuma partida em adamento!</h4>
						{:else}
							<Matches />
						{/if}
					</div>
				</div>
			</div>
		</div>
	</section>
</section>

	<Report />
	<Config />
	<Player player={rankingPlayer} />
	<Ranking rankings={oldRankings}/>
	<History historic={matchesHistory} timeRes={timeResult}/>


<style>
	.disabled{
		cursor: default;
	}
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
	.list-group-item{
		padding: 0.5rem 1rem;
		border: none;
	}
	.ranking .card .card-body{
		max-height: 470px;
		overflow: auto;
	}
	.item-ranking{
		margin: 1rem auto;
		font-size: 18px;
	}
	.item-ranking img{
		height: 50px;
	}
	.item-ranking a{
		text-decoration: none;
		color: black;
	}
	.item-ranking span{
		line-height: 2.8rem;
	}
	.match .card-body{
		padding-right: 1rem;
		padding-left: 1rem;
	}

	@media (max-width: 767.98px) { 
		.ranking, .user{
			margin-top: 2rem;
			margin-bottom: 2rem;
		}
		.item-ranking .name{
			font-size: 16px;
		}
		.item-ranking img{
			height: 35px;
		}
		.item-ranking .points{
			line-height: 2;
		}
		.col-12{
			padding-right: 0;
			padding-left: 0;
		}
		.card-body{
			padding: 1rem;
		}
		.match .card-body{
			padding-right: 0.3rem;
			padding-left: 0.3rem;
		}
		.item-ranking span{
		line-height: 2rem;
		}
	}

</style>