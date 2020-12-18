<script>
	import { goto } from '@sapper/app';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';

	import { userStore } from '../stores/userStore';

	export let segment;
	export let loadingPage = true;
	
	let phone = false;

	onMount(async () => {
		setTimeout(() => { loadingPage = false }, 2000);
		
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
		background: rgba(255, 255, 255, 0.85);
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