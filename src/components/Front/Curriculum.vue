<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-2">
      </div>
      <div class="col-md-8" align="center">
        <h2 class="my-4">En quelques mots</h2>
        <p>A travers ce site personnel, je souhaite vous partager mes expérences et mes compétences mais aussi vous présenter ma personnalité. </p>
        <p>Vous pourrez découvrir les différentes étapes de mon parcours professionnel, qui m'ont permis de traverser le monde du commerce afin d'arriver dans le monde numérique.</p>
        <p>Au dela de mon métier de développeur web, ma passion pour la course à pied me permet aussi de me challenger et de travailler dure pour toujours progresser</p>
      </div>
      <div class="col-md-2">
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-md-4" align="center">
        <h5 v-on:click="openCollapse('blockTechno')" >Technologies</h5>
        <div id="blockTechno" style="display: none">
            <img class="img-fluid m-3" src="../../assets/image/logo/html.png">
            <img class="img-fluid m-3" src="../../assets/image/logo/css.png">
            <img class="img-fluid m-3" src="../../assets/image/logo/php.png">
            <img class="img-fluid m-3" src="../../assets/image/logo/js.png">
            <img class="img-fluid m-3" src="../../assets/image/logo/symfony.png">
            <img class="img-fluid m-3" src="../../assets/image/logo/vuejs.png">
            <img class="img-fluid m-3" src="../../assets/image/logo/bootstrap.png">
            <img class="img-fluid m-3" src="../../assets/image/logo/jquery.png">
        </div>
      </div>
      <div class="col-md-2" align="center">
        <h5 v-on:click="openCollapse('blockBaseDonnees')" >Base de données</h5>
        <div id="blockBaseDonnees" style="display: none">
          <img class="img-fluid m-3" src="../../assets/image/logo/mongo.png">
          <img class="img-fluid m-3" src="../../assets/image/logo/mysql.png">
        </div>
      </div>
      <div class="col-md-4" align="center">
        <h5 v-on:click="openCollapse('blockLogiciel')" >Outils/Logiciels</h5>
        <div id="blockLogiciel" style="display: none">
          <img class="img-fluid m-3" src="../../assets/image/logo/docker.png">
          <img class="img-fluid m-3" src="../../assets/image/logo/git.png">
          <img class="img-fluid m-3" src="../../assets/image/logo/kibana.png">
          <img class="img-fluid m-3" src="../../assets/image/logo/linux.png">
          <img class="img-fluid m-3" src="../../assets/image/logo/phpstorm.png">
          <img class="img-fluid m-3" src="../../assets/image/logo/postman.png">
        </div>
      </div>
      <div class="col-md-2" align="center">
        <h5 v-on:click="openCollapse('blockMethode')" >Méthodes</h5>
        <div id="blockMethode" style="display: none">
          <img class="img-fluid m-3" src="../../assets/image/logo/scrum.png">
          <img class="img-fluid m-3" src="../../assets/image/logo/kanban.png">
        </div>
      </div>
    </div>
    <div class="row mt-5 offset-md-1">
      <div class="col-md-4">
        <h5 class="border-bottom">Expériences</h5>
        <div class="row">
          <div class="col-md-4" align="center">
            <p class="mt-3"><img src="../../assets/image/experience/interpol.png" alt=""></p>
            <p>Développeur Web<br>Déc 2018</p>
            <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>
          </div>
          <div class="col-md-4" align="center">
            <p class="mt-3"><img src="../../assets/image/experience/sfr.png" alt=""></p>
            <p>Développeur Web<br>Jan - Oct 2019</p>
            <a href="#" class="btn btn-primary">En savoir +</a>
          </div>
          <div class="col-md-4" align="center">
            <p class="mt-3"><img src="../../assets/image/experience/alptis.png" alt=""></p>
            <p>Développeur Web<br>Oct 2019 - aujourd'hui</p>
            <a href="#" class="btn btn-primary">En savoir +</a>
          </div>
        </div>
      </div>
      <div class="col-md-3 offset-md-1">
        <h5 class="border-bottom">Portefolio</h5>
        <div class="row">

        </div>
      </div>
      <div class="col-md-2 offset-md-1">
        <h5 class="border-bottom">Formations</h5>
        <div align="center">
          <p class="mt-3"><img src="../../assets/image/experience/alptis.png" alt=""></p>
          <p>Développeur PHP<br>Décembre 2018</p>
          <a href="#" class="btn btn-primary">En savoir +</a>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <mdb-btn color="primary" @click.native="modal = true">Launch demo modal</mdb-btn>
    <mdb-modal :show="modal" @close="modal = false">
      <mdb-modal-header>
        <mdb-modal-title>Modal title</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body>...</mdb-modal-body>
      <mdb-modal-footer>
        <mdb-btn color="secondary" @click.native="modal = false">Close</mdb-btn>
        <mdb-btn color="primary">Save changes</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>
  </div>
</template>

<script>
export default {
  name: 'Curriculum',

  methods: {
    openCollapse: function (id) {
      let element = $('#' + id)
      element.toggle()
    },
    openModal: function (id) {
      let element = $('#' + id)
      console.log(element)
      element.toggle()
    }
  }
}

</script>

<style>

</style>
