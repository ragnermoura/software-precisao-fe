<template id="Login">
  <div class="wrapper">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-5" style="z-index: 2">
          <img
            src="../../../assets/images/logoPrecisao.png"
            class="img-fluid logo-auth mt-5"
            alt=""
          />
          <h1 class="text-auth ml-2">Olá, bem-vindo</h1>
          <h5 class="text-success text-alert" hidden id="deslogado">
            <i class="fa fa-check"></i> Deslogado com sucesso!
          </h5>
          <h5 class="text-danger text-alert" hidden id="emailErrado">
            <i class="fa fa-ban"></i> E-mail ou senha errados
          </h5>

          <div class="alert alert-warning" hidden id="conta" role="alert">
            <i class="fa fa-exclamation-circle"></i> Sua conta foi desativada,
            entre em contato com nossos especialista para entender melhor sua
            situação atravéz do e-mail:
            <strong>contato@softwareprecisao.com.br</strong>
          </div>
          <div class="login-area">
            <form autocomplete="off" action="" method="POST">
              <div class="form-group">
                <i class="fa fa-envelope icon-input"></i>
                <input
                  type="email"
                  name="email"
                  class="form-control form-control-lg"
                  autocomplete="off"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Digite seu email"
                />
              </div>
              <div class="form-group">
                <i class="fa fa-lock icon-input"></i>
                <input
                  type="password"
                  name="senha"
                  class="form-control form-control-lg"
                  autocomplete="off"
                  id="exampleInputPassword1"
                  placeholder="Sua senha"
                />
                <a href=""> <i class="fa fa-eye icon-input-eye"></i></a>
              </div>
              <button
                type="submit"
                class="btn btn-primary btn-lg btn-block btn_entrar"
              >
                Entrar
              </button>
              <h5 class="text-dois">
                <a class="text-esqueci" href="/recovery-email"
                  >Esqueci a senha |
                </a>
                <a class="text-cadastro" href="/cadastro"
                  >Ainda não sou cadastrado</a
                >
              </h5>
            </form>
          </div>
        </div>

        <div class="col-md-7 lateral">
          <a href="/" style="text-decoration: none">
            <h6 class="text-back">Voltar ao site</h6>
          </a>
          <img
            src="../../../assets/images/imageLogin.png"
            class="rocket-login mt-5 mb-3"
            alt=""
            srcset=""
          />

          <h6 class="text-center text-explic mb-3">
            Somos uma plataforma inovadora desenvolvida exclusivamente para
            atender às necessidades das igrejas evangélicas. Nosso objetivo é
            otimizar e simplificar todos os setores da sua igreja, permitindo
            que você se concentre no que realmente importa: o seu ministério e a
            comunidade que você serve.
          </h6>

          <div
            style="display: block; justify-content: center; align-items: center"
          >
            <button
              type="submit"
              class="btn btn-primary btn-lg btn-block btn_cadastre"
            >
              Cadastre-se
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
};
</script>
