<template id="Compregister">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-5 primeira_parte">
                <img src="../../assets/images/logo.svg" class="img-fluid logo" alt="">
                <div class="cotainer login-area">
                    <h3 class="text-left mt-3 boas-vindas-texto">vamos ao cadastro!</h3>
                    <!-- <p class="mensagem mt-3"><i class="fa fa-check ml-3"></i> Deslogado com sucesso</p> -->

                    <div class="mt-4">
                        <div class="input-icons">
                            <i class="fa fa-user"></i>
                            <input class="form-control form-control-lg" type="text" placeholder="Digite seu nome"
                                aria-label=".form-control-lg example">
                        </div>
                        <div class="input-icons mt-2">
                            <i class="fa fa-envelope"></i>
                            <input class="form-control form-control-lg" type="email"
                                placeholder="Digite seu melhor e-mail" aria-label=".form-control-lg example">

                        </div>
                        <p class="mensagem-error mt-2"><i class="fa fa-ban ml-3"></i> Este e-mail já está em uso.</p>
                        <div class="input-icons mt-2">
                            <i class="fa fa-phone"></i>
                            <input class="form-control form-control-lg" type="text" placeholder="Ex.: (00)00000-0000"
                                aria-label=".form-control-lg example">
                        </div>
                        <div class="row">
                            <div class="input-icons col-md-6">
                                <i class="fa fa-lock mt-4"></i>
                                <i class="fa fa-eye icon-olho"></i>
                                <input class="form-control form-control-lg mt-2" type="password"
                                    placeholder="Escolha uma senha" aria-label=".form-control-lg example">
                                <div class="progress mt-2">
                                    <div class="progress-bar bg-danger" role="progressbar" aria-label="Success example"
                                        style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>
                            <div class="input-icons col-md-6">
                                <i class="fa fa-lock mt-4"></i>
                                <i class="fa fa-eye icon-olho"></i>
                                <input class="form-control form-control-lg mt-2" type="password"
                                    placeholder="Confirme sua senha" aria-label=".form-control-lg example">
                                    <div class="progress mt-2">
                                    <div class="progress-bar bg-danger" role="progressbar" aria-label="Success example"
                                        style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- <p class="mensagem-error mt-2"><i class="fa fa-ban ml-3"></i> As senhas não são iguais.</p> -->
                        <p class="mensagem mt-3"><i class="fa fa-check ml-3"></i> As senhas conferem.</p>


                        <div class="d-grid gap-2 mt-3 mb-2">
                            <button class="btn btn-primary" type="button">Cadastrar</button>
                            <RouterLink to="login" class="btn btn-primary btn_login" type="button">Voltar ao Login</RouterLink>
                        </div>
                        <div class="text-area">

                        </div>

                    </div>
                </div>

            </div>
            <div class="col-md-7 segunda_parte elemento-1">
                <RouterLink to="/" class="btn_voltar"> Voltar ao site</RouterLink>
                <img src="../../assets/images/img2.svg" class="img-register" />
                <p class="text-login mb-4 mt-5">Junte-se agora mesmo ao maior sistema de gestão para igrejas evangélicas. Somos a plataforma n° 1 em organização.  </p>

            </div>
        </div>
    </div>
</template>
<script>
import QrcodeVue from 'qrcode.vue'

export default {
    name: 'Compregister',
    data() {
        return {
            value: 'https://julia.com',
            size: 100,
        }
    },
    components: {
        QrcodeVue,
    }
}
</script>
<style>
@import '../../assets/css/auth/auth.css';
</style>