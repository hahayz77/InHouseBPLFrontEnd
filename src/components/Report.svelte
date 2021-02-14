<script>
  import { reportStore } from "../stores/reportStore";
  import { userStore } from "../stores/userStore";
  import { matchesStore } from "../stores/matchesStore";
  import Status from "../components/Status.svelte";

  // export let myteam = "1";
  let teamA, teamB, problem, team;
  let response;
  let statusresponse;

  // let fetchURL = "http://localhost:8081";
  let fetchURL = "https://projeto.br-rgt.net/";


  async function report(userValue, reportValue) {
    try {
      
      let report = await $reportStore;
      let player = await $userStore.name;

      if (problem !== "Nenhum problema") {
        const reportProblem = await fetch(fetchURL + '/match/problem', {
				method: 'POST',
				headers: {'Accept': 'application/json','Content-Type': 'application/json'},
				body: JSON.stringify({player: player, report: report, problem: problem})
			})
			const result = await reportProblem.json();
      console.log(result);
      
        if (result.status !== undefined) {
          statusresponse = result.mensagem;
          await setTimeout(() => { statusresponse = undefined }, 3000)
        }
        update();
        $reportStore.preresult.teama = '';
        $reportStore.preresult.teamb = ''; 
        problem = "Nenhum problema";

      } else if (teamA === "5" && teamB === "5") {
        alert("Erro nos dados! Apenas um time pode vencer 5 rounds!");
      } else if (teamA === "0" && teamB === "0") {
        alert("Erro nos dados! Um dos time precisa vencer 5 rounds!");
      } else if (teamA !== "5" && teamB !== "5") {
        alert("Erro nos dados! Um dos times precisa vencer 5 rounds!");
      } else {
        if (userValue.name === reportValue.teams[0] || userValue.name === reportValue.teams[1] || userValue.name === reportValue.teams[2]) {
          team = "A";
        } else {
          team = "B";
        }
        const fetchMatch = await fetch(fetchURL + "/match/result", {
          method: "PATCH",
          headers: { Accept: "application/json", "Content-Type": "application/json"},
          body: JSON.stringify({
            team: team,
            preresult: [teamA, teamB],
            problem: problem,
            id: reportValue.id,
            player: userValue.name
          })
        })
        const result = await fetchMatch.json();

        if (result.status !== undefined) {
          statusresponse = result.mensagem;
          await setTimeout(() => { statusresponse = undefined }, 3000)
        }
        update();
        $reportStore.preresult.teama = '';
        $reportStore.preresult.teamb = '';  
        problem = "Nenhum problema";
        teamA = 0;
        teamB = 0;
      }
      // Fetch Update para que todos recebam Update da partida neste local em conflito com result.update
      return;
    } catch (error) {
      throw { error };
      return;
    }
  }

  async function update(){
    try {
      const fetchUpdate = await fetch(fetchURL + "/match/update/" + $userStore.name )
      const result = await fetchUpdate.json();
      matchesStore.update(listaAtual => { return result.matches })
      userStore.update(listaAtual => { return result.user })
    } catch (error) {
      console.log(error);
    }
  }
</script>

{#if statusresponse !== undefined}
  <Status status={statusresponse} />
{/if}


<div class="modal fade" id="reportModal" tabindex="-1" role="dialog" aria-labelledby="reportModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="reportModalLabel">Reportar Resultado</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      {#if $reportStore.preresult.teama === '' || $reportStore.preresult.teamb === ''}
      <div class="mx-auto py-5 my-5"><h4>Nada para reportar!</h4></div>
      {:else}
      <div class="modal-body">
        <form on:submit|preventDefault={() => {report($userStore, $reportStore)}} class="mx-auto">
          <div class="row">
            <div class="col-6">
              <h5 class="card-title">Time 1</h5>
              <p class="players">{$reportStore.teams[0]}</p>
              <p class="players">{$reportStore.teams[1]}</p>
              <p class="players">{$reportStore.teams[2]}</p>
              <select
                bind:value={teamA}
                class="form-control bg-primary text-light">
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option class="bg-success">5</option>
              </select>
            </div>
            <div class="col-6">
              <h5 class="card-title">Time 2</h5>
              <p class="players">{$reportStore.teams[3]}</p>
              <p class="players">{$reportStore.teams[4]}</p>
              <p class="players">{$reportStore.teams[5]}</p>
              <select
                bind:value={teamB}
                class="form-control bg-danger text-light">
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option class="bg-success">5</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col-12 mx-auto">
              <h5 class="mt-3">Reportar Problema</h5>
              <select bind:value={problem} class="form-control bg-warning mb-4">
                <option>Nenhum problema</option>
                <option>Player inativo</option>
                <option>Cancelar partida</option>
                <option>Outro problema</option>
              </select>
              <input type="submit" class="btn btn-success" value="Enviar Resultado"/>
            </div>
          </div>
        </form>
      </div>
      <!-- <div class="modal-footer">
        <p>Seu time é o time {myteam} </p>
      </div> -->
      <div class="modal-footer">
        <p>Resultados Reportados -> </p>
        <p>Time 1 ({$reportStore.preresult.teama[0] + " x " + $reportStore.preresult.teama[1]})</p>
        <p>Time 2 ({$reportStore.preresult.teamb[0] + " x " + $reportStore.preresult.teamb[1]})</p>
      </div>
     {/if}
    </div>
  </div>
</div>

<style>
    .players{
      font-size: 16px;
      padding-left: 0.2rem;
      padding-right: 0.2rem;
      margin-bottom: 5px;
      overflow: hidden;
      border: 1px solid #8080802e;
    }
    
</style>