<script>
	import Nav from '../components/Nav.svelte';
	import { onMount } from 'svelte';

	export let segment;
	export let loadingPage = true;

	onMount(() => {
		setTimeout(() => { loadingPage = false }, 2000);
	})
</script>

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
		background-color: rgba(0, 0, 0, 0.8);
		height: 100%;
		width: 100%;
		z-index: 9999999;
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

<Nav {segment}/>

	{#if loadingPage}
		<div class="background">
			<img src="favicon.png" alt="adas">
		</div>
	{/if}

	<div class="backgroundVideo"></div>
		<video autoplay muted loop id="myVideo">
			<source src="video.webm" type="video/webm">
		</video>
	

	<slot></slot>
