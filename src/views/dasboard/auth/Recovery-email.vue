<template id="recovery">
    <Recovery />
    <Footer />
</template>
<script>
import Recovery from '../../../components/auth/Recovery-email.vue'
import Footer from '../../../components/footer/footer.vue'

export default {
    name: 'recovery',
    components: {
        Recovery,
        Footer
    }
}
</script>