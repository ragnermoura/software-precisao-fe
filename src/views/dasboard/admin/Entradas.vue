<template id="Positivo">
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
                       <Entrada/>

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
import Entrada from '../../../components/dashboard/main/finaceiro/entradas.vue'

export default {
    name: 'Positivo',
    components: {
        Alerts,
        Navbar,
        Settings,
        MasterMenu,
        Entrada
    }
}
</script>