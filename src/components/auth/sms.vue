<template id="CompSms">
    <div class="container-fluid parte_sms elemento-sms">


        <div class="row input_area">
            <h3 class="text-center sms-texto">Você vai receber um código de confirmação</h3>
            <p class="text-center text-light text-uppercase">30 segundos</p>
            <input class="input-code" type="text" maxlength="1" placeholder="0" aria-label=".form-control-lg example">
            <input class="input-code" type="text" maxlength="1" placeholder="0" aria-label=".form-control-lg example">
            <input class="input-code" type="text" maxlength="1" placeholder="0" aria-label=".form-control-lg example">
            <input class="input-code" type="text" maxlength="1" placeholder="0" aria-label=".form-control-lg example">
            <h3 class="msgconfirmation mt-3 text-center"><i class="fa fa-check icon-confimation ml-3"></i> Confirmado
            </h3>
            <div class="row">
                <div class="col-md-12 mt-4">
                    <div class="d-grid">
                    <button class="btn btn-primary btn_valida" type="button">Validar
                    </button>
                    <h3 class="text-reenviar">reenviar sms</h3>
                    <button class="btn btn-primary btn_sendEmail mt-3" type="button">Enviar por e-mail
                    </button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CompSms',
}
</script>
<style>
@import '../../assets/css/auth/auth.css';
</style>
