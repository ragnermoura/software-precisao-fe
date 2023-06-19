<template id="NavBar">
  <div class="TopNavbar">
    <Topbar />
    <nav id="navbar" class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="#"
        ><img
          src="../../../assets/images/logo_horizontal.png"
          class="logo"
          alt=""
      /></a>
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
            <a class="nav-link" href="#quemsomos">Quem somos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#planos">Planos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Novidades</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contato">Contato</a>
          </li>
          <li class="nav-item">
            <a href="/login" type="button" class="btn btn-primary btn-login ml-3 mr-3">
              <span class="text-login">Login</span>
            </a>
          </li>
          <li class="nav-item">
            <img
              src="../../../assets/images/portugal.png"
              class="bandeira"
              alt=""
              srcset=""
            />
            <p class="idioma">EUR</p>
          </li>
          <li class="nav-item">
            <img
              src="../../../assets/images/brasil.png"
              class="bandeira"
              alt=""
              srcset=""
            />
            <p class="idiomaEscolhino">BRL</p>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
import Topbar from "../../../components/website/topBar/index.vue";
export default {
  name: "NavBar",
  components: {
    Topbar,
  },
  mounted() {
    window.addEventListener("scroll", function () {
      var navbar = document.getElementById("navbar");
      var scrolled = window.pageYOffset || document.documentElement.scrollTop;

      if (scrolled > 0) {
        navbar.style.backgroundColor =
          "#260b52"; /* Defina a cor desejada */
      } else {
        navbar.style.backgroundColor =
          "transparent"; /* Volta para a cor transparente quando estiver no topo */
      }
    });
  },
};
</script>


