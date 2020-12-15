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
			<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a></li>
			<li><a aria-current="{segment === 'sobre' ? 'page' : undefined}" href="sobre">sobre</a></li>	
			<li><a aria-current="{segment === 'builds' ? 'page' : undefined}" href="builds">builds</a></li>
			{#if $userStore.name === 'none'}
				<li><a aria-current="{segment === 'login' ? 'page' : undefined}" href="login">login</a></li>
			{:else}
				<li><a aria-current="{segment === 'user' ? 'page' : undefined}" href="user">{$userStore.name}</a></li>		
			{/if}
		</ul>
	</div>

</nav>


<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
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
		color: #281d19;
		font-family: Brickton Regular;
		letter-spacing: 0.1rem;
	}
	@font-face {
	    font-family: 'Brickton Regular';
		src: local('Brickton Regular'), local('Brickton Regular'), url("./fonts/Brickton Regular") format('otf');
	}
	@media (max-width: 768px) {
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