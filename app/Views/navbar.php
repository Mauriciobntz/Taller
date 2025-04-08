
<!-- navbar -->


<section>
  <nav class="navbar navbar-expand-lg bg-danger rounded-pill mt-3">
    <div class="container-fluid d-flex justify-content-between align-items-center">
      <!-- Main Navbar Toggle Button (para abrir el offcanvas en pantallas pequeÃ±as) -->
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar Brand (centrado en todo momento, con flexbox) -->
      <a class="navbar-brand text-white mx-auto" href="#" style="flex-grow: 1; text-align: center;">
        <b>FOLLOW</b>
      </a>

    <ul class="navbar-nav mx-auto d-none d-lg-flex">
      <!-- Enlaces del proyecto 1 -->
      <li class="nav-item">
        <a class="nav-link text-white fw-bold" href="<?php echo base_url('principal'); ?>">Principal</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white fw-bold" href="proyecto2/catalogo">Servicios</a>
      </li>      <li class="nav-item">
        <a class="nav-link text-white fw-bold" href="<?php echo base_url('somos'); ?>">Quienes Somos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white fw-bold" href="proyecto2/consultas">Contacto</a>
      </li>
    </ul>

      <!-- Search Toggle Button -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSearch" aria-controls="navbarSearch" aria-expanded="false" aria-label="Toggle search">
        <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg></span>
      </button>

      <!-- Search Form -->
      <div class="collapse navbar-collapse justify-content-end" id="navbarSearch">
        <form class="d-flex" role="search">
          <input class="form-control me-2 rounded-pill" type="search" placeholder="Buscar" aria-label="search">
          <button class="btn btn-light rounded-pill" type="submit">Buscar</button>
        </form>
      </div>
    </div>
  </nav>

  <!-- Offcanvas (solo visible en pantallas pequeÃ±as) -->
  <div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="staticBackdropLabel">Menu Lateral</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</section>

<!-- END -->
