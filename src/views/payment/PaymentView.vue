<template id="Payment">

    <div class="payment-orange">
<div class="bgImagePayment d-flex flex-row justify-content-center align-items-center flex-wrap">
    <h1 class="col-12 text-center text-white transform-upper">Selecione o método de pagamento</h1>

    <div class="col-md-6 col-11 d-flex justify-content-center align-items-center radioDiv">
        <div class="inputRow">
            <div class="radioGroup">

                <input type="radio" value="credit" name="paymentMethod" id="credit"  v-model="selectedOption">
                <label for="credit">Cartão de Crédito</label>
            </div>
            <div>

                <img src="../../assets/images/visa_brand.png" class="img-fluid imgs" alt="">
                <img src="../../assets/images/master_brand.png" class="img-fluid imgs" alt="">
            </div>
        </div>
         <div class="inputRow">
            <div class="radioGroup">

                <input type="radio" value="boleto" name="paymentMethod" id="boleto"  v-model="selectedOption">
                <label for="boleto">Boleto</label>
            </div>
            <img src="../../assets/images/boleto_brand.png" class="img-fluid imgs" alt="">
        </div> 
        <div class="inputRow">
            <div class="radioGroup">

                <input type="radio" value='pix' name="paymentMethod" id="pix"  v-model="selectedOption">
                <label for="pix">Pix</label>
            </div>
            <img src="../../assets/images/pix_brand.png" class="img-fluid imgs" alt="">
        </div>

    </div>
    <section v-if="selectedOption !== ''" class="col-md-5 col-11 d-flex flex-column justify-content-center align-items-center form-container">
        <h2 class="form-title">Plano <bold>PREMIUM</bold> - inclui.</h2>

        <div class="d-flex form-header">

            
            <div class="">
                <p class="plan_text"> <img src="../../assets/images/check_icon.png" alt=""> Lorem Ipsum is simply dummy text</p>
                <p class="plan_text"> <img src="../../assets/images/check_icon.png" alt=""> Lorem Ipsum is simply dummy text</p>
                <p class="plan_text"> <img src="../../assets/images/check_icon.png" alt=""> Lorem Ipsum is simply dummy text</p>
                <p class="plan_text"> <img src="../../assets/images/check_icon.png" alt=""> Lorem Ipsum is simply dummy text</p>
            </div>
            <div class="">
                
                <img v-if="selectedOption == 'credit'" src="../../assets/images/master_brand_large.png" alt="" class="large-brand">
                <img v-if="selectedOption == 'boleto'" src="../../assets/images/boleto_brand_large.png" alt="" class="large-brand">
                <img v-if="selectedOption == 'pix'" src="../../assets/images/pix_brand_large.png" alt="" class="large-brand">
                 
            </div>
        </div>
        <hr class="ruler">
        
        <div class="w-90">
            <div class="valores mb-3">
                <p class="text-desconto">Desconto</p>
                <p class="destaque">R$ 40,00</p>
            </div>
            <div class="valores">
                <p class="text-total">Total</p>
                <div class="valoresTotal">
                    <p class="original">R$ 249,99</p>
                    <p class="destaque-large">R$ 209,99<bold class="smallText">/MÊS</bold></p>
                </div>
            </div>
        </div>
        <hr class="ruler">

        <form v-if="selectedOption === 'credit'" class=" w-90 form-complete">
            
        <div  class="form">

                <input class="input " type="text" placeholder="Nome do Cartão" />
                
                <input class="input " type="text" placeholder="0000 0000 0000 0000" />
                
                <input class="input " maxlength="5" minlength="4" placeholder="Validade" type="text" />
                
                <input class="input sm-input" maxlength="3" minlength="3" placeholder="CVV" type="text" />
            </div>
            <button class="custom-button">Realizar Pagamento</button>

        </form>

        <p class="continue" v-if="selectedOption !== '' && selectedOption !== 'credit' ">Continue com sua compra</p>

        <form v-if="selectedOption === 'boleto'" class=" w-90 form-complete">
            
        <div  class="form">

                <input class="input w-100" type="text" placeholder="CPF ou CNPJ" />
                
            </div>

            <ul class="list">
                <li class="list-content">O tempo de conclusão da transação varia de acordo com o método de pagamento escolhido.</li>
            </ul>

            <button class="custom-button">Gerar Boleto</button>

            
        </form>
        
        <form v-if="selectedOption === 'pix'" class=" w-90 form-complete">
            
        <div  class="form">

                <input class="input w-100" type="text" placeholder="CPF ou CNPJ" />
                
            </div>

            <ul class="list">
                <li class="list-content">Observe que, em alguns casos, pagamentos via Pix podem levar de 15 a 30 minutos para serem concluídos.</li>
            </ul>

            <button class="custom-button">Gerar id ou qr code</button>

            
        </form>
        
    </section>
</div>
</div>

</template>

<script>

export default {
  data() {
    return {
      selectedOption: '' // Propriedade para armazenar o valor selecionado
    };
  }
};

</script>