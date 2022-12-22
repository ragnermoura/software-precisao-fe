<template id="Recovery_pass">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-5 primeira_parte">
                <img src="../../assets/images/logo.svg" class="img-fluid logo" alt="">
                <div class="cotainer recovery-area">
                    <h3 class="text-left mt-3 title-recovery-1">Calma que </h3>
                    <h3 class="text-left title-recovery-2">vamos resolver</h3>
                    <h5 class="text-left sub-texto-recovery">Digite sua nova senha e depois confirme. :)</h5>

                    <!-- <p class="mensagem-error"><i class="fa fa-ban ml-3"></i> Erro de autenticação</p> -->
                    <div class="mt-4">
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
                        <p class="mensagem mt-3"><i class="fa fa-check ml-3"></i> As senhas são iguais :)</p>
                        <div class="d-grid gap-2 mt-3 mb-2">
                            <button class="btn btn-primary" type="button">confirmar</button>
                            <RouterLink to="login" class="btn btn-primary btn_login" type="button">Voltar ao Login
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-7 segunda_parte elemento-1">
                <RouterLink to="/" class="btn_voltar"> Voltar ao site</RouterLink>
                <img src="../../assets/images/lampada.svg" class="img-recovery" />
                <p class="text-login mb-3">Foco, força e coragem para que hoje seja um dia marcado por metas concluídas. Vamos lá, Igreja!</p>
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
    name: 'Recovery_pass',


}
</script>
<style>
@import '../../assets/css/auth/auth.css';
</style>