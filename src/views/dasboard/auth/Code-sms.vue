<template id="CodeSms">
    <Compsms />
    <Footer />
   
</template>
<script>
import Compsms from '../../../components/auth/sms.vue';
import Footer from '../../../components/footer/footer.vue'


export default {
    name: 'CodeSms',
    components: {
        Compsms,
        Footer
       
    }
}
</script>