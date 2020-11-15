<script>
	import io from 'socket.io-client';
	import { matchesStore } from '../stores/matchesStore';
	import { userStore } from '../stores/userStore';
	import Matches from '../components/Matches.svelte';


	// import Teste from '../components/Teste.svelte'

	const socket = io("http://localhost:8081/", {
		'reconnectionDelay': 60000,
		'reconnectionDelayMax' : 90000,
		'reconnectionAttempts': 3
	})

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

	function enterQueue(){
		socket.emit('queueUpdate', {name: input.value});
	}

	socket.on('reportInit', async(report)=>{
		try {
			const reportResponse =  await report;
			reportResult = reportResponse;
			return reportResult;
		} catch (error) {
			throw {error}
		}
	})

	socket.on('reportUpdate', async(report)=>{
		try {
			reportMatch =  await report;
			return await reportMatch;
		} catch (error) {
			throw {error}
		}
	})

	function report(){
		var myTeam;
		var otherTeam;
		if($userStore.name === reportResult.teams[0] || $userStore.name === reportResult.teams[1] || $userStore.name === reportResult.teams[2]){
			myTeam = selectTeamA;
			otherTeam = selectTeamB;
		}
		else{
			myTeam = selectTeamB;
			otherTeam = selectTeamA;
		}
		socket.emit('reportUpdate', {selectTeamA, selectTeamB, selectProblem});
		return;
	}

	socket.on('error', (err) => {
		console.log("error");
	})


	let input = '';
	let queuePlayers;
	let reportMatch;
	let reportResult;
	let selectTeamA, selectTeamB, selectProblem;

</script>

<svelte:head>
	<title>Logged</title>
</svelte:head>
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
					<p>{selectTeamA + selectTeamB + selectProblem}</p>
					</div>
			</div>
		</div>
		<div class="col-12 col-sm-6 alignjustify-content-center">
			<div class="row">
				<div></div>
				<form on:submit|preventDefault={report} class="mx-auto">
					<div class="card text-center">
						<div class="card-header"><h3>Reportar Resultado</h3></div>
							<div class="card-body">
								{#if reportResult === undefined}
									<h3>"Nenhuma partida encontrada"</h3>
								{:else if reportResult.mensagem === "Nenhuma partida encontrada"}
									<h3>"Nenhuma partida encontrada"</h3>
								{:else}
								<div class="row">
									<div class="col-6">
									<h5 class="card-title">Time A</h5>
									<select bind:value={selectTeamA} class="form-control bg-primary text-light">
										<option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option class="bg-success">5</option>
									</select>
								</div>
								<div class="col-6">
									<h5 class="card-title">Time B</h5>
									<select bind:value={selectTeamB} class="form-control bg-danger text-light">
										<option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option class="bg-success">5</option>
									</select>
								</div>
								</div>
								<div>
									<h5 class="mt-3">Reportar Problema</h5>
									<select bind:value={selectProblem} class="form-control bg-warning mb-4">
										<option>Nenhum problema</option>
										<option>Player inativo</option>
										<option>Cancelar partida</option>
										<option>Outro problema</option>
									</select>
								</div>
								<input type="submit" class="btn btn-success" value="Enviar Resultado">
								{/if}
							</div>
							<div class="card-footer text-muted">Você está no time <span>A</span></div>
							<div class="card-footer text-muted">ID DA PARTIDA "ID" <span>A</span></div>
						</div>
					</form>
				</div>
			</div>
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