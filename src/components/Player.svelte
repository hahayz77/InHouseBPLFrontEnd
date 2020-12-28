<script>
      export let player={name: "", points: "", wins: "", loses: "", id: "", winrate: ""};

</script>

<div class="modal fade" id="ModalPlayer" tabindex="-1" role="dialog" aria-labelledby="ModalPlayerLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="ModalPlayerLabel">{player.name}</h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <img class="d-block mr-auto rounded-pill py-3" src="/champions/{player.main}.jpg" alt="">
					<h4><i class="fas fa-award"></i> Pontos: {player.points}</h4>
					<h5><i class="fas fa-heart"></i> Main: {player.main}</h5>	
					<h5><i class="fas fa-arrow-circle-up"></i> Vitórias: {player.wins}</h5>
					<h5><i class="fas fa-arrow-circle-down"></i> Derrotas: {player.loses}</h5>
          <h5><i class="fas fa-percentage"></i> Winrate: {player.wins === 0 ? "0" : player.winrate}%</h5>
      </div>
    </div>
  </div>
</div>