<template id="Header">
  <div>
    <div class="jumbotron">
      <div class="row">
        <div class="col-md-7 titleArea">
          <h1 class="title">
            Turbine a gestão da sua <span class="textIgreja">igreja</span> hoje.
          </h1>
          <h4 class="subtitle">organização e eficiência para seu ministério.  </h4>
          <ButtonPrimary />
          <ButtonDanger />
        </div>
      </div>
    </div>
    <div class="faixa">
      <div class="container">
        <!-- <h5 class="title-faixa"> Nossos parceiros e integradores</h5> -->
        <div class="row parceiros">
          <div class="col-md-2"><img src="../../../assets/images/parceiro1.png" class="img-parceiro" alt=""></div>
          <div class="col-md-2"><img src="../../../assets/images/parceiro2.png" class="img-parceiro" alt=""></div>
          <div class="col-md-2"><img src="../../../assets/images/parceiro3.png" class="img-parceiro" alt=""></div>
          <div class="col-md-2"><img src="../../../assets/images/parceiro4.png" class="img-parceiro" alt=""></div>
          <div class="col-md-2"><img src="../../../assets/images/parceiro5.png" class="img-parceiro" alt=""></div>
          <div class="col-md-2"><img src="../../../assets/images/parceiro6.png" class="img-parceiro" alt=""></div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ButtonPrimary from "../buttons/primary.vue";
import ButtonDanger from "../buttons/danger.vue";
import Topbar from "../../../components/website/topBar/index.vue";
export default {
  name: "Header",
  components: {
    ButtonPrimary,
    ButtonDanger,
    Topbar,
  },
};
</script>

