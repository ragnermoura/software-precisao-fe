<template>
  <div class="wrapper">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-5" style="z-index: 2; margin-top: -20px;">
          <img
            src="../../../assets/images/logoPrecisao.png"
            class="img-fluid logo-auth"
            alt=""
          />
          <h1 class="text-auth ml-2">precisamos dos</h1>
          <h1 class="text-auth ml-2" style="margin-top: -10px">
            dados da sua igreja
          </h1>
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
            <div class="form-check form-switch mb-3">
              <input
                class="form-check-input "
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                checked
              />
              <label class="form-check-label" for="flexSwitchCheckChecked"
                >Você é o pastor da igreja?</label
              >
            </div>
            <form autocomplete="off" action="" method="POST">
              
              <div class="form-group">
                <i class="fa fa-user icon-input"></i>
                <input
                  type="text"
                  name="email"
                  
                  class="form-control form-control-lg"
                  autocomplete="off"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Qual o nome do Pastor da igreja?"
                />
              </div>
              <div class="form-group">
                <i class="fa fa-question icon-input"></i>
                <input
                  type="text"
                  name="email"
                  class="form-control form-control-lg"
                  autocomplete="off"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Qual o nome da sua igreja?"
                />
              </div>
              <div class="form-group">
                <i class="fa fa-question icon-input"></i>
                <input
                  type="number"
                  name="email"
                  class="form-control form-control-lg"
                  autocomplete="off"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Quantos membros tem a sua igreja?"
                />
              </div>
              <div class="form-group">
                <label for=""><i class="fa fa-exclamation-circle"></i> Vamos precisar da logo da sua igreja</label>
                <input
                  type="file"
                  name="email"
                  class="form-control form-control-lg"
                  autocomplete="off"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Quantos membros tem a sua igreja?"
                />
              </div>
              
            

              <button
                type="submit"
                class="btn btn-primary btn-lg btn-block btn_entrar"
              >
                Cadastrar
              </button>
            
            </form>
          </div>
        </div>

        <div class="col-md-7 lateral-profile">
          
         

          <h6 class="text-center text-explic mb-3" style="margin-top: 70% !important; font-size: 20px; text-align: center !important;">
            A Primeira plataforma do Brasil que integra 100% todos os serviços da sua igreja.
          </h6>

          <div
            style="display: block; justify-content: center; align-items: center"
          >
            <a
              type="submit"
              href="/"
              class="btn btn-primary btn-lg btn-block btn_cadastre"
            >
              Pagar agora
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
