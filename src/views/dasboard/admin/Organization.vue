<template id="Organization">
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
                        <OrganizatioGraph/>

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
import OrganizatioGraph from '../../../components/dashboard/main/graph/orgaChart/index.vue'
export default {
    name: 'Organization',
    components: {
        Alerts,
        Navbar,
        Settings,
        MasterMenu,
        OrganizatioGraph
    }
}
</script>

