<script>
  import { reportStore } from "../stores/reportStore";
  import { userStore } from "../stores/userStore";


  let teamA, teamB, problem, team;
  let fetchURL = "http://localhost:8081";
  $: {console.log($reportStore.teams);}

  async function report() {
    try {
      if(problem !== "Nenhum problema"){
        alert(problem);
      }
      else if(teamA === "5" && teamB === "5"){alert("Erro nos dados! Apenas um time pode vencer 5 rounds!");}
      else if(teamA === "0" && teamB === "0"){alert("Erro nos dados! Um time precisa vencer 5 rounds!");}
      else{
        if($userStore.name === $reportStore.teams[0] ||$userStore.name === $reportStore.teams[1] ||$userStore.name === $reportStore.teams[2]){
          team = "A";
        } else { team = "B"; }
        const login = await fetch(fetchURL + '/match/result', {
        method: 'PATCH',
        headers: {'Accept': 'application/json','Content-Type': 'application/json'},
        body: JSON.stringify({
          team: team,
          preresult: [teamA, teamB],
          problem: problem,
          id: $reportStore.id,
          player: $userStore.name
          })
        })
        const result = await login.json();
        console.log(result);

      }

    } catch (error) {
      throw {error};
    }
  }
</script>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"> Reportar Resultado </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span> 
        </button>
      </div>
      <div class="modal-body">
        <form on:submit|preventDefault={report} class="mx-auto">
          <div class="row">
            <div class="col-6">
              <h5 class="card-title">Time A</h5>
              <select bind:value={teamA} class="form-control bg-primary text-light">
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option class="bg-success">5</option>
              </select>
            </div>
            <div class="col-6">
              <h5 class="card-title">Time B</h5>
              <select bind:value={teamB} class="form-control bg-danger text-light">
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
            <h5 class="mt-3">Reportar Problema</h5>
            <select bind:value={problem} class="form-control bg-warning mb-4">
              <option>Nenhum problema</option>
              <option>Player inativo</option>
              <option>Cancelar partida</option>
              <option>Outro problema</option>
            </select>
            <input type="submit" class="btn btn-success" value="Enviar Resultado" />
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <p>{$reportStore.teamA}
        <p>{$reportStore.teamB}
        <p>{$reportStore.preresult.teama}</p>
        <p>{$reportStore.preresult.teamb}</p>
      </div>
    </div>
  </div>
</div>
