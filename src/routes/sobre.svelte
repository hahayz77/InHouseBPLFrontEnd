
<svelte:head>
	<title>Sobre</title>
</svelte:head>

<section class="container jumbotron">
    <div class="row">
        <div class="col-12">
          <div class="jumbotron">
            <h1 class="text-center">Sobre</h1>
          </div>
        </div>
		<img id="proImg" src="imgs/pro.png" alt="Contribuidores">
		<div class="col-12">
			<p>Foram idealizadores do projeto e ajudaram com toda boa vontade e filantropia os que vão ficar na história desse jogo e de seus poucos players que restaram....</p>
			<ul>
				<li> <img src="champions/Ezmo.jpg" class="rounded-pill" alt=""> Crosleft "O Ezmo do Matchmaking"</li>
				<li> <img src="champions/Zander.jpg" class="rounded-pill" alt=""> Dward0 "O Melhor Streamer de Battlerite"</li>
				<li> <img src="champions/Freya.jpg" class="rounded-pill" alt=""> Fuzarker "O Programado e Coach Freya"</li>
				<li> <img src="champions/Poloma.jpg" class="rounded-pill" alt=""> Ivanbi "O Poloma do Whatsapp"</li>
				<li> <img src="champions/Croak.jpg" class="rounded-pill" alt=""> Lreo "O ex-Sapo Cyberpunk"</li>
				<li> <img src="champions/Sirius.jpg" class="rounded-pill" alt=""> Surianda "O Prodígio ex-Main Sirius"</li>
				<li> <img src="champions/Oldur.jpg" class="rounded-pill" alt=""> ThiTsu "O Pro-Player Oldur Japonês"</li>
				<li> <img src="champions/Ruh-Kaan.jpg" class="rounded-pill" alt=""> Vinicineo "O Ruh Kahn Rapper"</li>
				<li> <img src="champions/Jumong.jpg" class="rounded-pill" alt=""> Yasuda "O Coach Jumong Japonês"</li>
				<li> <img src="champions/Ulric.jpg" class="rounded-pill" alt=""> Zartola "O Ulric das Planilhas"</li>
				E eu....<br>
				<li> <img src="champions/Pestilus.jpg" class="rounded-pill" alt=""> HaHayz77 "O Ex-Pestilous ainda Lagado"</li>
			</ul>
 			Agradeço a todos pela força! #Battlerite4Ever ♥
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
	}
	li img{
		height: 50px;
		padding: 2px;
	}
	@media(max-width: 768px){
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
	@media(max-width: 320px){
		li{
			font-size: 12px;
		}
		li img{
			height: 30px;
		}
	}
	@media(max-width: 425px){
		li{
			font-size: 14px;
		}
		#proImg{
			margin-top: -30px;
		}
	}
</style>