<template id="Recovery_email">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-5 primeira_parte">
                <img src="../../assets/images/logo.svg" class="img-fluid logo" alt="">
                <div class="cotainer recovery-area">
                    <h3 class="text-left mt-3 title-recovery-1">Calma que </h3>
                    <h3 class="text-left title-recovery-2">vamos resolver</h3>
                    <h5 class="text-left sub-texto-recovery">Digite o email cadastrado. Vamos enviar sua tudo para
                        recuperar seu acesso. :)</h5>

                    <!-- <p class="mensagem-error"><i class="fa fa-ban ml-3"></i> Erro de autenticação</p> -->
                    <div class="mt-4">
                        <div class="input-icons">
                            <i class="fa fa-envelope"></i>
                            <input class="form-control form-control-lg" autocomplete="off" type="email"
                                placeholder="email@dominio.com.br" aria-label=".form-control-lg example">
                        </div>
                        <p class="mensagem mt-3"><i class="fa fa-check ml-3"></i> Confira seu e-mail</p>
                        <div class="d-grid gap-2 mt-3 mb-2">
                            <button class="btn btn-primary" type="button">Enviar</button>
                            <RouterLink to="login" class="btn btn-primary btn_login" type="button">Voltar ao Login
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-7 segunda_parte elemento-1">
                <RouterLink to="/" class="btn_voltar"> Voltar ao site</RouterLink>
                <img src="../../assets/images/equipe.svg" class="img-recovery" />
                <p class="text-login mb-3">Todos são peças importantes no trabalho em equipe, cada um representa uma pequena parcela do resultado final, quando um falha, todos devem se unir, para sua reconstrução.</p>
                <div class="d-grid gap-2">
                    <RouterLink to="register" class="btn btn-primary btn_cadastrar" type="button">Cadastre-se
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>
<script>


export default {
    name: 'Recovery_email',


}
</script>
<style>
@import '../../assets/css/auth/auth.css';
</style>