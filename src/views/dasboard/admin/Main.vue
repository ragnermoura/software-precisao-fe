<template id="Main">
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
                                                role="tab" aria-selected="false">Marketing Digital</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="contact-tab" data-bs-toggle="tab"
                                                href="#demographics" role="tab" aria-selected="false">Comercial</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="contact-tab" data-bs-toggle="tab"
                                                href="#Suporte" role="tab" aria-selected="false">Suporte Técnico <span class="badge text-bg-danger">4</span></a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link border-0" id="more-tab" data-bs-toggle="tab" href="#more"
                                                role="tab" aria-selected="false">Outros</a>
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

                                <!-- Tab de informações -->
                                <div class="tab-content tab-content-basic">
                                    <div class="tab-pane fade show active" id="overview" role="tabpanel"
                                        aria-labelledby="overview">
                                        <div class="row">
                                            <DataInfo />
                                        </div>
                                        <div class="row">
                                            <LineChart />
                                        </div>
                                        <div class="row">
                                            <div class="row flex-grow">
                                                <div class="col-12 grid-margin stretch-card">
                                                    <div class="card card-rounded table-darkBGImg">
                                                        <div class="card-body">
                                                            <div class="col-sm-7">
                                                                <h3 class="text-white upgrade-info mb-0">
                                                                    Tem algum novo <span class="fw-bold">Contato</span>
                                                                    para cadastrar na plataforma?
                                                                </h3>
                                                                <a href="#" class="btn btn-info upgrade-btn">Clique
                                                                    aqui</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <BarChart />
                                        </div>

                                    </div>
                                </div>
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
import Navbar from '../../../components/nav/nav.vue';
import Settings from '../../../components/settings/settings.vue';
import MasterMenu from '../../../components/menu/masterMenu.vue';
import DataInfo from '../../../components/dashboard/main/data/index.vue';
import LineChart from '../../../components/dashboard/main/graph/lineChart/index.vue'
import BarChart from '../../../components/dashboard/main/graph/BarChart/index.vue'


export default {
    name: 'Main',
    components: {
        Alerts,
        Navbar,
        Settings,
        MasterMenu,
        DataInfo,
        LineChart,
        BarChart,

    }
}
</script>