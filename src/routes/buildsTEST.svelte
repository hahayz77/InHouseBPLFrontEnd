<script>
    import Builds from '../components/Builds.svelte';

    let roleSelected = 2;
    let melees = ["Bakko", "Croak", "Freya", "Jamila", "Raigon", "Rook", "Ruh-Kaan", "Shifu", "Thorn"];
    let supports = ["Blossom", "Lucie", "Oldur", "Pearl", "Pestilus", "Poloma", "Sirius", "Ulric", "Zander"];
    let rangeds = ["Alysia", "Ashka", "Destiny", "Ezmo", "Iva", "Jade", "Jumong", "Shen-Rao", "Taya", "Varesh"];

    let champSelected = 0;
    let champBuild;
    let championRitesSelected = "null";
    let resultMelee = [
        {
            name: "Bakko", title: "Shield Bakko", 
            rites: [1,2,3,4,5],
            description: "blablalbalblalbalbla", 
            votes: ["HaHayz77", "Fuzarker"],
            votesCount: 2
        },
        {
            name: "Bakko", title: "Shield Bakko2", 
            rites: [2,3,4,5,1],
            description: "blablalbalblalbalbla", 
            votes: ["HaHayz77", "Fuzarker"],
            votesCount: 2
        },
        {
            name: "Bakko", title: "Shield Bakko3", 
            rites: [5,4,3,2,2],
            description: "blablalbalblalbalbla", 
            votes: ["HaHayz77"],
            votesCount: 1
        }
    ];

    let resultSupport = [
        {
            name: "Blossom", title: "Shield Blossom1", 
            rites: [1,2,3,4,1],
            description: "blablalbalblalbalbla", 
            votes: ["HaHayz77"],
            votesCount: 1
        },
        {
            name: "Blossom", title: "Shield Blossom2", 
            rites: [5,4,3,2,2],
            description: "blablalbalblalbalbla", 
            votes: ["HaHayz77"],
            votesCount: 1
        }
    ]

    
    function selectedRole(){
        champSelected = undefined;
    }

    function selectedChamp(){
        console.log(roleSelected + "|" + champSelected);
        if(roleSelected === 1){
            championRitesSelected = resultMelee;
        }
        else if(roleSelected === 2){
            // championRitesSelected = supports[champSelected];
            championRitesSelected = resultSupport;
        }
        else{
            championRitesSelected = rangeds[champSelected];
        }
    }

  


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
            <h1 class="text-center">Builds</h1>
          </div>
          <img id="buildsImg" src="imgs/builds.png" alt="">
        </div>
    </div>

    <div class="row shields">
        <div class="col-12 d-flex justify-content-center">
            <div class="row">
                    <div class="col-4">
                        <input type="radio" id="roleMelee" bind:group={roleSelected} value={1} on:change={selectedRole}>
                        <label for="roleMelee">
                            <img src="class/melee.png" alt="Melee" class="{roleSelected == 1 ? "selected" : "deselected"}">
                            <h3 class="text-center">Melee</h3>
                        </label>
                    </div>
                    <div class="col-4">
                        <input type="radio" id="roleSupport" bind:group={roleSelected} value={2} on:change={selectedRole}>
                        <label for="roleSupport">
                            <img src="class/support.png" alt="Support" class="{roleSelected == 2 ? "selected" : "deselected"}">
                            <h3 class="text-center">Support</h3>
                        </label>
                    </div>
                    <div class="col-4">
                        <input type="radio" id="roleRanged" bind:group={roleSelected} value={3} on:change={selectedRole}>
                        <label for="roleRanged">
                            <img src="class/ranged.png" alt="Ranged" class="{roleSelected == 3 ? "selected" : "deselected"}">
                            <h3 class="text-center">Ranged</h3>
                        </label>
                    </div>
            </div>            
        </div>
    </div>

    <div class="container jumbotron">
        {#if roleSelected === 1}
        <div class="row d-flex justify-content-center champions">
            {#each melees as melee, id}
                <input type="radio" id="melee{id}" bind:group={champSelected} value={id} on:change={selectedChamp}>
                <label for="melee{id}">
                    <img src="champions/{melee}.jpg" alt="{melee}" class="{champSelected == id ? "selected" : "deselected"}">
                </label>
            {/each}
        </div>
        {:else if roleSelected === 2}
        <div class="row d-flex justify-content-center champions">
            {#each supports as support, id}
                <input type="radio" id="support{id}" bind:group={champSelected} value={id} on:change={selectedChamp}>
                <label for="support{id}">
                    <img src="champions/{support}.jpg" alt="{support}" class="{champSelected == id ? "selected" : "deselected"}">
                </label>
            {/each}
        </div>
        {:else if roleSelected === 3}
        <div class="row d-flex justify-content-center champions">
            {#each rangeds as ranged, id}
                <input type="radio" id="ranged{id}" bind:group={champSelected} value={id} on:change={selectedChamp}>
                <label for="ranged{id}">
                    <img src="champions/{ranged}.jpg" alt="{ranged}" class="{champSelected == id ? "selected" : "deselected"}">
                </label>
            {/each}
        </div>
        {/if}
        <div class="row">
            <div class="col-12">
                <Builds champ={championRitesSelected} />
            </div>
        </div>
    </div>
    

</section>


<style>
    .shields img{
        max-height: 200px;
        object-fit: contain;
        cursor: pointer;
        transition: all 400ms;
    }
    .shields img:hover{
        transition: all 600ms;
        transform: scale(1.05);
    }
    .selected{
        filter:grayscale(0%);
    }
    .deselected{
        filter:grayscale(80%);
    }
    .champions img{
        max-height: 100px;
        transition: all 400ms;
        overflow: hidden;
        cursor: pointer;
    }
    .champions img:hover{
        transform: scale(1.05);
        transition: all 600ms;
    }
    input[type="radio"]{
        visibility: hidden;
        display: none;
    }
    label{
        margin: 0;
    }
    #buildsImg{
      max-width: 100%;
      object-fit: contain;
      margin-top: -80px;
      margin-bottom: 3rem;
    }

</style>



