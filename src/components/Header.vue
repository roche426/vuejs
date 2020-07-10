<template>
  <div class="bg-danger">
    <div class="navbar">
      <div class="col-md-2">
        <button type="button" class="btn btn-outline-secondary">About me</button>
      </div>
      <div class="col-md-8 text-md-center">
        <h2> Aurélien ROCHE ~ Développeur Web</h2>
      </div>
      <div class="col-md-1">
        <button type="button" class="btn btn-outline-secondary">Download CV</button>
      </div>
      <div class="col-md-1">
        <button type="button" class="btn-lg btn-outline-secondary"><i class="fab fa-linkedin"></i></button>
        <button type="button" class="btn-lg btn-outline-secondary"><i class="fab fa-github"></i></button>
      </div>
    </div>
    <div class="navbar-container">
      <ul>
        <li class="nav-link">
          <router-link to="/">Home</router-link>
          <div class="underline"></div>
        </li>
        <li class="nav-link">
          <router-link to="/passion">Passion</router-link>
          <div class="underline"></div>
        </li>
        <li class="nav-link">
          <router-link to="/contact">Contact</router-link>
          <div class="underline"></div>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>

  .navbar-container {
    text-align: center;
  }

  .navbar-container ul li {
    display: inline-block;
    font-size: 20px;
  }

  .navbar-container ul li a {
    color: #ffffff;
    text-decoration: none;
    display: inline-block;
    padding: 10px;
    transition: color 0.5s;
  }

  .navbar-container ul li .underline {
    height: 5px;
    background-color: transparent;
    width: 0%;
    transition: width 0.2s, background-color 0.5s;
    margin: 0 auto;
  }

  .navbar-container ul li a.router-link-exact-active + div {
    width: 100%;
    background-color: white;
  }

  .navbar-container ul li:hover .underline {
    background-color: white;
    width: 100%;
  }

  .navbar-container ul li:hover a {
  }

  .navbar-container ul li:active a {
    transition: none;
    color: rgba(255,255,255,0.76);
  }

  .navbar-container ul li:active .underline {
    transition: none;
    background-color: rgba(255,255,255,0.76);
  }
</style>
