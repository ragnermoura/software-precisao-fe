<template id="Recovery-email">
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
            <h5 class="text-recovery ml-2"> Digite o email cadastrado. Vamos enviar sua tudo para recuperar seu acesso.  
            </h5>

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
               
                <button
                  type="submit"
                  class="btn btn-primary btn-lg btn-block btn_entrar"
                >
                  Enviar
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
    name: "Recovery-email",
  };
  </script>
  