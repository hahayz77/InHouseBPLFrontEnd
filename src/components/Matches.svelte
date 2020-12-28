<script>
import { matchesStore } from '../stores/matchesStore'

</script>

<section class="container">
    {#each $matchesStore ? $matchesStore : [] as match, i}
        <div class="row align-items-center justify-content-center mb-3">
            <div class="col-4">
                <div class="players row text-center">
                    <span class="player col-12">{match.teams[0].name}</span>
                    <span class="player col-12">{match.teams[1].name}</span>
                    <span class="player col-12">{match.teams[2].name}</span>
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
                    <span class="player col-12">{match.teams[3].name}</span>
                    <span class="player col-12">{match.teams[4].name}</span>
                    <span class="player col-12">{match.teams[5].name}</span>
                </div>
            </div>
        </div>
    {/each}

</section>


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
            font-size: 1rem;
            padding: 1rem 0;
        }
        .player{
            font-size: 1rem;
        }
        .report{
            font-size: 0.5rem;
            padding: 0 0 5px 0;
        }
    }
    @media (min-width: 768px) and (max-width: 991.98px){
        .result{
            font-size: 1.5rem;
        }
    }
</style>