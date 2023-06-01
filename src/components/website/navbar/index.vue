<template id="NavBar">
 
  <div class="TopNavbar">
    <Topbar/>
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="#"><img src="../../../assets/images/logo_horizontal.png" class="logo" alt=""></a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#"
              >Home <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Quem somos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Planos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Novidades</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contato</a>
          </li>
          <li class="nav-item">
            <button type="button" class="btn btn-primary btn-login ml-3 mr-3"><span class="text-login">Login</span></button>
            
          </li>
          <li class="nav-item">
            <img src="../../../assets/images/portugal.png" class="bandeira" alt="" srcset="">
            <p class="idioma">EUR</p>
          </li>
          <li class="nav-item ">
            <img src="../../../assets/images/brasil.png" class="bandeira" alt="" srcset="">
            <p class="idiomaEscolhino">BRL</p>
          </li>
        </ul>
        
      </div>
    </nav>
  </div>
</template>
<script>
import Topbar from '../../../components/website/topBar/index.vue'
export default {
  name: "NavBar",
  components:{
    Topbar
  }
};
</script>
<style>
@import url('../../../assets/css/navbar.css');
</style>
