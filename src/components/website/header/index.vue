<template id="Header">
  <div>
    <div class="jumbotron">
      <div class="row">
        <div class="col-md-7 titleArea">
          <h1 class="title">
            Turbine a gestão da sua <span class="textIgreja">igreja</span> hoje.
          </h1>
          <h4 class="subtitle">organização e eficiência para seu ministério</h4>
          <ButtonPrimary />
        </div>
      </div>
    </div>
    <div class="faixa" hidden>
      <h1 class="title-faixa">
        Turbine a gestão da sua <span class="textIgreja">igreja</span> hoje.
      </h1>
    </div>
  </div>
</template>
<script>
import ButtonPrimary from "../buttons/primary.vue";
import Topbar from "../../../components/website/topBar/index.vue"
export default {
  name: "Header",
  components: {
    ButtonPrimary,
    Topbar
  },
};
</script>
<style>
@import url("../../../assets/css/header.css");
</style>
