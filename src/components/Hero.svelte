<script>
  import { slide } from 'svelte/transition'
</script>

<section transition:slide id="hero" class="container-fluid bg-grad">
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./hero/reborn.jpg" class="w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="./hero/reborn.jpg" class="w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="./hero/reborn.jpg" class="w-100" alt="...">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

</section>

<style>
  #hero {
      display: table;
      width: 100%;
      height: 90vh;
      background: #000;
      }
  img{
      -webkit-mask-image: linear-gradient(to top, transparent, #cecece 25%);
      mask-image: linear-gradient(to top, transparent, #cecece 25%);
      height: 90vh;
      object-fit: cover;
  }
  @keyframes heroanimateframes {
      0% {
          transform: scale(1);
      }
      100% {
          transform: scale(1.1,1.1);
      }
  }
  .carousel-item img {
      animation: heroanimateframes 30s infinite ;
  }

  @media (max-width: 575.98px) { 
    #hero, img {
      max-height: 50vh;
    }

   }
</style>