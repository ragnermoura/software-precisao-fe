<template id="Balance">
    <p>CANAL</p>
    <span class="badge text-bg-secondary tela-db">-50<small>db</small></span>
      <div class="slider-horizontal">
        <div class="container-slider-horizontal">
            <input type="range" min="0" max="100" step="1" value="" id="sss">
        </div>
    </div>

</template>
<script>
export default {
    name: 'Balance'
}
</script>
<style>
@import './style.css';
</style>