<template id="MainMenu">
  <nav class="sidebar sidebar-offcanvas" id="sidebar">
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link" href="/dashboard/admin">
          <i class="mdi mdi-monitor-dashboard menu-icon"></i>
          <span class="menu-title">Dashboard</span>
        </a>
      </li>
      <li class="nav-item nav-category">Para Você</li>
      <li class="nav-item">
        <a class="nav-link" href="">
          <i class="mdi mdi-calendar menu-icon"></i>
          <span class="menu-title">Agenda</span>
        </a>
      </li>

      <li class="nav-item nav-category">Tesouraria</li>
      <li class="nav-item">
        <a class="nav-link" data-bs-toggle="collapse" href="#" aria-expanded="false" aria-controls="ui-basic">
          <i class="menu-icon mdi mdi-finance"></i>
          <span class="menu-title">Entradas</span>
          <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="ui-basic">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item"> <a class="nav-link" href="#">Assinaturas</a></li>

          </ul>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-bs-toggle="collapse" href="#" aria-expanded="false" aria-controls="ui-basic">
          <i class="menu-icon mdi mdi-trending-down"></i>
          <span class="menu-title">Saídas</span>
          <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="ui-basic">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item"> <a class="nav-link" href="#">Assinaturas</a></li>

          </ul>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-bs-toggle="collapse" href="#" aria-expanded="false" aria-controls="ui-basic">
          <i class="menu-icon mdi mdi-heart"></i>
          <span class="menu-title">Doações</span>
          <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="ui-basic">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item"> <a class="nav-link" href="#">Assinaturas</a></li>

          </ul>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="">
          <i class="mdi mdi-food-apple menu-icon"></i>
          <span class="menu-title">Social</span>
        </a>
      </li>
      <li class="nav-item nav-category">Som & Estrutura</li>
      <li class="nav-item">
        <a class="nav-link" href="">
          <i class="mdi mdi-headphones menu-icon"></i>
          <span class="menu-title">Mesa de som</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="">
          <i class="mdi mdi-lava-lamp menu-icon"></i>
          <span class="menu-title">Luz</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="">
          <i class="mdi mdi-camcorder menu-icon"></i>
          <span class="menu-title">Live & Transmissões</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="">
          <i class="mdi mdi-camcorder-box menu-icon"></i>
          <span class="menu-title">Gravações</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="">
          <i class="mdi mdi-face menu-icon"></i>
          <span class="menu-title">Reconhecimento Facial</span>
        </a>
      </li>
      <li class="nav-item nav-category">Visitantes</li>
      <li class="nav-item">
        <a class="nav-link" data-bs-toggle="collapse" href="#form-elements" aria-expanded="false"
          aria-controls="form-elements">
          <i class="menu-icon mdi mdi-account-check"></i>
          <span class="menu-title">Visitantes</span>
          <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="form-elements">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item"><a class="nav-link" href="pages/forms/basic_elements.html">Lista de usuários</a></li>
          </ul>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-bs-toggle="collapse" href="#form-elements" aria-expanded="false"
          aria-controls="form-elements">
          <i class="menu-icon mdi mdi-plus"></i>
          <span class="menu-title">Cadastrar visitante</span>
          <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="form-elements">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item"><a class="nav-link" href="pages/forms/basic_elements.html">Lista de usuários</a></li>
          </ul>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-bs-toggle="collapse" href="#form-elements" aria-expanded="false"
          aria-controls="form-elements">
          <i class="menu-icon mdi mdi-format-list-bulleted"></i>
          <span class="menu-title">Lista de visitante</span>
          <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="form-elements">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item"><a class="nav-link" href="pages/forms/basic_elements.html">Lista de usuários</a></li>
          </ul>
        </div>
      </li>
      <li class="nav-item nav-category">Atendimento & Gestão</li>
     
      <li class="nav-item">
        <a class="nav-link" href="">
          <i class="mdi mdi-shield menu-icon"></i>
          <span class="menu-title">Suporte</span>
        </a>
      </li>
      <li class="nav-item nav-category">Empresa</li>
      <li class="nav-item">
        <a class="nav-link" href="/dashboard/admin/cad-team">
          <i class="mdi mdi-account-group menu-icon"></i>
          <span class="menu-title">Nosso Time</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/dashboard/admin/list-team">
          <i class="mdi mdi-format-list-bulleted menu-icon"></i>
          <span class="menu-title">Lista de equipe</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/dashboard/admin/organization">
          <i class="mdi mdi-sitemap menu-icon"></i>
          <span class="menu-title">Organograma</span>
        </a>
      </li>
      <li class="nav-item nav-category">Comercial</li>
      <li class="nav-item">
        <a class="nav-link" href="/dashboard/admin/cad-lead">
          <i class="mdi mdi-plus menu-icon"></i>
          <span class="menu-title">Cadastro de Leads</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/dashboard/admin/funil-vendas">
          <i class="mdi mdi-filter menu-icon"></i>
          <span class="menu-title">Funil de Venda</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/dashboard/admin/list-lead">
          <i class="mdi mdi-format-list-bulleted menu-icon"></i>
          <span class="menu-title">Lista de Leads</span>
        </a>
      </li>

      <li class="nav-item nav-category">Documentos</li>
      <li class="nav-item">
        <a class="nav-link" href="http://bootstrapdash.com/demo/star-admin2-free/docs/documentation.html">
          <i class="menu-icon mdi mdi-file-document"></i>
          <span class="menu-title">Termos e condições</span>
        </a>
      </li>
    </ul>
  </nav>

</template>
<script>
export default {
  name: 'MainMenu'
}
</script>