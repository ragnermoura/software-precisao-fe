<template id="register">
    <Compregister />
    <Footer/>
</template>
<script>
import Compregister from '../../../components/auth/register.vue'
import Footer from '../../../components/footer/footer.vue'

export default {
    name: 'register',
    components: {
        Compregister,
        Footer
    }
}
</script>