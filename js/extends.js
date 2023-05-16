
let htmlNavbar = `  

    <a class="logo" href="/"> </a>

    <li class=" nav-item dropdown">
        <a class="link links-nav dropdown-toggle" href="#" role="button" data-toggle="dropdown">Tecnología</a>
        <div class="links-nav dropdown-menu">
            <a class="dropdown-item" href="/categorias/tecnologia/index.html">Ver todas las Categorías</a>
            <a class="dropdown-item" href="/categorias/tecnologia/smarthome/index.html">SmartHome</a>
        </div>
    </li>    


    <li class=" nav-item dropdown">
        <a class="link links-nav dropdown-toggle" href="categorias/deportes/index.html" role="button" data-toggle="dropdown">Deportes</a>
        <div class="links-nav dropdown-menu">
            <a class="dropdown-item" href="/">Ver todas las Categorías</a>
        </div>
    </li>      


    <li class=" nav-item dropdown">
        <a class="link links-nav dropdown-toggle" href="#" role="button" data-toggle="dropdown"> Salud</a>
        <div class="links-nav dropdown-menu">
            <a class="dropdown-item" href="/categorias/salud/index.html">Ver todas las Categorías</a>
            <a class="dropdown-item" href="/categorias/salud/vacunas/index.html">Vacunas Chile</a>
           
        </div>
    </li>

    <li class=" nav-item dropdown">
        <a class="link links-nav dropdown-toggle" href="#" role="button" data-toggle="dropdown"> Programación</a>
        <div class="links-nav dropdown-menu">
            <a class="dropdown-item" href="/">Ver todas las Categorías</a>
           
        </div>
    </li>


    <li class=" nav-item dropdown">
        <a class="link links-nav dropdown-toggle" href="#" role="button" data-toggle="dropdown"> Animales</a>
        <div class="links-nav dropdown-menu">
            <a class="dropdown-item" href="/">Ver todas las Categorías</a>
           
        </div>
    </li>

    <li class=" nav-item dropdown">

        <a class="link links-nav dropdown-toggle" href="#" role="button" data-toggle="dropdown"> Entretenimiento</a>
        <div class="links-nav dropdown-menu">
            <a class="dropdown-item" href="/">Ver todas las Categorías</a>
        </div>
    </li>



    <div class="icon-responsive">
        <a onclick="navresponsive()"> <i  class="fas fa-bars"></i> </a>
    </div>
            
    <div id="button-responsive" class="navbar-responsive showmenu">
        <a class="link responsive-link" href="/categorias/tecnologia/index.html">Tecnología</a>
        <a class="link responsive-link" href="/pages/colegios ">Deportes</a>
        <a class="link responsive-link" href="/pages/no-disponible ">Salud</a>
        <a class="link responsive-link" href="/pages/no-disponible ">Programación</a>
        <a class="link responsive-link" href="/pages/no-disponible ">Animales</a>
        <a class="link responsive-link" href="/#ubicacion">Entretenimiento</a>

    </div>  `



    

    
let htmlFooter = `

<div class="container text-center text-md-start pt-5">
    <div class="row mt-3 text-footer">
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4"> Blog ... </h6>
            <p> Encuentra lo que estás buscando! </p>
        </div>
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
        <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">Categorías</h6>
            <p><a href="/pages/colegios " class="text-reset">Uniformes de colegio</a></p>

        </div>
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
        <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4"> -</h6>
            <p> <a href="/pages/no-disponible " class="text-reset">Merchandising</a></p>
            <p> <a href="/pages/no-disponible " class="text-reset">Otros</a> </p>
            <p><a href="#contacto" class="text-reset">Contacto</a></p>
            <p> <a href="#ubicacion" class="text-reset">Ubicación</a> </p>
        </div>
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 class="text-uppercase fw-bold mb-4">-</h6>
            <p><i class="fab fa-whatsapp me-3"></i></i> <a class="text-reset" target="_blank"  href="https://api.whatsapp.com/send?phone=56963593710">Whatsapp</a> </p>
            <p><i class="fab fa-facebook-f me-3"></i><a class="text-reset"  target="_blank" href="https://www.facebook.com/people/Styloschool-Uniformes/100057278446525/">Facebook</a> </p>
            <p><i class="fab fa-instagram me-3" ></i><a class="text-reset"  target="_blank" href="https://www.instagram.com/styloschool/">Instagram</a> </p>
        </div>
    </div>
</div>


<!-- Copyright -->
<div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
    © 2023 Todos los derechos a:
    <a class="text-reset fw-bold" href="/">aaa</a>
</div>
<!-- Copyright -->
`




let categories = `

<div class="categories">

    <h2>Explorar Categorías</h2>

    <ul class="list-group">
        <li class="list-group-item item-category"><a href="/categorias/tecnologia/index.html">Tecnología</a> </li>
        <li class="list-group-item  item-category"><a href="/categorias/deportes/index.html">Deportes</a></li>
        <li class="list-group-item  item-category"><a href="/categorias/recetas/index.html">Recetas</a></li>
        <li class="list-group-item  item-category"><a href="/categorias/salud/index.html">Salud</a></li>
        <li class="list-group-item  item-category"><a href="/categorias/programacion/index.html">Programación</a></li>
        <li class="list-group-item  item-category"><a href="/categorias/animales/index.html">Animales</a></li>
        <li class="list-group-item  item-category"><a href="/categorias/entretenimiento/index.html">Entretenimiento</a></li>
        <li class="list-group-item  item-category"><a href="/categorias/juegos/index.html">Juegos</a></li>
    </ul>


</div>

`




if (document.getElementById("extends_navbar"))
    document.getElementById("extends_navbar").innerHTML = htmlNavbar

if (document.getElementById("extends_categories"))
    document.getElementById("extends_categories").innerHTML = categories

if (document.getElementById("extends_footer"))
    document.getElementById("extends_footer").innerHTML = htmlFooter








