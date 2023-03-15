<template id="Agenda">
    <div class="container-scroller">
        <!-- partial:partials/_navbar.html -->
        <Navbar />
        <!-- partial -->
        <div class="container-fluid page-body-wrapper">
            <Settings />
            <MasterMenu />
        </div>
       
    </div>


</template>
<script>
import Calendario from '../../../components/dashboard/client/agenda/agenda.vue'
import Navbar from '../../../components/nav/nav-client.vue';
import Settings from '../../../components/settings/settings.vue';
import MasterMenu from '../../../components/menu/masterMenu-client.vue';

export default {
    name: 'Agenda',
    components: {
        Calendario,
        Navbar,
        Settings,
        MasterMenu
    }
}
</script>