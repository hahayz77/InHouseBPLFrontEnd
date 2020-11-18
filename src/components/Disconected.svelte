<script>
    let showAlert = true;

    if (showAlert === true){
        showAlert = false;
    }
</script>

<a href="/" class="float" title="Desconectado" on:click={()=>{location.reload()}}><i class="fa fa-ban my-float"></i></a>


<style>
    .float{
	position:fixed;
	width:60px;
	height:60px;
	bottom:40px;
	right:40px;
	background-color:#d32525;
	color:#FFF;
	border-radius:50px;
	text-align:center;
    font-size:30px;
	box-shadow: 2px 2px 3px #999;
    z-index:100;
}

.my-float{
	margin-top:16px;
}

</style>