<script>
let champions = [
    {src: "champions/Alysia.jpg", alt: "Alysia", rites: ["Alysia1","Alysia2","Alysia3"], riteT: ["Alysia Tank", "Alysia Freeze", "Build3"]},
    {src: "champions/Ashka.jpg", alt: "Ashka", rites: ["Ashka1","Ashka2","Ashka3"], riteT: ["Ashka ADC", "Ashka Survivor", "Build3"]},
    {src: "champions/Bakko.jpg", alt: "Bakko", rites: ["Bakko1","Bakko2","Bakko3"], riteT: ["Bakko Tank", "Bakko Pedrada", "Build3"]}

];

let selectedRites = [];
let selectedRiteT = [];

</script>

<section class="container">
    <div class="row">
        <div class="col">
       {#each champions as { src, alt, rites, riteT }, i }
            <img class="champs" src="{src}" alt="{alt}" on:click={()=> {selectedRites = rites; selectedRiteT = riteT;}}>
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


<style>
    img, .champs{
        height: 100px;
        width: auto;
        padding: 10px;
    }
    /* img, .champs :hover{
        transform: scale(1.2);
    } */

</style>