<template id="Compregister">
    <div class="row">
        <div class="col-md-5 primeira_parte">
            <img src="../../assets/images/logo.svg" class="img-fluid logo" alt="">
            <div class="cotainer login-area">
                <h3 class="text-left mt-3 boas-vindas-texto">vamos ao cadastro!</h3>
                <!-- <p class="mensagem mt-3"><i class="fa fa-check ml-3"></i> Deslogado com sucesso</p> -->
                <form autocomplete="off" @submit.prevent="handleSubmit">
                    <div class="mt-4">
                        <div class="input-icons">
                            <i class="fa fa-user"></i>
                            <input class="form-control form-control-lg" type="text" placeholder="Digite seu nome"
                                aria-label=".form-control-lg example" id="nome" v-model="nome">
                        </div>
                        <div class="input-icons mt-2">
                            <i class="fa fa-envelope"></i>
                            <input class="form-control form-control-lg" v-model="email" type="email"
                                placeholder="Digite seu melhor e-mail" id="email" aria-label=".form-control-lg example">

                        </div>
                        <p class="mensagem-error mt-2" hidden id="msgEmailFail"><i class="fa fa-ban ml-3"></i> Este e-mail
                            já está em uso.</p>
                        <p class="mensagem mt-2" hidden id="msgEmailOk"><i class="fa fa-check ml-3"></i> Este e-mail é
                            perfeito!.</p>

                        <div class="input-icons mt-2">
                            <i class="fa fa-phone"></i>
                            <input type="text" v-model="telefone" id="telefone" data-mask="(99) 99999-9999"
                                class="form-control mask form-control-lg" placeholder="Ex.: (00)00000-0000"
                                aria-label=".form-control-lg example">
                        </div>
                        <div class="row">
                            <div class="input-icons col-md-6">
                                <i class="fa fa-lock mt-4"></i>
                                <i class="fa fa-eye icon-olho"></i>

                                <input autocomplete="off" class="form-control form-control-lg mt-2" type="password"
                                    placeholder="Escolha uma senha" id="senha" v-model="senha" @keyup="medirForcaSenha"
                                    aria-label=".form-control-lg example">

                                <div class="progress mt-2">

                                    <progress style="width: 100%;" :value="pontuacao" max="4"
                                        :style="{ 'background-color': corBarra }"></progress>
                                </div>


                            </div>
                            <div class="input-icons col-md-6">
                                <i class="fa fa-lock mt-4"></i>
                                <i class="fa fa-eye icon-olho"></i>
                                <input autocomplete="off" class="form-control form-control-lg mt-2" type="password"
                                    placeholder="Confirme sua senha" aria-label=".form-control-lg example" id="confirmSenha"
                                    v-model="confirmSenha" @keyup="medirForcaSenhaConfirm">

                                <div class="progress mt-2">
                                    <progress style="width: 100%;" :value="pontuacao2" max="4"
                                        :style="{ 'background-color': corBarra }"></progress>
                                </div>
                            </div>
                        </div>

                        <!-- <p class="mensagem-error mt-2"><i class="fa fa-ban ml-3"></i> As senhas não são iguais.</p> -->
                        <p id="success" hidden class="mensagem mt-3"><i class="fa fa-check ml-3"></i> As senhas conferem.
                        </p>
                        <p id="danger" hidden class="mensagem-error mt-3"><i class="fa fa-ban ml-3"></i> As senhas não
                            conferem.</p>


                        <div class="d-grid gap-2 mt-3 mb-2">
                            <button class="btn btn-primary" type="submit">Cadastrar</button>
                            <RouterLink to="login" class="btn btn-primary btn_login" type="button">Voltar ao Login
                            </RouterLink>
                        </div>
                        <div class="text-area">

                        </div>

                    </div>
                </form>
            </div>

        </div>
        <div class="col-md-7 segunda_parte elemento-1">
            <RouterLink to="/" class="btn_voltar"> Voltar ao site</RouterLink>
            <img src="../../assets/images/img2.svg" class="img-register" />
            <p class="text-login mb-4 mt-5">Junte-se agora mesmo ao maior sistema de gestão para igrejas evangélicas. Somos
                a plataforma n° 1 em organização. </p>

        </div>
    </div>
</template>
<script>
import QrcodeVue from 'qrcode.vue'
import api from '../../service/auth/index.js'


export default {
    name: 'Compregister',

    data() {
        return {
            value: 'https://julia.com',
            size: 100,
            senha: '',
            confirmSenha: '',
            pontuacao: 0,
            corBarra: '#e9ecef',
            telefone: '',
            email: ''

        }
    },
    components: {
        QrcodeVue,

    },


    methods: {

        async handleSubmit(e) {
            const num1 = Math.floor(Math.random() * 5);
            const num2 = Math.floor(Math.random() * 9);
            const num3 = Math.floor(Math.random() * 7);
            const num4 = Math.floor(Math.random() * 9);

            const code = `${num1}${num2}${num3}${num4}`;

            console.log(code);

            let nome = document.getElementById("nome").value;
            let email = document.getElementById("email").value;
            let telefone = document.getElementById("telefone").value;
            let senha = document.getElementById("senha").value;


            await api.cadastro(nome, email, telefone, senha, code)


        },



        medirForcaSenha() {
            this.pontuacao = 0;
            localStorage.setItem('senha', this.senha)

            if (this.senha.length >= 8) {
                this.pontuacao += 1;
            }


            if (this.senha.match(/[a-z]/) && this.senha.match(/[A-Z]/)) {
                this.pontuacao += 1;
            }


            if (this.senha.match(/[0-9]/)) {
                this.pontuacao += 1;
            }


            if (this.senha.match(/[!@#$%^&*(),.?":{}|<>]/)) {
                this.pontuacao += 1;
            }


            if (this.pontuacao === 0) {
                this.corBarra = "#e9ecef";
            } else if (this.pontuacao === 1) {
                this.corBarra = "red";
            } else if (this.pontuacao === 2) {
                this.corBarra = "orange";
            } else if (this.pontuacao === 3) {
                this.corBarra = "yellow";
            } else if (this.pontuacao === 4) {
                this.corBarra = "green";
            }
        },

        medirForcaSenhaConfirm() {
            this.pontuacao2 = 0;

            localStorage.setItem('confirmSenha', this.confirmSenha)

            // Verifica se a senha tem pelo menos 8 caracteres
            if (this.confirmSenha.length >= 8) {
                this.pontuacao2 += 1;
            }

            // Verifica se a senha tem pelo menos uma letra maiúscula e uma minúscula
            if (this.confirmSenha.match(/[a-z]/) && this.confirmSenha.match(/[A-Z]/)) {
                this.pontuacao2 += 1;
            }

            // Verifica se a senha tem pelo menos um número
            if (this.confirmSenha.match(/[0-9]/)) {
                this.pontuacao2 += 1;
            }

            // Verifica se a senha tem pelo menos um caractere especial
            if (this.confirmSenha.match(/[!@#$%^&*(),.?":{}|<>]/)) {
                this.pontuacao2 += 1;
            }

            // Define a cor da barra de progresso de acordo com a pontuação
            if (this.pontuacao2 === 0) {
                this.corBarra = "#e9ecef";
            } else if (this.pontuacao2 === 1) {
                this.corBarra = "red";
            } else if (this.pontuacao2 === 2) {
                this.corBarra = "orange";
            } else if (this.pontuacao2 === 3) {
                this.corBarra = "yellow";
            } else if (this.pontuacao2 === 4) {
                this.corBarra = "green";
            }


            let senha = localStorage.getItem('senha')
            let Confirmsenha = localStorage.getItem('confirmSenha')
            let success = document.querySelector("#success");
            let danger = document.querySelector("#danger");

            if (senha == Confirmsenha) {
                success.hidden = false
                danger.hidden = true
            } else {
                danger.hidden = false
                success.hidden = true
            }
        },



    }


}
</script>
<style>
@import '../../assets/css/auth/auth.css';
</style>