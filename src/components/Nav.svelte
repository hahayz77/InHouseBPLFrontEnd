<script>
	import { userStore } from '../stores/userStore'
	export let segment;


</script>


<nav class="navbar navbar-expand-lg navbar-light bg-white">
	<a class="navbar-brand" href="/"><img src="battleritebrlogo.png" alt="Battlerite Brasil"></a>
  	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
	<span class="navbar-toggler-icon"></span>
  	</button>
 	 <div class="collapse navbar-collapse" id="navbarText">
		<ul class="navbar-nav ml-auto">
			<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">HOME</a></li>
			<li><a aria-current="{segment === 'sobre' ? 'page' : undefined}" href="sobre">SOBRE</a></li>	
			<li><a aria-current="{segment === 'guia' ? 'page' : undefined}" href="guia">GUIA</a></li>	
			<li><a aria-current="{segment === 'builds' ? 'page' : undefined}" href="builds">BUILDS</a></li>
			{#if $userStore.name === 'none'}
				<li><a aria-current="{segment === 'login' ? 'page' : undefined}" href="login">LOGIN</a></li>
			{:else}
				<li><a aria-current="{segment === 'user' ? 'page' : undefined}" href="user">{$userStore.name}</a></li>		
			{/if}
		</ul>
	</div>

</nav>


<style>
	nav {
		border-bottom: 0px;
		font-weight: 300;
		padding: 0 1em;
		height: 10vh;
	}

	nav a img{
		height: 8vh;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgba(0, 0, 0, 0.3);
		display: block;
		bottom: 10px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
		color: black;
		font-family: "Brickton Regular", 'Archivo Black', 'Tahoma', sans-serif;
		letter-spacing: 0.1rem;
	}
	@media (max-width: 991.98px) {
		nav a img{
			height: 7vh;
		}
		.navbar{
			padding: 0;
		}
		.navbar-brand{
			padding: 0 1rem;
		}
		.navbar-toggler-icon{
			color: black;
		}
		.navbar-toggler{
			z-index: 99;
		}
		.navbar-light .navbar-toggler{
			border-color: rgba(0,0,0,0);
		}
		.navbar-collapse{
			background: white;
			z-index: 16;
		}
	}
</style>