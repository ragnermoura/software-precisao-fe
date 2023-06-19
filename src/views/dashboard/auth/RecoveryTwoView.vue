<template id="Recovery-pass">
    <div class="wrapper">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-5" style="z-index: 2">
            <img
              src="../../../assets/images/logoPrecisao.png"
              class="img-fluid logo-auth mt-5"
              alt=""
            />
            <h1 class="text-auth ml-2">Calma que</h1>
            <h1 class="text-auth ml-2" style="margin-top: -10px;">vamos resolver</h1>
            <h5 class="text-recovery ml-2"> Digite sua nova senha e depois confirme.  
            </h5>

            <div class="login-area">
              <form autocomplete="off" action="" method="POST">
            
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
                <button
                  type="submit"
                  class="btn btn-primary btn-lg btn-block btn_entrar"
                >
                  Confirme
                </button>

                <a href="/login"
                type="submit"
                class="btn btn-primary btn-lg btn-block btn_voltar mt-3"
              >
                Voltar ao Login
            </a>
               
              </form>
            </div>
          </div>
  
          <div class="col-md-7 lateral">
            <a href="/" style="text-decoration: none;">
            <h6 class="text-back">Voltar ao site</h6>
          </a>
            <img
              src="../../../assets/images/imageRecovery.png"
              class="rocket-recovery mt-5 mb-3"
              alt=""
            
              srcset=""
            />
  
            <h6 class="text-center text-explic mb-3">Somos uma plataforma inovadora desenvolvida exclusivamente para atender às necessidades das igrejas evangélicas. Nosso objetivo é otimizar e simplificar todos os setores da sua igreja, permitindo que você se concentre no que realmente importa: o seu ministério e a comunidade que você serve.</h6>
  
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
    name: "Recovery-pass",
  };
  </script>
  