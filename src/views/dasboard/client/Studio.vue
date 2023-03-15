<template id="Create">
    <div class="container-scroller">
        <!-- partial:partials/_navbar.html -->
        <Navbar />
        <!-- partial -->
        <div class="container-fluid page-body-wrapper">
            <Settings />
            <MasterMenu />

            <div class="card menu-studio">
                <div class="card-body">
                   
                </div>
            </div>
        </div>

        <Studio />
    
    </div>
</template>

<script>
import Studio from '../../../components/dashboard/client/studio/studio.vue'
import Navbar from '../../../components/nav/nav-client.vue';
import Settings from '../../../components/settings/settings.vue';
import MasterMenu from '../../../components/menu/masterMenu-client.vue';

export default {
    name: 'Create',
    components: {
        Studio,
        Navbar,
        Settings,
        MasterMenu
    }
}
</script>

<style>
@import '../../../assets/css/studio/studio.css';
</style>