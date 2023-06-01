<template id="Home">
  <div>
    <Navbar/>
    <Header/>
    
    </div>
</template>
<script>
import Navbar from "../../components/website/navbar/index.vue";
import Header from "../../components/website/header/index.vue";
export default {
  name: "Home",
  components: {
    Navbar,
    Header
  },
};
</script>
<style>
@import url('../../assets/css/navbar.css');
</style>
