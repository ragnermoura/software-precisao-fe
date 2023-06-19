<template>
  <div class="wrapper">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-5" style="z-index: 2; margin-top: -20px !important;">
          <img
            src="../../../assets/images/logoPrecisao.png"
            class="img-fluid logo-auth"
            alt=""
          />
          <h1 class="text-auth ml-2">Vamos ao cadastro</h1>
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
              <div class="row">
                <div class="form-group col-md-6">
                  <i class="fa fa-user icon-input mt-2 ml-2"></i>
                  <input
                    type="text"
                    name="email"
                    class="form-control form-control-lg"
                    autocomplete="off"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Seu nome"
                  />
                </div>
                <div class="form-group col-md-6">
                  <i class="fa fa-user icon-input mt-2 ml-2"></i>
                  <input
                    type="text"
                    name="email"
                    class="form-control form-control-lg"
                    autocomplete="off"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Sobrenome"
                  />
                </div>
              </div>
              <div class="form-group">
                <i class="fa fa-phone icon-input"></i>
                <input
                  type="text"
                  name="email"
                  class="form-control form-control-lg"
                  autocomplete="off"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="(00) 0000-0000"
                />
              </div>
              <div class="form-group">
                <i class="fa fa-envelope icon-input"></i>
                <input
                  type="email"
                  name="email"
                  class="form-control form-control-lg"
                  autocomplete="off"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Digite um email válido "
                />
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <i class="fa fa-lock icon-input mt-2 ml-2"></i>
                  <input
                    type="password"
                    name="senha"
                    class="form-control form-control-lg"
                    autocomplete="off"
                    id="exampleInputPassword1"
                    placeholder="Senha"
                  />
                  <a href="">
                    <i
                      style="margin-right: 10px !important"
                      class="fa fa-eye icon-input-eye"
                    ></i
                  ></a>
                </div>
                <div class="form-group col-md-6">
                  <i class="fa fa-lock icon-input mt-2 ml-2"></i>
                  <input
                    type="password"
                    name="senha"
                    class="form-control form-control-lg"
                    autocomplete="off"
                    id="exampleInputPassword1"
                    placeholder="Confirme"
                  />
                  <i hidden
                    style="margin-right: 40px !important; color: rgb(177, 227, 126);"
                    class="fa fa-check icon-input-eye"
                  ></i>
                  <i hidden
                    style="margin-right: 40px !important; color: rgb(229, 91, 91);"
                    class="fa fa-ban icon-input-eye"
                  ></i>
                  <a href="">
                    <i
                      style="margin-right: 10px !important"
                      class="fa fa-eye icon-input-eye"
                    ></i
                  ></a>
                </div>
              </div>
              <div class="form-check mb-3">
                <input
                  style="
                    background-color: #f3822e !important;
                    border: 1px solid #f3822e !important;
                  "
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked
                />
                <label
                  style="font-weight: 300; color: rgb(46, 46, 46)"
                  class="form-check-label"
                  for="flexCheckChecked"
                >
                  Concordo com os
                  <strong style="color: #f3822e">Termos e Condições.</strong>
                </label>
              </div>

              <button
                type="submit"
                class="btn btn-primary btn-lg btn-block btn_entrar"
              >
                Cadastrar
              </button>
              <a href="/login"
                type="submit"
                class="btn btn-primary btn-lg btn-block btn_voltar"
              >
                Voltar ao Login
            </a>
            </form>
          </div>
        </div>

        <div class="col-md-7 lateral">
          <a href="/" style="text-decoration: none">
            <h6 class="text-back">Voltar ao site</h6>
          </a>
          <img
            src="../../../assets/images/imageCadastro.png"
            class="rocket-login mt-5 mb-3"
            alt=""
            srcset=""
          />

          <h6 class="text-center text-explic mb-3">
            Nosso objetivo é fornecer uma plataforma flexível e adaptável que
            atenda às necessidades únicas da sua igreja. Com o Software
            Precisão, você está no controle e pode personalizar cada aspecto da
            plataforma para se adequar à sua visão e estilo de trabalho.
          </h6>

          <div
            style="display: block; justify-content: center; align-items: center"
          >
            <a
              type="submit"
              href="/"
              class="btn btn-primary btn-lg btn-block btn_cadastre"
            >
              Saiba mais
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
