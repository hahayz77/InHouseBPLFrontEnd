<script>
	import { goto } from '@sapper/app';
	import { userStore } from '../stores/userStore'

	import { slide } from 'svelte/transition';
	
	// let fetchURL = "http://localhost:8081";
<<<<<<< HEAD
	let fetchURL = 'https://in-house-bpl-test.herokuapp.com'; 
=======
	let fetchURL = 'https://projeto.br-rgt.net/';
>>>>>>> TestServer

	// ########################################### Variáveis do Usuário
	let username = '';
	let useremail = '';
	let password = '';
	let passwordconfirm = '';
	let newuser = 0;
	let loginIcon = false;

	if (process.browser) { 			
		let localStoreUser = localStorage.getItem('userStore');			
	}
	if($userStore.id !== ""){
		goto("/user");
	}

	// ########################################### Functions SERVER
	let resulte;

	// ########################################### Functions Usuário

	async function clicknewuser(){
		newuser = 1;
	}
	function clickuseragain(){
		newuser = 0;
	}

	async function loginUser () {
		try {
			loginIcon = true;
			const login = await fetch(fetchURL + '/user/login', {
				method: 'POST',
				headers: {'Accept': 'application/json','Content-Type': 'application/json'},
				body: JSON.stringify({name: username, password: password})
			})
			const result = await login.json();
			
			if(result.mensagem === "Logado com sucesso!"){
				userStore.update(()=>{ return result });

				// Local Store
				let localStore = $userStore;
				localStorage.setItem('userStore', JSON.stringify(localStore));

				goto('/user');
				loginIcon = false;
				return;
			}
			else{
				loginIcon = false;
				alert(result.mensagem);
				return;
			}
			
			return;
		} catch (error) {
			console.log(error)
		}
	}

	async function createuser(){
		alert("Criar novo usuário");
		if(useremail === "" || username === "" || password === "" || passwordconfirm === ""){
			alert("Erro! - Preencha todos os dados corretamente")
		} 
		else if(password !== passwordconfirm){
			alert("Passwords não conferem")
		}
		else{
			let newUsername = username.replace(/\s/g,"");
			try {
				loginIcon = true;
				const login = await fetch(fetchURL + '/user/register', {
					method: 'POST',
					headers: {'Accept': 'application/json','Content-Type': 'application/json'},
					body: JSON.stringify({email: useremail, name: newUsername, password: password})
				})
				const result = await login.json();
				console.log(result);
				userStore.update(()=>{ return result });
				goto('/user');
				loginIcon = false;
				return result;
			} catch (error) {
				console.log(error)
			}
		}
	}

</script>


<svelte:head>
	<title>Login</title>
</svelte:head>

{#if newuser === 0}
<section transition:slide class="container jumbotron">
	<div class="container h-100 mt-5">
		<div class="d-flex justify-content-center h-100">
			<div class="user_card">
				<div class="d-flex justify-content-center">
					<div class="brand_logo_container">
						<img src="favicon.png" class="brand_logo" alt="Logo">
					</div>
				</div>
				<div class="d-flex justify-content-center form_container">
					<form on:submit|preventDefault={loginUser}>
						<div class="input-group mb-3">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-user"></i></span>
							</div>
							<input type="text" class="form-control input_user" bind:value={username} placeholder="Usuário" required>
						</div>
						<div class="input-group mb-3">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-key"></i></span>
							</div>
							<input type="password" class="form-control input_pass" bind:value={password} placeholder="Senha" required>
						</div>
						<div class="d-flex justify-content-center mt-3 login_container">
							<input type="submit" class="btn login_btn" value="Login">
						</div>
					</form>
				</div>
		
				<div class="mt-4">
					<div class="d-flex justify-content-center links">
						<a href="/login" on:click={clicknewuser} class="ml-2">Criar uma conta</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
{:else}
	<section transition:slide class="container jumbotron">
	<div class="container h-100 mt-5">
		<div class="d-flex justify-content-center h-100">
			<div class="user_card">
				<div class="d-flex justify-content-center">
					<div class="brand_logo_container">
						<img src="favicon.png" class="brand_logo" alt="Logo">
					</div>
				</div>
				<div class="d-flex justify-content-center form_container">
					<form on:submit|preventDefault={createuser}>
						<div class="input-group mb-2">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-envelope"></i></span>
							</div>
							<input type="email" name="" class="form-control input_email" bind:value={useremail} placeholder="E-mail" required>
						</div>
						<div class="input-group mb-2">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-user"></i></span>
							</div>
							<input type="text" name="" class="form-control input_pass" bind:value={username} placeholder="Usuário" required>
						</div>
						<div class="input-group mb-2">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-key"></i></span>
							</div>
							<input type="password" name="" class="form-control input_pass" bind:value={password} placeholder="Senha" required>
						</div>
						<div class="input-group mb-3">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-key"></i></span>
							</div>
							<input type="password" name="" class="form-control input_user" bind:value={passwordconfirm} placeholder="Confirmar senha" required>
						</div>
						<div class="d-flex justify-content-center mt-3 login_container">
							<input type="submit" class="btn login_btn" value="Criar conta">
						</div>
					</form>
				</div>
		
				<div class="mt-4">
					<div class="d-flex justify-content-center links">
						<a href="/login" on:click={clickuseragain} class="ml-2">Logar</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
{/if}


<style>
	.user_card {
			height: 400px;
			width: 350px;
			margin-top: auto;
			margin-bottom: auto;
			position: relative;
			display: flex;
			justify-content: center;
			flex-direction: column;
			padding: 10px;
			box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
			-webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
			-moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
			border-radius: 10px;

		}
		.brand_logo_container {
			position: absolute;
			height: 170px;
			width: 170px;
			top: -75px;
			padding: 10px;
			text-align: center;
		}
		.brand_logo {
			height: auto;
			width: 150px;
			object-fit: cover;
		}
		.form_container {
			margin-top: 90px;
		}
		.login_btn {
			width: 100%;
			background: #281d19 !important;
			color: white !important;
		}
		.login_btn:focus {
			box-shadow: none !important;
			outline: 0px !important;
		}
		.login_container {
			padding: 0 2rem;
		}
		.input-group-text {
			background: #281d19 !important;
			color: white !important;
			border: 0 !important;
			border-radius: 0.25rem 0 0 0.25rem !important;
		}
		.input_user,
		.input_pass:focus {
			box-shadow: none !important;
			outline: 0px !important;
		}

</style>