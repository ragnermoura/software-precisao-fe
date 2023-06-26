import { http } from "../config";
import VueJwtDecode from "vue-jwt-decode";

export default {
  login: (youEmail, youPass) => {
    http
      .post(
        "/login/",
        {
          email: youEmail,
          senha: youPass,
        },

        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          },
        }
      )
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem("token", token);
        let decode = VueJwtDecode.decode(token);

        if (decode.id_status == 3 && decode.id_nivel == 2) {
          window.location.href = "/#/dashboard-client-perfil";
        }
        if (decode.id_status == 1 && decode.id_nivel== 2) {
          window.location.href = "/#/dashboard-client";
        }
        if (decode.id_status == 1 && decode.id_nivel == 1) {
          window.location.href = "/#/dashboard-admin";
        }
        if (decode.id_status == 3 && decode.id_nivel == 3) {
          window.location.href = "/#/dashboard-entregador-perfil";
        }
        if (decode.id_status == 1 && decode.id_nivel == 3) {
          window.location.href = "/#/dashboard-entregador";
        }
      })
      .catch((error) => {
        console.log("Error ========>", error);
      });
  },


};