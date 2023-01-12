<template id="CadTeam">
  <div class="col-md-12 grid-margin stretch-card">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">Sua Equipe</h4>
        <p class="card-description">
          Preenca as suas informações e junte-se a equipe Precisão :)
        </p>
        <form class="forms-sample">
          <div class="row">
            <div class="col-md-6">
              <div class="form-group row">
                <div class="form-group">
                  <label for="exampleInputUsername1">Seu nome</label>
                  <input type="text" class="form-control" id="exampleInputUsername1" placeholder="Digite seu nome">
                </div>
              </div>

              <div class="form-group row">
                <div class="form-group">
                  <label for="exampleInputEmail1">Seu E-mail</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Digite seu e-mail">
                </div>
              </div>

              <div class="form-group row">
                <div class="form-group">
                  <label for="exampleInputEmail1">É desenvolvedor? Qual seu GitHub?</label>
                  <input type="text" class="form-control" id="exampleInputEmail1" placeholder="@github">
                </div>
              </div>


              <div class="form-group row">
                <div class="form-group">
                  <label for="exampleInputUsername1">Seu endereço</label>
                  <input type="text" class="form-control" id="exampleInputUsername1"
                    placeholder="Ex.: Rua das Belas Artes, 55 - São Paulo ">
                </div>
              </div>

              <div class="form-group row">
                <div class="form-group">
                  <label for="exampleInputPassword1">Qual sua função?</label>
                  <select class="form-control" id="exampleInputUsername1">
                    <option>Selecione</option>
                    <option>Diretor Comercial</option>
                    <option>Diretor Financeiro</option>
                    <option>Diretor(a) de Marketing </option>
                    <option>Diretor(a) de Tecnologia </option>
                    <option>Desenvolvedor Jr.</option>
                    <option>Desenvolvedor Pl.</option>
                    <option>Desenvolvedor Sr.</option>
                    <option>Gerente de Venda</option>
                    <option>Vendedor(a)</option>
                  </select>
                </div>
              </div>
              <div class="form-group row">
                <div class="form-group">
                  <label for="exampleInputUsername1">Data de inínio na empresa</label>
                  <input type="date" class="form-control" id="exampleInputUsername1">
                </div>
              </div>

              <div class="form-group row">
                <div class="form-group">
                  <label for="exampleInputUsername1">Envie-nos uma foto sua</label>
                  <input type="file" class="form-control" id="exampleInputUsername1">
                </div>
              </div>

            </div>

            <!-- Lado b -->

            <div class="col-md-6">

              <div class="form-group row">
                <div class="form-group">
                  <label for="exampleInputEmail1">Seu Telefone</label>
                  <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Ex.: (00) 00000-0000">
                </div>
              </div>

              <div class="form-group row">
                <div class="form-group">
                  <label for="exampleInputEmail1">Seu LinkedIn</label>
                  <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Digite seu LinkedIn">
                </div>
              </div>

              <div class="form-group row">
                <div class="form-group">
                  <label for="exampleInputUsername1">Data de nascimento</label>
                  <input type="date" class="form-control" id="exampleInputUsername1">
                </div>
              </div>

              <div class="form-group row">
                <div class="form-group">
                  <label for="exampleInputUsername1">Estado</label>
                  <select class="form-control" id="exampleInputUsername1">
                    <option>Selecione</option>
                    <option>Rio de Janeiro</option>
                    <option>Selecione</option>

                  </select>
                </div>
              </div>



              <div class="form-group row">
                <div class="form-group">
                  <label for="exampleInputUsername1">Responde a quem?</label>
                  <select class="form-control" id="exampleInputUsername1">
                    <option>Selecione</option>
                  </select>
                </div>
              </div>

              <div class="form-group row">
                <div class="form-group">
                  <label for="exampleInputPassword1">Conte-nos um pouco sobre você</label>
                  <textarea type="textarea" style="height: 70px;" class="form-control" id="exampleInputPassword1"
                    placeholder="Password">

                  </textarea>
                </div>
              </div>
              <div style="float: right;">
                <button type="submit" class="btn btn-primary me-2">Gravar</button>
                <button class="btn btn-light">Cancel</button>
              </div>

            </div>
          </div>
        </form>
      </div>
    </div>
  </div>


</template>
<script>
export default {
  name: 'CadTeam'
}
</script>
