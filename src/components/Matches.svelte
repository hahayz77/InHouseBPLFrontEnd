<script>
	import Bans from '../components/Bans.svelte';
    import { matchesStore } from '../stores/matchesStore';
	import { onMount } from 'svelte';	

    var timeResult = [];
    var matchBans = [];

    onMount(async () => {

        for(var i in  $matchesStore){
            var d = new Date(await $matchesStore[i].time);
            timeResult[i] = d.toLocaleDateString() + " " + d.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        }
        
    })

    function picksMatch(picks){
        goto("/match");
    }

</script>

<section class="container">
    {#each $matchesStore ? $matchesStore : [] as match, i}
        <div class="row align-items-center justify-content-center mb-0">
            <div class="col-6 mx-auto infos text-center">
                <span>{match.randomMap} {timeResult[i]}</span>
            </div>
        </div>
        <div class="row align-items-center justify-content-center">
            <span class="btn btn-warning text-center mb-0 px-4 mx-3" on:click={picksMatch(match._id)}><i class="fas fa-chess-king"></i> PICKS </span>
            <span class="btn btn-danger text-center mb-0 px-4 mx-3" on:click={()=> {matchBans = match.event.bans}} data-toggle="modal" data-target="#ModalBans"><i class="fas fa-ban"></i> BANS </span>
        </div>
        <div class="row align-items-center justify-content-center mb-3 mt-0">
            <div class="col-4">
                <div class="players row text-center">
                    <span class="player col-12">{match.teams[0]}</span>
                    <span class="player col-12">{match.teams[1]}</span>
                    <span class="player col-12">{match.teams[2]}</span>
                </div>
            </div>
            
            <div class="col-2 alert-danger ">
                <div class="row">
                    <span class="result col-12 text-center"> X </span>
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

</section>


<Bans matchBans={matchBans}/>


<style>
    .players{
        margin-top: 5%;
        margin-bottom: 5%;
        padding: auto 5px;
        font-size: 1rem;
        border-radius: 5px;
        border-top: 1px solid #ffe69b;
        border-bottom: 1px solid #ffe69b;
    }
    .result{
        font-size: 2rem;
    }
    .infos{
        border-top: 1px solid #ffe69b;
        border-radius: 5px;
    }
    .infos span{
        font-size: 1rem;
        color: #ffe69b;

    }
    .player{
        color: rgb(43, 43, 43);
        background: #f38a34;
        font-size: 1.2rem;
        padding: auto 1rem;
        overflow: hidden;
        margin: 2px auto;
        border-radius: 10px;
    }
    .alert-danger{
        color: #692c00;
        background-color: #ffe69b;
        border-radius: 10px 0 10px 0;
    }
    .btn{
		border-radius: 25px;
		margin-top: 0.8rem;
		margin-bottom: 0.8rem;
        font-size: 14px;
	}
    .btn i{
        color: rgb(255, 125, 75);
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
        .btn {
            font-size: 10px;
            padding: 5px 0px;
        }
    }
    @media (min-width: 768px) and (max-width: 991.98px){
        .result{
            font-size: 1.5rem;
        }
    }
</style>