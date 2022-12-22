<template id="Complogin">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-5 primeira_parte">
                <img src="../../assets/images/logo.svg" class="img-fluid logo" alt="">
                <div class="cotainer login-area">
                    <h3 class="text-left mt-3 boas-vindas-texto">Olá, bem-vindo!</h3>
                    <h5 class="text-left  sub-texto">Prepare tudo para começarmos :)</h5>
                    <p class="mensagem mt-3"><i class="fa fa-check ml-3"></i> Deslogado com sucesso</p>
                    <!-- <p class="mensagem-error"><i class="fa fa-ban ml-3"></i> Erro de autenticação</p> -->
                    <div class="mt-4">
                        <div class="input-icons">
                            <i class="fa fa-envelope"></i>
                            <input class="form-control form-control-lg" type="email" placeholder="email@dominio.com.br"
                                aria-label=".form-control-lg example">
                        </div>
                        <div class="input-icons">
                            <i class="fa fa-lock"></i>
                            <input class="form-control form-control-lg mt-2" type="password"
                                placeholder="Digite sua Senha" aria-label=".form-control-lg example">
                        </div>

                        <div class="d-grid gap-2 mt-3 mb-2">
                            <button class="btn btn-primary" type="button">Entrar</button>
                        </div>
                        <div class="text-area">
                            <span class="esqueci-senha">Esqueci a senha |</span>
                            <RouterLink to="register" class="cadastro"> Ainda não sou cadastrado</RouterLink>
                        </div>
                        <p class="text-separate">ou acesse usando o <strong>app</strong></p>
                        <qrcode-vue class="qr-area" :value="value" :size="size" level="H" />
                    </div>
                </div>

            </div>
            <div class="col-md-7 segunda_parte elemento-1">
                <RouterLink to="/" class="btn_voltar"> Voltar ao site</RouterLink>
                <img src="../../assets/images/img1.svg" class="img" />
                <p class="text-login mb-3">Chegou a hora de otimizarmos o seu tempo. O Software Precisão deixa as
                    tarefas complexas da sua igreja mais simples, com rapidez e eficiência. </p>
                <div class="d-grid gap-2">
                    <RouterLink to="register" class="btn btn-primary btn_cadastrar" type="button">Cadastre-se
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import QrcodeVue from 'qrcode.vue'

export default {
    name: 'Complogin',
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