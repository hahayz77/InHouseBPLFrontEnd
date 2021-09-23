<script>
  import { matchesStore } from '../stores/matchesStore';
	import { userStore } from '../stores/userStore';
	import { reportStore } from '../stores/reportStore';
  import { rankingStore } from '../stores/rankingStore';

  export let rankings = [];
  export let loading;

    let main = "Jade";
    let statusresponse;
    let iRanking = 0;
    let rankingSelect = [];
    let rankingTitle = "";
    let rankingDate = '';
    let selectedPlayer;
    
    let offUser = {
      menssagem: '', email: '', id: '', _id: '', name: 'none', main: 'Raigon', points: 0, wins: 0, loses: 0
    }

    let offReport = {
    status: "",
    mensagem: "",
    id: "",
    teams: [0,0,0,0,0,0],
    reported: "",
    preresult: {
        teama: "",
        teamb: ""
    } 
}
    function searchRanking(){
        rankingTitle = rankings[iRanking].name;
        rankingDate = rankings[iRanking].date;
        return rankingSelect = rankings[iRanking].ranking;        
    }

    function winRateCalculate(wins, loses){
      let winrate = 0;
      if(wins !== 0 || loses !== 0){
        winrate = (wins / (wins + loses)) * 100;
				winrate = parseFloat(winrate.toFixed(1));
      }
      return winrate;
    }

</script>

<div class="modal fade" id="ModalRanking" tabindex="-1" role="dialog" aria-labelledby="ModalRankingLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        {#if loading === false}
        <h4>Selecione a Temporada:</h4>
        <select class="form-control" bind:value={iRanking}>
            {#each rankings as {name, date}, id}
              <option value={id}>{name}</option>
            {/each}
        </select>
            <button type="button" class="btn btn-primary my-3" on:click={searchRanking}><i class="fas fa-check"></i> Selecionar</button>
            <hr>
            <h4>{rankingTitle}</h4>
            <h5>{rankingDate}</h5>
            {#each rankingSelect as {name, main, points, wins, loses}, id}
            <div class="item-ranking">
                    <span class="rank">{id+1}</span>
                    <img src="/champions/{main}.jpg" alt="{main}" class="rounded-pill">
                    <span class="name">{name}</span>   
                <span class="points float-right">{points}</span>
                <div class="row align-items-center justify-content-around details">
                  <span class="detailItem">Pontos: {points}</span>
                  <span class="detailItem">Vitórias: {wins}</span>
                  <span class="detailItem">Derrotas: {loses}</span>
                  <span class="detailItem">Winrate: {winRateCalculate(wins, loses)}%</span>
                </div>
            </div>
            {/each}
            {:else}
                <div class="text-center my-3">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            {/if}
      </div>
    </div>
  </div>
</div>

<style>
	.modal-body{
		max-height: 470px;
		overflow: auto;
	}
	.item-ranking{
		margin: 1rem auto;
		font-size: 18px;
    border-top: 1px solid gray;
    border-radius: 5px;
    padding-top: 15px;
	}
	.item-ranking img{
		height: 50px;
	}
	.item-ranking span{
		line-height: 2.8rem;
  }
  .details{
    font-size: 16px;
    color: lightslategray;
  }
  @media (max-width: 767.98px) { 
		.item-ranking .name{
			font-size: 16px;
		}
		.item-ranking img{
			height: 35px;
		}
		.item-ranking .points{
			line-height: 2;
		}
		.item-ranking span{
		  line-height: 2rem;
		}
    .details{
      font-size: 14px;
    }
	}
  @media (max-width: 767.98px) { 
    .details{
      font-size: 10px;
    }
  }
</style>