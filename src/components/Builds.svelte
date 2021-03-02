<script>
    export let champ;

</script>

    {#if champ[0].name !== undefined}
        <hr>
        {#each champ as {name, title, rites, description, votes, votesCount}, id}
        <div class="row my-2">
            <div class="col-12">
                <h2>{title}<button class="btn btn-light float-right"><i class="fas fa-thumbs-up"></i> 
                {votesCount} {votesCount === 1 ? "Voto" : "Votos"}</button></h2>
            </div>
            <div class="col-12 d-flex justify-content-center">
                <img src="rites/Bakko/{rites[0]}.png" alt="">
                <img src="rites/Bakko/{rites[1]}.png" alt="">
                <img src="rites/Bakko/{rites[2]}.png" alt="">
                <img src="rites/Bakko/{rites[3]}.png" alt="">  
                <img src="rites/Bakko/{rites[4]}.png" alt="">
            </div>
            <div class="col-12 d-flex justify-content-center my-3">
                <button class="btn btn-light option"><h4><i class="fas fa-thumbs-up"></i> Votar</h4></button>
                <button class="btn btn-light option"><h4><i class="fas fa-thumbs-up"></i> Detalhes</h4></button>
                <button class="btn btn-light option"><h4><i class="fas fa-thumbs-up"></i> Editar</h4></button>
            </div>
            <div class="col-12">
                <button class="btn btn-primary">#3v3</button>
                <button class="btn btn-primary">#2v2</button>
                <button class="btn btn-danger">#Ofensivo</button>
                <button class="btn btn-danger">#Defensivo</button>
                <button class="btn btn-danger">#Equilibrado</button>
                <button class="btn btn-warning">#Controle</button>
                <button class="btn btn-warning">#Passivas</button>
                <button class="btn btn-warning">#Cura</button>
                <button class="btn btn-warning">#Ult</button>
            </div>
        </div>
        <hr>
        {/each}
    {:else}
        <p>select a champion</p>
    {/if}


<style>
    img{
        max-width: 25%;
        object-fit: contain;
    }
    hr{
        height: 6px;
        background-image: radial-gradient(closest-side, gray, rgba(128, 128, 128, 0) 100%);
        position: relative;
        margin-top: 3rem;
        margin-bottom: 3rem;
    }
    hr:after{
        position: absolute;
        top: 50%;
        left: 50%;
        display: block;
        background-color: #bfbfbf;
        height: 12px;
        width: 12px;
        transform: rotate(45deg);
        margin-top: -10px;
        margin-left: -10px;
        border-radius: 4px 0;
        border: 4px solid rgba(255, 255, 255, 0.35);
        background-clip: padding-box;
        box-shadow: -10px 10px 0 rgba(255, 255, 255, 0.15), 10px -10px 0 rgba(255, 255, 255, 0.15);
    }
    button{
        border-radius: 20px;
        border: 0;
        cursor: default;
    }
</style>