<script>
  import { fade } from 'svelte/transition';
  export let error; 
</script>

<div transition:fade class="alert alert-danger p-3 mx-auto my-0" role="alert">
<i class="fa fa-ban"></i><span class="d-inline">{error}</span>
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