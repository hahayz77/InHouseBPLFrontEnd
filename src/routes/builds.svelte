<script>
let champions = [
    {src: "champions/Alysia.jpg", alt: "Alysia", rites: ["Alysia1","Alysia2","Alysia3"], riteT: ["Alysia Tank", "Alysia Freeze", "Build3"]},
    {src: "champions/Ashka.jpg", alt: "Ashka", rites: ["Ashka1","Ashka2","Ashka3"], riteT: ["Ashka ADC", "Ashka Survivor", "Build3"]},
    {src: "champions/Bakko.jpg", alt: "Bakko", rites: ["Bakko1","Bakko2","Bakko3"], riteT: ["Bakko Tank", "Bakko Pedrada", "Build3"]}

];

let selectedRites = [];
let selectedRiteT = [];

</script>

<svelte:head>
	<title>Builds</title>
</svelte:head>

<section class="container jumbotron">
    <div class="row">
        <div class="col-12">
          <div class="jumbotron">
            <h1 class="text-center">Em construção....</h1>
          </div>
        </div>
    </div>
</section>

<!-- <section class="container">
    <div class="row">
        <div class="col">
       {#each champions as { src, alt, rites, riteT }, i }
	   	<a href={""} data-toggle="modal" data-target="#exampleModal">
		<img class="champs" src="{src}" alt="{alt}">
		</a>            
        {/each}
       </div>
       <div class="col-12">
            {#each selectedRiteT as Builds, i}
                <h1>{Builds}</h1>
                <h1>{selectedRites[i]}</h1>
            {/each}
       </div>
    </div>
</section>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>{champions[0].alt}</p>
      </div>
    </div>
  </div>
</div> -->


<style>
    section{
      height: 70vh;
    }
    /* img, .champs{
        height: 100px;
        width: auto;
        padding: 10px;
    } */
    /* img, .champs :hover{
        transform: scale(1.2);
    } */

</style>



