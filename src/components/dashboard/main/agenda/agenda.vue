<template id="Calendario">
    <div class="col-md-4 grid-margin stretch-card">
        <div class="card card-dados">
            <div class="card-body">
                <h4 class="card-title"><i class="fa fa-calendar"></i> Compromisso</h4>
                <p class="card-description">
                    Insira todas as informações sobre o seu compromisso :)
                </p>
                <form class="forms-sample">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group row">
                                <div class="form-group">
                                    <label for="exampleInputUsername1">Título do compromisso</label>
                                    <input type="text" class="form-control" id="exampleInputUsername1"
                                        placeholder="Ex.: Reunião de alinhamento">
                                </div>

                                <div class="form-group">
                                    <label for="exampleInputUsername1">Data de início</label>
                                    <input type="date" class="form-control" id="exampleInputUsername1"
                                        placeholder="Ex.: Reunião de alinhamento">
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputUsername1">Data de fim</label>
                                    <input type="date" class="form-control" id="exampleInputUsername1"
                                        placeholder="Ex.: Reunião de alinhamento">
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputUsername1">Cor do seu evento</label>
                                    <input type="color" class="form-control" id="exampleInputUsername1"
                                        placeholder="Ex.: Reunião de alinhamento">
                                </div>

                                
                                <div class="d-grid gap-2">
                                    
                                    <button class="btn btn-primary" type="button">Guardar</button>
                                </div>
                            
                            </div>
                        </div>
                        
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div class="col-md-8 grid-margin stretch-card">
        <div class="card card-dados">
            <div class="card-body">
                <div id='calendar'></div>
            </div>
        </div>
    </div>
</template>

<script>




export default {
    name: 'Calendario',

}
</script>