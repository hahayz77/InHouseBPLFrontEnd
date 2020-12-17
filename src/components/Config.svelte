<script>
  import { goto } from '@sapper/app';

  import { matchesStore } from '../stores/matchesStore';
	import { userStore } from '../stores/userStore';
	import { reportStore } from '../stores/reportStore';
  import { rankingStore } from '../stores/rankingStore';

    let main;
    let statusresponse;
    let fetchURL = "https://app-inhouseleagueblp.herokuapp.com";
    
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


    async function mainChar(){
        const fetchUpdate = await fetch( fetchURL + "/user/main/" + $userStore.id + "/" + main)
        const result = await fetchUpdate.json();
        statusresponse = result.status;
        if(statusresponse === "mainchampionok"){
            $userStore.main = main;
        }
        else{
            alert(error);
        }
    }
    async function logOff(){
        let selected = confirm("Tem certeza que deseja sair?");
        if(selected === true){
          userStore.update(listaAtual => { return offUser });
          reportStore.update(listaAtual => { return offReport });
          matchesStore.update(listaAtual => {return undefined});
          rankingStore.update(listaAtual => {return undefined});

          localStorage.removeItem('userStore');

          location.reload();
        }
    }
</script>

<div class="modal fade" id="ModalConfig" tabindex="-1" role="dialog" aria-labelledby="ModalConfigLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="ModalConfigLabel">Configurações</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <h4>Selecione o seu Campeão:</h4>
        <select class="form-control" bind:value={main}>
            <option value="Alysia">Alysia</option>
            <option value="Ashka">Ashka</option>
            <option value="Bakko">Bakko</option>
            <option value="Blossom">Blossom</option>
            <option value="Croak">Croak</option>
            <option value="Destiny">Destiny</option>
            <option value="Ezmo">Ezmo</option>
            <option value="Freya">Freya</option>
            <option value="Iva">Iva</option>
            <option value="Jade">Jade</option>
            <option value="Jamila">Jamila</option>
            <option value="Jumong">Jumong</option>
            <option value="Lucie">Lucie</option>
            <option value="Oldur">Oldur</option>
            <option value="Pearl">Pearl</option>
            <option value="Pestilus">Pestilus</option>
            <option value="Poloma">Poloma</option>
            <option value="Raigon">Raigon</option>
            <option value="Rook">Rook</option>
            <option value="Ruh-Kaan">Ruh-Kaan</option>
            <option value="Shen-Rao">Shen-Rao</option>
            <option value="Shifu">Shifu</option>
            <option value="Sirius">Sirius</option>
            <option value="Taya">Taya</option>
            <option value="Thorn">Thorn</option>
            <option value="Ulric">Ulric</option>
            <option value="Varesh">Varesh</option>
            <option value="Zander">Zander</option>
        </select>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" on:click={logOff}>Log Out</button>
        <button type="button" class="btn btn-primary" on:click={mainChar}>Salvar Mudanças</button>
      </div>
    </div>
  </div>
</div>