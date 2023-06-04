<template id="Home">
  <div>
    <Navbar />
    <Header />
    <div class="row col-md-12 mt-4" style="padding: 2%">
      <div class="col-md-6">
        <h1 class="text-title">
          O que é o <span class="textIgreja">Software Precisão </span>?
        </h1>
        <h4 class="text-subtitle">Quem somos</h4>
        <p class="mt-4 text-simple">
          Somos uma plataforma inovadora desenvolvida exclusivamente para
          atender às necessidades das igrejas evangélicas. Nosso objetivo é
          otimizar e simplificar todos os setores da sua igreja, permitindo que
          você se concentre no que realmente importa: o seu ministério e a
          comunidade que você serve.
        </p>

        <div class="row">
          <div class="col-md-3">
            <h6 class="cheks"><i class="fa fa-check"></i> Secretaria</h6>
          </div>
          <div class="col-md-3">
            <h6 class="cheks"><i class="fa fa-check"></i> Tesouraria</h6>
          </div>
          <div class="col-md-3">
            <h6 class="cheks"><i class="fa fa-check"></i> Visitantes</h6>
          </div>
          <div class="col-md-3">
            <h6 class="cheks"><i class="fa fa-check"></i> Stream</h6>
          </div>
          <div class="col-md-4 mt-2">
            <h6 class="cheks"><i class="fa fa-check"></i> EBD & Ensino</h6>
          </div>
          <div class="col-md-4 mt-2">
            <h6 class="cheks"><i class="fa fa-check"></i> Gestão de Células</h6>
          </div>
          <div class="col-md-4 mt-2">
            <h6 class="cheks"><i class="fa fa-check"></i> Gestão Pastoral</h6>
          </div>
        </div>

        <p class="mt-3 text-simple">
          Com o Software Precisão, você terá acesso a uma gama de recursos e
          ferramentas poderosas projetadas para agilizar e aprimorar a
          administração da sua igreja. Desde a gestão financeira até o controle
          de membros, passando pelo agendamento de eventos e a comunicação
          eficiente, nossa plataforma abrangente foi cuidadosamente projetada
          para atender às necessidades específicas das igrejas evangélicas.
        </p>
      </div>
      <div class="col-md-6 mt-5">
        <img
          src="../../assets/images/dashboard.png"
          class="img-fluid img-dash"
          alt=""
          srcset=""
        />
      </div>
      <div class="row col-md-12 mt-4" style="padding: 2%">
        <div class="col-md-12">
          <Card />
        </div>
      </div>
    </div>
    <img src="../../assets/images/paralax.png" class="divisor" alt="" />

    <div class="row col-md-12 mt-4" style="padding: 2%">
      <div class="col-md-6 mt-5">
        <h1 class="text-title">Nós cuidamos da sua igreja</h1>
        <h4 class="text-subtitle">Soluções completas +</h4>
        <p class="mt-3 text-simple">
          <i class="fa fa-check"></i><strong> Toten de Atendimento</strong> -
          Uma inovação do Software Precisão, simplifica e agiliza suas
          interações na igreja. Com ele, você pode marcar gabinetes pastorais,
          registrar presenças, solicitar entrega de alimentos e muito mais, tudo
          de forma rápida e conveniente. Simplifique suas tarefas e aproveite ao
          máximo sua experiência com o Totem de Atendimento do Software
          Precisão.
        </p>
        <p class="mt-3 text-simple">
          <i class="fa fa-check"></i><strong> Coletor de dados</strong> - Tem
          estoques de instrumentos, roupas e alimentos da sua igreja? Controle o
          tempo de validade de alimentos ou saiba melhor sobre o estoque do
          patrimônio da sua igreja.
        </p>
        <p class="mt-3 text-simple">
          <i class="fa fa-check"></i><strong> Sensor de Energia</strong> -
          Analise o comportamento de consumo e tome decisões assertivas através
          dos relatórios em tempo real da nossa plataforma.
        </p>

        <ButtonSecondary />
      </div>

      <div class="col-md-6 row">
        <div class="col-md-4">
          <img
            src="../../assets/images/toten_image.png"
            class="img-fluid image-toten"
            alt=""
            srcset=""
          />
          <h6 class="text-center">Toten de Atendimento</h6>
        </div>
        <div class="col-md-4">
          <img
            src="../../assets/images/coletor.png"
            class="img-fluid image-toten"
            alt=""
            srcset=""
          />
          <h6 class="text-center">Coletor de dados</h6>
        </div>
        <div class="col-md-4">
          <img
            src="../../assets/images/energia.png"
            class="img-fluid image-toten"
            alt=""
            srcset=""
          />
          <h6 class="text-center">Sensor de Energia</h6>
        </div>
      </div>
      <div class="col-md-12 mt-5 text-center">
        <h1 class="text-title">
          <i class="fa fa-circle text-danger"></i> Transmissões de cultos ao
          vivo
        </h1>
        <h4 class="text-subtitle">Com maior alcance multiplo</h4>
      </div>
      <div class="col-md-8">
        <img
          src="../../assets/images/live.png"
          class="img-fluid img-live"
          alt=""
        />
      </div>

      <div class="col-md-4">
        <p class="mt-3 text-simple">
          <i class="fa fa-check"></i
          ><strong> Transmissões em todas as redes sociais</strong>
        </p>

        <p class="mt-3 text-simple">
          <i class="fa fa-check"></i><strong> Controle de cometários</strong>
        </p>
        <p class="mt-3 text-simple">
          <i class="fa fa-check"></i><strong> Edição de Layouts</strong>
        </p>
        <p class="mt-3 text-simple">
          <i class="fa fa-check"></i
          ><strong> Gerador de Qr-Code para Dízimos e Ofertas</strong>
        </p>
        <p class="mt-3 text-simple">
          <i class="fa fa-check"></i><strong> Relatórios de audiencia</strong>
        </p>
        <p class="mt-3 text-simple">
          <i class="fa fa-check"></i><strong> Comparativos de alcance</strong>
        </p>

        <ButtonSecondary />
      </div>
    </div>

    <div class="faixa mt-4" style="height: 130px">
      <div class="container">
        <!-- <h5 class="title-faixa"> Nossos parceiros e integradores</h5> -->
        <div class="row text-center">
          <div class="col-md-3 mt-3">
            <h1 class="number">277+</h1>
            <h5 class="description">Igrejas conectadas</h5>
          </div>
          <div class="col-md-3 mt-3">
            <h1 class="number">2K</h1>
            <h5 class="description">Usuários ativos</h5>
          </div>
          <div class="col-md-3 mt-3">
            <h1 class="number">24h</h1>
            <h5 class="description">Suporte</h5>
          </div>
          <div class="col-md-3 mt-3">
            <h1 class="number">120+</h1>
            <h5 class="description">Colaboradores</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-12 mt-5 text-center">
      <h1 class="text-title">Igrejas que usam</h1>
      <h4 class="text-subtitle">Conheça nosso </h4>
    </div>
    <div class="row col-md-12">
      <div class=""></div>
    </div>
  </div>
</template>
<script>
import Navbar from "../../components/website/navbar/index.vue";
import Header from "../../components/website/header/index.vue";
import Card from "../../components/website/card/index.vue";
import ButtonSecondary from "../../components/website/buttons/secondary.vue";
export default {
  name: "Home",
  components: {
    Navbar,
    Header,
    Card,
    ButtonSecondary,
  },
};
</script>
<style>
@import url("../../assets/css/navbar.css");
</style>
