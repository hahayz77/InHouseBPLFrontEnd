<script>
	import Hero from '../components/Hero.svelte'

</script>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<section>
	<Hero />
</section>

<section class="container jumbotron">
	<div class="row">
		<div class="col-12 text-center tittle mx-auto mt-5 mb-3">
			<h1>UM JOGO NÃO É NADA SEM A SUA COMUNIDADE!</h1>
		</div>
		<div class="col-10 mx-auto descript">
			<p> Juntem-se a nós nessa caminhada para manter o melhor jogo de todos, Battlerite ♥.</p>
			<p>	Após sucessivos problemas com o jogo, além de quedas bruscas no número de players, os pouscos que restaram 
			estão tentando fazer o que podem para criar uma comunidade unida e acolhedora.</p>
			<p>Entre no nosso  <a href="http://discord.gg/bbFyk4d" target="_blank">Discord</a>  e  Whatsapp para ver mais novidades.</p>
		</div>
	</div>

</section>

<style>
	h1{
		font-family: 'Brickton Regular';
	}
	@font-face {
		font-family: 'Brickton Regular';
		src: local('Brickton Regular'), local('Brickton Regular'), url("./fonts/Brickton Regular") format('otf');
	}
	/* .descript{
		padding-right: 4rem;
		padding-left: 4rem;
	} */
</style>