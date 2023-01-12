<template id="BarChart">

    <div class="col-lg-8 d-flex flex-column">
        <div class="row flex-grow">
            <div class="col-12 grid-margin stretch-card">
                <div class="card card-rounded">
                    <div class="card-body">
                        <div class="d-sm-flex justify-content-between align-items-start">
                            <div>
                                <h4 class="card-title card-title-dash">Visão Financeira</h4>
                                <p class="card-subtitle card-subtitle-dash">Acompanhe as metas do ano</p>
                            </div>
                            <div>
                                <div class="dropdown">
                                    <button class="btn btn-secondary dropdown-toggle toggle-dark btn-lg mb-0 me-0"
                                        type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false"> Este ano </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                        <h6 class="dropdown-header">Settings</h6>
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#">Separated link</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-sm-flex align-items-center mt-1 justify-content-between">
                            <div class="d-sm-flex align-items-center mt-4 justify-content-between">
                                <h2 class="me-2 fw-bold">R$ 60.000,00</h2>
                                <h4 class="me-2">Reais</h4>
                                <h4 class="text-success">(R$ 13.298,35)</h4>
                            </div>
                            <div class="me-3">
                                <div id="marketing-overview-legend"></div>
                            </div>
                        </div>
                        <div class="chartjs-bar-wrapper mt-3">
                            <canvas id="marketingOverview"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="col-lg-4 d-flex flex-column">
        <div class="row flex-grow">
            <div class="card card-rounded">
                <div class="card-body">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <div>
                                    <h4 class="card-title card-title-dash">Nossa equipe</h4>
                                </div>
                            </div>
                            <div class="mt-3">
                                <div
                                    class="wrapper d-flex align-items-center justify-content-between py-2 border-bottom">
                                    <div class="d-flex">
                                        <img class="img-sm rounded-10" src="../../../../../assets/images/faces/face1.jpg" alt="profile">
                                        <div class="wrapper ms-3">
                                            <p class="ms-1 mb-1 fw-bold">Willian Ragner</p>
                                            <small class="text-muted mb-0">CEO Co-Founder</small>
                                        </div>
                                    </div>
                                    <div class="text-muted text-small">
                                        <i  class="text-success fa fa-circle"></i>
                                    </div>
                                </div>
                                <div
                                    class="wrapper d-flex align-items-center justify-content-between py-2 border-bottom">
                                    <div class="d-flex">
                                        <img class="img-sm rounded-10" src="../../../../../assets/images/faces/face2.jpg" alt="profile">
                                        <div class="wrapper ms-3">
                                            <p class="ms-1 mb-1 fw-bold">Reginaldo Moura</p>
                                            <small class="text-muted mb-0">CEO Co-Founder</small>
                                        </div>
                                    </div>
                                    <div class="text-muted text-small">
                                        <i  class="text-success fa fa-circle"></i>
                                    </div>
                                </div>
                                <div
                                    class="wrapper d-flex align-items-center justify-content-between py-2 border-bottom">
                                    <div class="d-flex">
                                        <img class="img-sm rounded-10" src="../../../../../assets/images/faces/face3.jpg" alt="profile">
                                        <div class="wrapper ms-3">
                                            <p class="ms-1 mb-1 fw-bold">João Vitor</p>
                                            <small class="text-muted mb-0">CTO</small>
                                        </div>
                                    </div>
                                    <div class="text-muted text-small">
                                        <i  class="text-success fa fa-circle"></i>
                                    </div>
                                </div>

                                <div
                                    class="wrapper d-flex align-items-center justify-content-between py-2 border-bottom">
                                    <div class="d-flex">
                                        <img class="img-sm rounded-10" src="../../../../../assets/images/faces/face3.jpg" alt="profile">
                                     
                                        <div class="wrapper ms-3">
                                            <p class="ms-1 mb-1 fw-bold">Julía Franzoia</p>
                                            <small class="text-muted mb-0">CMO</small>
                                        </div>
                                    </div>
                                    <div class="text-muted text-small">
                                        <i  class="text-success fa fa-circle"></i>
                                    </div>
                                </div>
                               
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>





</template>
<script>
export default {
    name: 'BarChat'
}
</script>