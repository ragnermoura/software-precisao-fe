import { http } from "../config";



export default {
  cadastro: (nome, email, telefone, senha, code) => {    
    return http
      .post(
        "/usuarios/cadastro/",
        {
          nome: nome,
          email: email,
          telefone1: telefone,
          senha: senha,
          code: code
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((resposta) => {
        localStorage.setItem("envio", true);
        localStorage.setItem("id_user", resposta.data.usuarioCriado.id_user);
        localStorage.setItem("code", resposta.data.usuarioCriado.code);

        

        window.location.href = "/code-sms";
      })
      .catch((err) => console.log(err));
  },

  sendcode: (code, id) => {    
    return http
      .post(
        "/usuarios/code/",
        {
          code: code,
          id_user: id,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((resposta) => {

        console.log(resposta)
       
        // window.location.href = "/code-sms";
      })
      .catch((err) => console.log(err));
  },
};
