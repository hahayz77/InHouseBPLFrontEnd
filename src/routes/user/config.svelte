<script>
    let main;
    async function mainDefine () {
        alert(main);
    }

</script>

<svelte:head>
	<title>Configurações</title>
</svelte:head>

<section class="container jumbotron">
    <div class="row">
        <h1>Configurações</h1>

        <select bind:value={main}>
            <option value="Alysia">Alysia</option>
            <option value="Ashka">Ashka</option>
            <option value="Bakko">Bakko</option>
            <option value="Blossom">Blossom</option>
            <option value="Croak">Croak</option>
            <option value="Destiny">Destiny</option>
            <option value="Ezmo">Ezmo</option>
            <option value="Freya">Freya</option>
            <option value="Iva">Iva</option>
            <option value="Jade">Jade</option>
            <option value="Jamila">Jamila</option>
            <option value="Jumong">Jumong</option>
            <option value="Lucie">Lucie</option>
            <option value="Oldur">Oldur</option>
            <option value="Pearl">Pearl</option>
            <option value="Pestilus">Pestilus</option>
            <option value="Poloma">Poloma</option>
            <option value="Raigon">Raigon</option>
            <option value="Rook">Rook</option>
            <option value="Ruh-Kaan">Ruh-Kaan</option>
            <option value="Shen-Rao">Shen-Rao</option>
            <option value="Shifu">Shifu</option>
            <option value="Sirius">Sirius</option>
            <option value="Taya">Taya</option>
            <option value="Thorn">Thorn</option>
            <option value="Ulric">Blossom</option>
            <option value="Varesh">Croak</option>
            <option value="Zander">Zander</option>
        </select>
        <input type="button"class="btn btn-primary" value="Selecionar" on:click={mainDefine}>
    </div>
</section>



