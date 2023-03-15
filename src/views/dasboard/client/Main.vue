<template id="MainClient">
    <div class="container-scroller">
        <Alerts />
        <!-- partial:partials/_navbar.html -->
        <Navbar />
        <!-- partial -->
        <div class="container-fluid page-body-wrapper">
            <Settings />
            <MasterMenu />
            <div class="main-panel">
                <div class="content-wrapper">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="home-tab">

                                <!-- Seletores superiores -->
                                <div class="d-sm-flex align-items-center justify-content-between border-bottom">
                                    <ul class="nav nav-tabs" role="tablist">
                                        <li class="nav-item">
                                            <a class="nav-link active ps-0" id="home-tab" data-bs-toggle="tab"
                                                href="#overview" role="tab" aria-controls="overview"
                                                aria-selected="true">Visão Geral</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="profile-tab" data-bs-toggle="tab" href="#audiences"
                                                role="tab" aria-selected="false">Tesouraria</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="contact-tab" data-bs-toggle="tab"
                                                href="#demographics" role="tab" aria-selected="false">Secretaria</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="contact-tab" data-bs-toggle="tab" href="#Suporte"
                                                role="tab" aria-selected="false">Ministérios <span
                                                    class="badge text-bg-danger">4</span></a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="contact-tab" data-bs-toggle="tab" href="#sound"
                                                role="tab" onclick="colorFunction()" aria-selected="false">Som</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link border-0" id="more-tab" data-bs-toggle="tab" href="#more"
                                                role="tab" aria-selected="false">Celulas</a>
                                        </li>
                                    </ul>
                                    <div>
                                        <div class="btn-wrapper">
                                            <a href="#" class="btn btn-otline-dark align-items-center"><i
                                                    class="icon-share"></i> Share</a>
                                            <a href="#" class="btn btn-otline-dark"><i class="icon-printer"></i>
                                                Imprimir</a>

                                        </div>
                                    </div>
                                </div>

                                <!-- Tab de Som -->
                             

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Alerts from '../../../components/alert/alerts.vue';
import Navbar from '../../../components/nav/nav-client.vue';
import Settings from '../../../components/settings/settings.vue';
import MasterMenu from '../../../components/menu/masterMenu-client.vue';
import TabSound from '../../../components/dashboard/client/sound/tab.vue';



export default {
    name: 'MainClient',
    components: {
        Alerts,
        Navbar,
        Settings,
        MasterMenu,
        TabSound
    },

    created() {
        function colorFunction() {
            console.log('teste')
            localStorage.setItem('Dark-mode', true);

    
        
        }

    },
}
</script>
<style>
.dark-mode {
    background-color: #232227;
    color: white;
}
</style>