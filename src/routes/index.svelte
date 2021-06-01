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
			<img id="comunidadeImg" src="home/comunidade.png" alt="Comunidade Battlerite" 
			data-aos="fade-up" data-aos-delay="100" data-aos-easing="ease-out">
		</div>
			<div class="col-12">
			<h1 class="text-center" data-aos="fade-up" data-aos-delay="200" data-aos-easing="ease-out">UM JOGO NÃO É NADA SEM A SUA COMUNIDADE!</h1>
				<div class="jumbotron py-0" data-aos="fade-up" data-aos-delay="300" data-aos-easing="ease-out">
					<p>Após sucessivos problemas com o jogo, além de quedas bruscas no número de players, os poucos que restaram 
					estão tentando fazer o que podem para criar uma comunidade unida e acolhedora.</p>
					<p>Junte-se a nós nessa caminhada para manter o melhor jogo de todos, <b>#Battlerite4Ever ♥.</b></p>
				</div>
				<div class="row justify-content-around">
					<div class="col-12 col-md-6 d-flex justify-content-center justify-content-md-end">
						<a href="http://discord.gg/bbFyk4d" target="_blank">
						<button class="btn btn-discord rounded-pill" data-aos="fade-right" data-aos-delay="100" data-aos-easing="ease-out">
						<i class="fab fa-discord px-2"></i> Discord </button></a>
					</div>
					<div class="col-12 col-md-6 d-flex justify-content-center justify-content-md-start">
						<a href="https://chat.whatsapp.com/FJsUz9C9Q973arux32rVfq" target="_blank">
						<button class="btn btn-whatsapp rounded-pill" data-aos="fade-left" data-aos-delay="200" data-aos-easing="ease-out">
						<i class="fab fa-whatsapp px-2"></i> Whatsapp </button></a>
					</div>
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
			vertical-align: middle;
		}
		.transition{
			height: 100px;
			width: 100%;
			background: linear-gradient(to bottom, rgb(255, 255, 255), rgba(0,0,0,0));
		}
		#comunidadeImg{
			max-width: 100%;
			object-fit: contain;
			margin-top: -100px;
			margin-bottom: 3rem;
		}
		.btn{
			transition: all 400ms;
		}
		.btn-discord{
			background-color: #7289da;
		}
		.btn-whatsapp{
			background-color: #1ebea5;
		}
		.btn-whatsapp, .btn-discord{
			padding: .8rem 2rem;
			color: white;
			margin: 2rem 0;
		}
		.btn:hover{
			transition: all 600ms;
			transform: scale(1.05);
			text-decoration: none;
		}

		@media (max-width: 768px) {
			
			.btn-whatsapp, .btn-discord{
				margin: 1rem 0;
			}	
		}
	</style>