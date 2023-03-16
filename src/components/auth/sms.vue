<template id="CompSms">
    <div class="container-fluid parte_sms elemento-sms">

        <form @submit.prevent="handleSubmit">
            <div class="row input_area">
                <h3 class="text-center sms-texto">Você vai receber um código de confirmação</h3>
                <p class="text-center text-light text-uppercase"><span id="contador">30</span> segundos</p>
                <input class="input-code" v-model="number1" id="number1" type="text" maxlength="1" placeholder="0"
                    aria-label=".form-control-lg example">
                <input class="input-code" v-model="number2" id="number2" type="text" maxlength="1" placeholder="0"
                    aria-label=".form-control-lg example">
                <input class="input-code" v-model="number3" id="number3" type="text" maxlength="1" placeholder="0"
                    aria-label=".form-control-lg example">
                <input class="input-code" v-model="number4" id="number4" type="text" maxlength="1" placeholder="0"
                    aria-label=".form-control-lg example">
                <h3 class="msgconfirmation mt-3 text-center" hidden id="certo"><i
                        class="fa fa-check icon-confimation ml-3"></i> Confirmado
                </h3>

                <h3 class="msgconfirmation mt-3 text-center" hidden id="errado"><i
                        class="fa fa-ban icon-confimation ml-3"></i> Não confere
                </h3>
                <div class="row">
                    <div class="col-md-12 mt-4">
                        <div class="d-grid">
                            <button class="btn btn-primary btn_valida" type="submit">Validar
                            </button>
                            <h3 class="text-reenviar">reenviar e-mail</h3>
                            <button class="btn btn-primary btn_sendEmail mt-3" type="button">Enviar por sms
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script>

export default {
    name: 'CompSms',

    mounted() {
        var tempoRestante = 30;
        var contadorElemento = document.getElementById("contador");

        var contador = setInterval(function () {
            tempoRestante--;
            contadorElemento.innerHTML = tempoRestante;

            if (tempoRestante <= 0) {
                clearInterval(contador);
                contadorElemento.innerHTML = "0";

            }
        }, 1000);
    },

    methods: {


        async handleSubmit(e) {


            let number1 = document.getElementById("number1").value;
            let number2 = document.getElementById("number2").value;
            let number3 = document.getElementById("number3").value;
            let number4 = document.getElementById("number4").value;

            let code = number1 + number2 + number3 + number4
            let id = localStorage.getItem('id_user')
            let codesave = localStorage.getItem('code')


            if (code === codesave) {
                let msgcode = document.querySelector("#certo");
                let msgcode2 = document.querySelector("#errado");

                msgcode.hidden = false
                msgcode2.hidden = true

                localStorage.removeItem('code')

                setTimeout(function () {
                    window.location.href = "/plan";
                }, 5000);
            } else {
                msgcode2.hidden = false
                msgcode.hidden = true
            }

        },
    }
}
</script>
<style>
@import '../../assets/css/auth/auth.css';
</style>
