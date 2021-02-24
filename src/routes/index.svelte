<script>
	import Hero from '../components/Hero.svelte'

</script>

<svelte:head>
	<title>Battlerite Brasil</title>
</svelte:head>

	<section>
		<Hero />
	</section>

	<section class="container-fluid">
		<div class="transition"></div>
	</section>

	<section class="container jumbotron">
		<div class="row">
		<div class="col-12">
			<img id="comunidadeImg" src="home/comunidade.png" alt="Comunidade Battlerite">
		</div>
			<div class="col-12">
			<h1 class="text-center">UM JOGO NÃO É NADA SEM A SUA COMUNIDADE!</h1>
				<div class="jumbotron py-0">
					<p>Após sucessivos problemas com o jogo, além de quedas bruscas no número de players, os pouscos que restaram 
					estão tentando fazer o que podem para criar uma comunidade unida e acolhedora.</p>
					<p>Junte-se a nós nessa caminhada para manter o melhor jogo de todos, <b>#Battlerite4Ever ♥.</b></p>
					<p> Entre no nosso  <a href="http://discord.gg/bbFyk4d" target="_blank"><i class="fab fa-discord"></i> Discord</a>  e <a href="https://chat.whatsapp.com/FJsUz9C9Q973arux32rVfq" target="_blank"><i class="fab fa-whatsapp"></i> Whatsapp</a> para somarmos forças.</p>
				</div>
			</div>
		</div>
	</section>

	<style>
		h1{
			margin-bottom: 3rem;
		}
		i{
			font-size: 1.5rem;
		}
		.transition{
			height: 100px;
			width: 100%;
			background: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
		}
		#comunidadeImg{
			max-width: 100%;
			object-fit: contain;
			margin-top: -100px;
			margin-bottom: 3rem;
		}
	</style>