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
	<title>builds</title>
</svelte:head>

<section class="container jumbotron">
    <div class="row">
        <div class="col-12">
          <div class="jumbotron">
            <h1 class="text-center" data-aos="fade-up" data-aos-delay="100" data-aos-easing="ease-out">Em construção....</h1>
          </div>
          <img id="buildsImg" src="imgs/builds.png" alt="" data-aos="fade-up" data-aos-delay="200" data-aos-easing="ease-out">
        </div>
    </div>

    <div class="row">
        <img src="" alt="">
    </div>

</section>


<style>
    section{
      min-height: 70vh;
    }
    #buildsImg{
      max-width: 100%;
      object-fit: contain;
      margin-top: -80px;
      margin-bottom: 3rem;
    }
    @media(max-width: 425px){
        #buildsImg{
            margin-top: 30px;
        }
    }
</style>
