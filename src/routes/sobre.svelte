
<svelte:head>
	<title>Sobre</title>
</svelte:head>

<section class="container jumbotron">
    <div class="row">
        <div class="col-12">
          <div class="jumbotron">
            <h1 class="text-center" data-aos="fade-up" data-aos-delay="100" data-aos-easing="ease-out">Sobre</h1>
          </div>
        </div>
		<img id="proImg" src="imgs/pro.png" alt="Contribuidores" data-aos="fade-up" data-aos-delay="200" data-aos-easing="ease-out">
		<div class="col-12" data-aos="fade-in" data-aos-delay="300" data-aos-easing="ease-out">
			<p>Foram idealizadores do projeto e ajudaram com toda boa vontade e filantropia os que vão ficar na história desse jogo e de seus poucos players que restaram....</p>
			<ul>
				<li> <img src="champions/Ezmo.jpg" class="rounded-pill" alt=""> Crosleft "O Ezmo do Matchmaking"</li>
				<li> <img src="champions/Zander.jpg" class="rounded-pill" alt=""> Dward0 "O Melhor Streamer de Battlerite"</li>
				<li> <img src="champions/Freya.jpg" class="rounded-pill" alt=""> Fuzarker "O Programador e Coach Freya"</li>
				<li> <img src="champions/Poloma.jpg" class="rounded-pill" alt=""> Ivanbi "O Poloma do Whatsapp"</li>
				<li> <img src="champions/Croak.jpg" class="rounded-pill" alt=""> Lreo "O ex-Sapo Cyberpunk"</li>
				<li> <img src="champions/Sirius.jpg" class="rounded-pill" alt=""> Surianda "O Prodígio ex-Main Sirius"</li>
				<li> <img src="champions/Oldur.jpg" class="rounded-pill" alt=""> ThiTsu "O Pro-Player Oldur Japonês"</li>
				<li> <img src="champions/Ruh-Kaan.jpg" class="rounded-pill" alt=""> Vinicineo "O Ruh Kahn Rapper"</li>
				<li> <img src="champions/Jumong.jpg" class="rounded-pill" alt=""> Yasuda "O Coach Jumong Japonês"</li>
				<li> <img src="champions/Ulric.jpg" class="rounded-pill" alt=""> Zartola "O Ulric das Planilhas"</li>
				<p>E eu....</p>
				<li> <img src="champions/Pestilus.jpg" class="rounded-pill" alt=""> HaHayz77 "O Ex-Pestilous ainda Lagado"</li>
			</ul>
 			<p>Agradeço a todos pela força! #Battlerite4Ever ♥</p>
		</div>
    </div>
</section>

<style>
	#proImg{
		max-width: 100%;
		object-fit: contain;
		margin-top: -100px;
		margin-bottom: 2rem;
	}
	li{
		list-style-type: none;
		color: white;
	}
	li img{
		height: 50px;
		padding: 2px;
	}
	@media (max-width: 767.98px) {
		#proImg{
			margin: 0;
		}
		ul{
			padding-left: 0;
		}
		li img{
			height: 40px;
		}
	}
	@media (min-width: 576px) and (max-width: 767.98px) {
		#proImg{
			margin-top: -30px;
		}
		li{
			font-size: 12px;
		}
		li img{
			height: 30px;
		}
	}
	@media (max-width: 575.98px){
		li{
			font-size: 12px;
		}
		#proImg{
			margin-top: -30px;
		}
	}
</style>