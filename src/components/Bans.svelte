<script>
    import { matchesStore } from '../stores/matchesStore';
    export let matchBans = [];

</script>

<div class="modal fade bd-example-modal-lg" id="ModalBans" tabindex="-1" role="dialog" aria-labelledby="ModalBansLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="ModalHistoryLabel">Bans</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
            <div class="row align-items-center justify-content-center mb-0">
              <div class="col-12">
                <h2 class="text-center">TIME 1  x  TIME 2</h2>
              </div>
              <div class="col-10 mx-auto infos text-center">
                <h4>MELEE</h4>
                  <div class="row mb-3">
                    <div class="col-12">
                      <img src="/champions/{matchBans[0]}.jpg" alt="{matchBans[0]}" class="rounded-pill mx-3">
                      <i class="fa fa-ban"></i><span class="d-inline">
                      <img src="/champions/{matchBans[2]}.jpg" alt="{matchBans[2]}" class="rounded-pill mx-3">
                    </div>
                  </div>
                  <h4>RANGED</h4>
                  <div class="row mb-3">
                    <div class="col-12">
                      <img src="/champions/{matchBans[3]}.jpg" alt="{matchBans[3]}" class="rounded-pill mx-3">
                      <i class="fa fa-ban"></i><span class="d-inline">
                      <img src="/champions/{matchBans[5]}.jpg" alt="{matchBans[5]}" class="rounded-pill mx-3">
                    </div>
                  </div>
                  <h4>SUPPORT</h4>
                  <div class="row">
                    <div class="col-12">
                      <img src="/champions/{matchBans[6]}.jpg" alt="{matchBans[6]}" class="rounded-pill mx-3">
                      <i class="fa fa-ban"></i><span class="d-inline">
                      <img src="/champions/{matchBans[8]}.jpg" alt="{matchBans[8]}" class="rounded-pill mx-3">
                    </div>
                  </div>
              </div>
            </div>
      </div>
    </div>
  </div>
</div>


<style>
  img{
		height: 70px;
    margin: 15px 10px;
	}
  i{
    font-size: 40px;
  }
  @media (max-width: 767.98px) { 
    img{  
      margin: 10px 15px;
      height: 50px;
    }
  }
  @media (max-width: 424.98px) { 
    img{  
      margin: 2px 5px;
      height: 35px;
    }
    i{
      font-size: 20px;
    }
  }
</style>