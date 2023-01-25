<template id="TabSound">
    <div class="tab-content tab-content-basic">

        <div class="tab-pane fade show active" id="sound" role="tabpanel" aria-labelledby="sound">

            <img src="../../../../assets/images/logoSound.png" width="200" class="img-fluid" alt="">

            <div class="row container-fluid">
                <div class="col-md-2">
                   
                    <!-- <img src="../../../../assets/images/sound.gif" class="img-fluid barras" alt=""> -->
                    
                </div>
            </div>


            <div class="row">
                <div class="col-lg-1 grid-margin stretch-card ">
                    <div class="card card-slide">
                        <div class="card-body">
                            <Slider />
                            
                        </div>
                    </div>
                </div>

                <div class="col-lg-1 grid-margin stretch-card">
                    <div class="card card-slide">
                        <div class="card-body">
                            <Slider />

                        </div>
                    </div>
                </div>

                <div class="col-lg-1 grid-margin stretch-card">
                    <div class="card card-slide">
                        <div class="card-body">
                            <Slider />

                        </div>
                    </div>
                </div>

                <div class="col-lg-1 grid-margin stretch-card">
                    <div class="card card-slide">
                        <div class="card-body">
                            <Slider />

                        </div>
                    </div>
                </div>

                <div class="col-lg-1 grid-margin stretch-card">
                    <div class="card card-slide">
                        <div class="card-body">
                            <Slider />

                        </div>
                    </div>
                </div>
                <div class="col-lg-1 grid-margin stretch-card">
                    <div class="card card-slide">
                        <div class="card-body">
                            <Slider />

                        </div>
                    </div>
                </div>
                <div class="col-lg-1 grid-margin stretch-card">
                    <div class="card card-slide">
                        <div class="card-body">
                            <Slider />

                        </div>
                    </div>
                </div>
                <div class="col-lg-1 grid-margin stretch-card">
                    <div class="card card-slide">
                        <div class="card-body">
                            <Slider />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Slider from './sound.vue'
export default {
    name: 'TabSound',
    components: {
        Slider
    }
}
</script>