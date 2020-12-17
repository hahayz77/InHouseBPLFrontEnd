<script>
	import { goto } from '@sapper/app';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';
<<<<<<< HEAD
	import { onMount } from 'svelte';
	import { goto } from '@sapper/app';

	import { userStore } from '../stores/userStore';
=======
>>>>>>> Error1

	import { userStore } from '../stores/userStore';

	export let segment;
	export let loadingPage = true;
	export let localStoreUser = { menssagem: '', email: '', id: '', _id: '', name: 'none', main: 'Raigon', points: 0, wins: 0, loses: 0 };
	let phone = false;

	onMount(async () => {
		setTimeout(() => { loadingPage = false }, 2000);
<<<<<<< HEAD

		// Store Persistente
		if (process.browser) { 
			localStoreUser = localStorage.getItem('userStore');
			userStore.update(()=>{ return JSON.parse(localStoreUser)});
			if(segment === "login" && localStoreUser.id !== ""){
				goto("/user");
			}			
  		}

		function phoneCheck(){
			if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
				phone = true;
			}
			else{
			}
		}


=======
		
		// Store Persistente
		if (process.browser) { 
			let localStoreUser = await localStorage.getItem('userStore');
			if(localStoreUser !== null){
				userStore.update(()=>{ return JSON.parse(localStoreUser)});
				if(segment === "login"){
					goto("/user");
				}
			}			
  		}
>>>>>>> Error1
	})
</script>

<Nav {segment}/>

	{#if loadingPage}
		<div class="background">
			<img src="battleritebr.png" alt="adas">
		</div>
	{/if}

	<div class="backgroundVideo"></div>
		<video autoplay muted loop id="myVideo">
			<source src="video.webm" type="video/webm">
		</video>
	
	<main transition:slide class="overflow-hidden">
		<slot></slot>
	</main>

	<Footer />

<style>

	img{
		position: fixed;
		left: 0; 
		right: 0;
		top: 0; 
		bottom: 0;
		width: 60vh;
		height: auto;
		max-height: 75%;
		max-width: 60%;
		display: block;
		margin: auto;
		
	}
	.background{
		position: fixed;
		left: 0; 
		right: 0;
		top: 0; 
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.99);
		height: 100%;
		width: 100%;
		z-index: 9999999;
		transform: scale(1.3)
	}
	video{
		position: fixed;
		left: 0; 
		right: 0;
		top: 0; 
		bottom: 0;
		height: 100%;
		width: 100%;
		z-index: -9999999;
		object-fit: cover;
		
	}
	.backgroundVideo{
		background: rgba(255, 255, 255, 0.7);
		position: fixed;
		left: 0; 
		right: 0;
		top: 0; 
		bottom: 0;
		height: 100%;
		width: 100%;
		z-index: -999999;
	}

</style>