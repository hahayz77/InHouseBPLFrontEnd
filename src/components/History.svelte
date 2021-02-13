<script>

    export let historic = [];  
    export let timeRes = [];  

</script>

<div class="modal fade bd-example-modal-lg" id="ModalHistory" tabindex="-1" role="dialog" aria-labelledby="ModalHistoryLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="ModalHistoryLabel">Histórico</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
            {#each historic ? historic : [] as match, i}
                <div class="row align-items-center justify-content-center mb-0">
                    <div class="col-6 mx-auto infos text-center">
                        <span>{match.randomMap}</span>
                        <span>{timeRes[i]}</span>
                    </div>
                </div>
                <div class="row align-items-center justify-content-center mb-3">
                    <div class="col-4">
                        <div class="players row text-center">
                            <span class="player col-12">{match.teams[0]}</span>
                            <span class="player col-12">{match.teams[1]}</span>
                            <span class="player col-12">{match.teams[2]}</span>
                        </div>
                    </div>
                    
                    <div class="col-2 alert-danger ">
                        <div class="row">
                            <span class="result col-12 text-center">{match.result[0]} x {match.result[1]}</span>
                        </div>
                        <div class="row">
                            <span class="report col-12 text-center">{match.reported === "false" ? "" : "Partida Reportada!" }</span>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="players row text-center">
                            <span class="player col-12">{match.teams[3]}</span>
                            <span class="player col-12">{match.teams[4]}</span>
                            <span class="player col-12">{match.teams[5]}</span>
                        </div>
                    </div>
                </div>
            {/each}
      </div>
    </div>
  </div>
</div>


<style>
    .players{
        margin-top: 5%;
        margin-bottom: 5%;
        padding: auto 5px;
        font-size: 1rem;
        border-radius: 5px;
        border-top: 1px solid blueviolet;
        border-bottom: 1px solid blueviolet;
    }
    .result{
        font-size: 2rem;
    }
    .infos{
        border-top: 1px solid #721c24;
        border-bottom: 1px solid #721c24;
        border-radius: 5px;
        background-color: #f8d7dab2;
    }
    .infos span{
        font-size: 1rem;
        color: #721c24;

    }
    .player{
        background: rgba(167, 152, 255, 0.7);
        font-size: 1.2rem;
        padding: auto 1rem;
        overflow: hidden;
        margin: 2px auto;
        border-radius: 10px;
    }
    @media (max-width: 767.98px) { 
        .result{
            font-size: .9rem;
            padding: 1rem 0;
        }
        .player{
            font-size: .8rem;
        }
        .report{
            font-size: 0.5rem;
            padding: 0 0 5px 0;
        }
        .infos{
            width: 80%;
        }
        .infos span{
            font-size: .8rem;
        }
    }
    @media (min-width: 768px) and (max-width: 991.98px){
        .result{
            font-size: 1.5rem;
        }
    }
</style>