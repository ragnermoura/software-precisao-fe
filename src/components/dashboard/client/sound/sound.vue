<template id="SoundController">
    <Balance />
    <div class="row area-btn mt-3">
        <hr>
        <div class="col-md-6"><button type="button" class="btn btn-outline-danger mute">
                M
            </button></div>
        <div class="col-md-6">
            <button type="button" class="btn btn-outline-warning solo">
                S
            </button>

        </div>
    </div>
    <div class="slider">
        <div class="container-slider">
            <div>
                <div class="line-color"></div>
                <input type="range" min="0" max="100" step="1" value="" id="sss">
            </div>
        </div>
        <span class="badge text-bg-secondary name_entrada">NOME COMP.</span>
       
    </div>
   

</template>
<script>
import Balance from './balance.vue'
export default {
    name: 'SoundController',
    components: {
        Balance
    },
    mounted() {
        window.onload = function () {
            var slider = document.getElementById("sss");
            var result = document.getElementById("final");
            slider.oninput = function () {
                result.innerHTML = slider.value;
            }
        }
    }

}
</script>
<style>
@import './style.css';
</style>