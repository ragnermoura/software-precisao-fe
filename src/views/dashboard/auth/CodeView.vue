<template id="Code">
  <div class="wrapper">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 lateral2">
          <h1 class="text-confimation text-center mt-5">
            Você vai receber um código de confirmação
          </h1>
          <div class="input-area mt-2" style="margin-top: 2% !important">
            <p class="text-center text-light">30 segundos</p>
            <div class="row">
              <div class="col-md-4"></div>
              <div class="col-md-1" style="margin-left: 5.5% !important">
                <div class="form-group">
                  <input
                    maxlength="1"
                    type="text"
                    name="code1"
                    class="form-control form-control-lg input-code"
                    autocomplete="off"
                    aria-describedby="emailHelp"
                    placeholder="0"
                  />
                </div>
              </div>
              <div class="col-md-1" style="margin-left: -40px !important">
                <div class="form-group">
                  <input
                    maxlength="1"
                    type="text"
                    name="code1"
                    class="form-control form-control-lg input-code"
                    autocomplete="off"
                    aria-describedby="emailHelp"
                    placeholder="0"
                  />
                </div>
              </div>
              <div class="col-md-1" style="margin-left: -40px !important">
                <div class="form-group">
                  <input
                    maxlength="1"
                    type="text"
                    name="code1"
                    class="form-control form-control-lg input-code"
                    autocomplete="off"
                    aria-describedby="emailHelp"
                    placeholder="0"
                  />
                </div>
              </div>
              <div class="col-md-1" style="margin-left: -40px !important">
                <div class="form-group">
                  <input
                    maxlength="1"
                    type="text"
                    name="code1"
                    class="form-control form-control-lg input-code"
                    autocomplete="off"
                    aria-describedby="emailHelp"
                    placeholder="0"
                  />
                </div>
              </div>
              <div class="col-md-4"></div>
            </div>
            <h5 hidden class="text-light text-center text-alert mt-3 mb-4" id="igual">
              <i class="fa fa-check"></i> É igual
            </h5>
            <h5
              hidden
              class="text-danger text-center text-alert mt-3 mb-4"
              id="igual"
            >
              <i class="fa fa-ban"></i> Não conferem
            </h5>
            <div class="col-md-12">
              <button
                type="submit"
                class="btn btn-primary btn-lg btn-block btn_code"
              >
                Validar
              </button>
              <h4 class="text-center mt-3 mb-3 text-sms">reenviar sms</h4>
              <button
                type="submit"
                class="btn btn-primary btn-lg btn-block btn_code-email"
              >
                Enviar por e-mail
              </button>
              <h5 class="text-dois text-center">
                <a class="text-dark" href="/cadastro"
                  >Não recebi nada
                </a>
               
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Code",
};
</script>
