<template id="FinanceiroEntrada"> 
   <div class="col-lg-12 grid-margin stretch-card">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Entradas</h4>
          <p class="card-description">
            Veja toda as suas entradas :)
          </p>
          <div class="table-responsive">
            <table class="table table-striped" style="color: black !important;">
              <thead>
                <tr>
                  <th style="color: black !important;">
  
                  </th>
                  <th style="color: black !important;">
                    Razão Social
                  </th>
                  <th style="color: black !important;">
                    E-mail
                  </th>
                  <th style="color: black !important;">
                    Telefone
                  </th>
                  <th style="color: black !important;">
                    Valor
                  </th>
                  <th style="color: black !important;">
                    Status
                  </th>
                  <th style="color: black !important;">
                    Ação
                  </th>
  
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="py-1">
                    <img src="../../../../assets/images/faces/face16.jpg" alt="image" />
                  </td>
                  <td>
                    Herman Beck
                  </td>
                  <td>
                    ragnermoura@gmail.com
                  </td>
                  <td>
                    (21) 927 427 396
                  </td>
                  <td>
                    R$ 65,00
                  </td>
                  <td>
                    <span class="badge text-bg-success">Pago</span>
                  </td>
                  <td>
                    <button type="button"
                      style="width: 40px; height: 40px; justify-content: center; align-items: center; border-radius: 200px;"
                      class="btn btn-primary btn-sm"><i class="fa fa-folder-open"></i></button>
                  </td>
                </tr>
  
  
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

</template>
<script>
export default {
name: 'FinanceiroEntrada'
}
</script>