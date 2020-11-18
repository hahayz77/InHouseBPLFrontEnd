<script>
  import { fade } from 'svelte/transition';
  export let status; 
</script>

<div transition:fade class="alert alert-success p-3 mx-auto my-0" role="alert">
<i class="fa fa-ban"></i><span class="d-inline">{status}</span>
</div>

<style>
  .alert{
    position:fixed;
    bottom: 0;
    right: 0;
    text-align:center;
    z-index:100;
  }
  i{
    font-size: 50px;
  }

</style>