<template id="Plan">
    <Plano />
    
    <Footer />
   
</template>
<script>
import Plano from '../../../components/payment/plan.vue';
import Footer from '../../../components/footer/footer.vue'


export default {
    name: 'Plan',
    components: {
        Plano,
        Footer
       
    }
}
</script>