<template id="Form">
    <form>
      <div class="form-group mt-4">
        <label for="exampleInputEmail1"><small><i class="fa fa-user"></i> Seu nome</small></label>
        <input
          type="text"
          class="form-control input-contato"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Ex. João Felipe"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1"><small><i class="fa fa-envelope"></i> E-mail</small></label>
        <input
          type="email"
          class="form-control input-contato"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="nome@dominio.com"
        />
        
      </div>

      <div class="form-group">
        <label for="exampleInputEmail1"><small><i class="fa fa-phone"></i> Telefone</small></label>
        <input
          type="text"
          class="form-control input-contato"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="+55 (00) 0000-0000"
        />
       
      </div>

      <div class="form-group">
        <label for="exampleInputEmail1"><small><i class="fa fa-edit"></i> Escreva</small></label>
        <textarea
          type="textarea"
          rows="3"
          class="form-control input-contato-area"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Digite aqui no que podemos te ajudar"
        ></textarea>
       
      </div>
      
      <div>
        <button type="button" class="btn btnSecondary" style="margin-top: -2px;">Enviar</button>
    </div>
      
    </form>

</template>

<script>

export default {
  name: "Form",
};
</script>

