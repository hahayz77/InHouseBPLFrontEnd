
<section id="hero" class="container-fluid bg-grad">
    <img id="logoHero" src="home/logoHero.png" alt="Battlerite Brasil" 
    data-aos="fade-in" data-aos-delay="800" data-aos-easing="ease-in-out">
    <img id="heroimg" src="home/hero.jpg" alt="Battlerite Brasil">
</section>

<style>
  #hero {
      display: table;
      width: 100%;
      height: 90vh;
      overflow: hidden;
      background: black;
  }
  #logoHero{
    z-index: 1;
    position: absolute;
    top: 25%;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    margin-top: auto;
    margin-bottom: auto;
    object-fit: contain;
    max-height: 80%;
    
  }
  #heroimg {
    z-index: -1;
    object-fit: cover;
    height: 90vh;
    width: 100%;
    -webkit-mask-image: linear-gradient(to top, transparent, #ffffff 30%);
    mask-image: linear-gradient(to top, transparent, #ffffff 30%);
    object-fit: cover;
    animation: heroanimateframes 30s infinite;
  }

  @keyframes heroanimateframes {
      0% {
          transform: scale(1);
      }
      50% {
          transform: scale(1.1,1.1);
      }
      100% {
          transform: scale(1);
      }
  }

  @media (max-width: 575.98px) { 
    #logoHero{
      height: 90vw;
      
    }
    #hero, img {
      max-height: 90vh;
    }

   }
   @media(max-width: 767.98px){
     #logoHero{
       object-fit: cover;
     }
   }
</style>