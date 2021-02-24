<script>
	import { slide } from 'svelte/transition';

</script>

<svelte:head>
	<title>Guia</title>
</svelte:head>

<section transtion:slide class="container jumbotron">
	<div class="row">
		<div class="col-12">
			<div class="jumbotron">
				<h1 class="text-center">Guia InHouse Reborn</h1>
			</div>
			<img id="guiaImg" src="imgs/guia.png" alt="Guia InHouse">
			<div class="accordion" id="accordionExample">
				<div class="card">
					<div class="card-header" id="headingOne">
					<h2 class="mb-0">
						<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
						O que é InHouse?
						</button>
					</h2>
					</div>

					<div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
						<div class="card-body">
							InHouse é um sistema de liga privado da nossa comunidade do Discord onde nossos membros podem entrar numa fila e disputar partidas customizadas. 
							Nesse sistema teremos um simulação de uma liga como a do próprio jogo e podemos assim ter nosso próprio ranking e, principalmente, uma maior organização das partidas customizadas.<br>
							<a href={""} data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">E como faço para participar?</a>
						</div>
					</div>
				</div>
				<div class="card">
					<div class="card-header" id="headingTwo">
					<h2 class="mb-0">
						<button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
						Como participar?
						</button>
					</h2>
					</div>
					<div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
						<div class="card-body">
							<b>1 -</b> Cria sua conta na sessão <a href="login">login</a> com o mesmo nick que você usa no jogo; <br>
							<b>2 -</b> Entre na fila no botão <input type="button" class="btn btn-success" value="Entrar na fila"> em <a href="user">usuário</a> e aguarde a formação da partida que será gerada automaticamente (sem Draft) quando houverem 6 jogadores; <br>
							<b>3 -</b> Use o canal <a href="https://discord.gg/Q2AwjtNZfa" target="_blank">#inhouse-reborn</a> do Discord para se comunicar com outros players; <br>
							<b>4 -</b> Entre na sala com o seu time e jogue a partida; <br>
							<b>5 -</b> Após o final da partida venha até o site novamente e <a href={""} data-toggle="collapse" data-target="#collapse5" aria-expanded="false" aria-controls="collapse5">reporte o resultado da partida</a> para receber seus <a href={""} data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">pontos no ranking</a>;
						</div>
					</div>
				</div>
				<div class="card">
					<div class="card-header" id="headingThree">
					<h2 class="mb-0">
						<button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
						Regras, configuração e ranking
						</button>
					</h2>
					</div>
					<div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
						<div class="card-body">
							<b>Regras da partida</b><br>
							As partidas precisam seguir o padrão de configurações atual mas com 5 rounds para vencer a partida (BO9). <br>
							Qualquer diferença na configuração da sala que não estiver de acordo com o padrão poderá ser <a href={""} data-toggle="collapse" data-target="#collapse4">reportado</a> e pode gerar punição para os envolvidos. <br>
							
							<br><b>Configurações da sala custom</b><br>
							Crie uma sala privada na aba custom do jogo e procure a opção para resetar configurações e só então configure para 5 rounds. <br>
							
							<br><b>Configurar main</b><br>
							Na sessão do <a href="user">Usuário</a>, na aba onde aparecerá o seu nick, clique em <i class="fas fa-cog text-dark"></i> para selecionar o seu main. <br>
							Quando o ranking for atualizado novamente o seu main será atualizado para todos. <br>

							<br><b>Sobre pontuação no ranking</b><br>
							A distribuição de pontos varia de acordo com o cálculo total de pontos dos times, o "peso" dos times, que poderá ir até 10 pontos. <br>
							Se o time A tiver mais pontos do que o time B e A ganhar de B então A ganhará menos pontos. Sendo assim, o time com menor "peso" sempre ganhara mais pontos do que o time com maior "peso". <br>
							Jogadores com pontos negativos tem redução na penalidade em 5 pontos sempre que perderem.<br>
							
							<br><b>Mapas</b><br>
							Os mapas gerados aleatoriamente não são obrigatórios para a partida.<br>

							<br><b>Logout</b><br>
							Clicando em <i class="fas fa-cog text-dark"></i> e logo em seguida no botão <button type="button" class="btn btn-danger">Log Out</button> <br>

						</div>
					</div>
				</div>
				<div class="card">
					<div class="card-header" id="heading4">
					<h2 class="mb-0">
						<button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
						Como reportar problemas?
						</button>
					</h2>
					</div>
					<div id="collapse4" class="collapse" aria-labelledby="heading4" data-parent="#accordionExample">
						<div class="card-body">
							<b>Problemas com o site, erros, dúvidas e sugestões</b><br>
							Problemas comuns podem ser reportados no próprio chat <a href="https://discord.gg/Q2AwjtNZfa" target="_blank">#inhouse-reborn</a> do Discord. <br>
							
							<br><b>Problemas com players</b><br>
							Outros problemas podem ser reportados diretamente a qualquer um ADM da comunidade do Discord ou diretamente ao meu Discord HaHay#1624; <br>
							
							<br><b>Problemas na partida</b><br>
							Se for algum <a href={""} data-toggle="collapse" data-target="#collapse5" aria-expanded="false" aria-controls="collapse5">problema durante a partida</a> como à ausência de algum player ou algum outro problema que impeça a inicialização ou continuação da partida poderá ser reportado como resultado final.
						</div>
					</div>
				</div>
				<div class="card">
					<div class="card-header" id="heading5">
					<h2 class="mb-0">
						<button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
						Como reportar o resultado da partida?
						</button>
					</h2>
					</div>
					<div id="collapse5" class="collapse" aria-labelledby="heading5" data-parent="#accordionExample">
						<div class="card-body">
						<b>Partida finalizada com sucesso</b><br>
						Quando a partida for finalizada clique no botão amarelo <input type="button" class="btn btn-warning" value="Reportar resultado"> para abrir a janela de "Reportar Resultado". <br>
						Então, um jogador de cada time deve reportar o resultado final selecionando a quantidade de rounds vencidos por cada time.<br>
						<b>Time 1 </b>
						<select class="form-control bg-primary inputResult text-light">
							<option>0</option>
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option class="bg-success">5</option>
						</select> 						
						<br><b>Time 2 </b> 
						<select class="form-control bg-danger inputResult text-light">
							<option>0</option>
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option class="bg-success">5</option>
						</select>
						<br>
						<br><b>Após informar o resultado...</b><br>
						Confirme o resultado clicando no botão <input type="button" class="btn btn-success" value="Enviar Resultado"/> <br>
						Aguarde o reporte do outro time. <br>
						Se os dois valores reportados estiverem corretos então o reporte será finalizado com sucesso e o jogo na área de "Partidas" irá desaparecer. Isso confirma o fim da partida e que você poderá entrar na fila novamente. <br>
						
						<br><b>Lembre-se de que...</b><br> 
						Deverão ser vencidos 5 rounds para finalizar a partida e <b>a opção "Reportar Problema" deve estar marcada como padrão em "Nenhum problema". </b><br>
						
						<br><b>Se houver erro no reporte?</b><br>
						Então os dois valores serão resetados e o reporte deverá ser feito novamente. <br>
						Lembre de verificar os valores no final da janela de "Reportar Resultados" para saber se alguém do seu time já reportou o resultado. <br>

						<br><b>Se duas ou mais pessoas reportarem?</b><br>
						Apenas o ultimo valor reportado será válido. <br>
						Bem abaixo, na janela de Reportar Resultado, estarão os resultados já reportados por cada time. <br>

						<br><b>Problemas antes ou durante a partida</b><br>
						Caso haja algum problema <strong>você e mais algum outro jogador, qualquer um, pode cancelar a partida escolhendo qualquer opção em amarelo na área "Reportar Problema"</strong>. Lembrando que esta opção exclui a partida por completo sem nenhuma punição para os participantes. <br>
						Com o <a href={""} data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">uso inadequado</a> do cancelamento das partidas o player responsável poderá ser banido.<br>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</section>

<style>
	.card{
		background-color: #ffffffd7;
	}
	.btn-link{
		color: black;
	}
	.inputResult{
		display: inline-flex;
		width: 10%;
	}
	.btn{
		border-radius: 25px;
		padding: .2rem .4rem;
	}
	#guiaImg{
		max-width: 100%;
		object-fit: contain;
		margin-top: -80px;
		margin-bottom: 2rem;
	}	
	@media(max-width: 767.98px){
		.inputResult{
		width: 30%;
		}
	}

</style>