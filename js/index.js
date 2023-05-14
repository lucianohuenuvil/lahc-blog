


function navresponsive () {
    let buttonNav = document.getElementById("button-responsive");
    switch (buttonNav.style.left){
        case "":
            buttonNav.style.left = "0%"
            break;
        case "0%":
            buttonNav.style.left = "-100%";
            break;
        case "-100%":
            buttonNav.style.left = "0%";
            break;
    }
  } 


const paths = {

    category: '/categorias/index.html',

    technology: '/categorias/tecnologia/index.html',

    smarthome: '/categorias/tecnologia/smarthome/index.html',
    health:'/categorias/salud/index.html',
    vaccines:'/categorias/salud/vacunas/index.html',
    vaccines_inf_g:'/categorias/salud/vacunas/inf-general/index.html',




    sport:'/categorias/tecnologia/index.html',
    programming:'/categorias/tecnologia/index.html',
    animals:'/categorias/tecnologia/index.html',
    entertainment:'/categorias/tecnologia/index.html',
    recipes:'/categorias/tecnologia/index.html'

}
  


const pathname = window.location.pathname.replace(".html", "");



const pathCategories = [

    {
        // Categorías 
        path:'/categorias/index',
        pathLink: `<li> <a href="/">   Inicio</a>   <i class="fa-sharp fa-solid fa-angle-right"></i> </li>
        <li>Categorías</li>`
    },

    {
        // TECNOLOGÍA
        path: '/categorias/tecnologia/index',
        pathLink: `<li> <a href="/">Inicio</a>   <i class="fa-sharp fa-solid fa-angle-right"></i>
        <li> <a href="${ paths.category }"> Categorías</a>   <i class="fa-sharp fa-solid fa-angle-right"></i>
        <li>Tecnología</li>`
    },

    {
        // DEPORTES
        path: '/categorias/deportes/index',
        pathLink: `<li> <a href="/">Inicio</a>   <i class="fa-sharp fa-solid fa-angle-right"></i>
        <li> <a href="${ paths.category }"> Categorías</a>   <i class="fa-sharp fa-solid fa-angle-right"></i>
        <li>Deportes</li>`
    },

    {
        // SALUD
        path: '/categorias/salud/index',
        pathLink: `<li> <a href="/">Inicio</a>   <i class="fa-sharp fa-solid fa-angle-right"></i>
        <li> <a href="${ paths.category }"> Categorías</a>   <i class="fa-sharp fa-solid fa-angle-right"></i>
        <li>Salud</li>`
    },

    {
        // PROGRAMACION
        path: '/categorias/programacion/index',
        pathLink: `<li> <a href="/">Inicio</a>   <i class="fa-sharp fa-solid fa-angle-right"></i>
        <li> <a href="${ paths.category }"> Categorías</a>   <i class="fa-sharp fa-solid fa-angle-right"></i>
        <li>Programación</li>`
    },

    {
        // ANIMALES
        path: '/categorias/animales/index',
        pathLink: `<li> <a href="/">Inicio</a>   <i class="fa-sharp fa-solid fa-angle-right"></i>
        <li> <a href="${ paths.category }"> Categorías</a>   <i class="fa-sharp fa-solid fa-angle-right"></i>
        <li>Animales</li>`
    },

    {
        // ENTRETENIMIENTO
        path: '/categorias/entretenimiento/index',
        pathLink: `<li> <a href="/">Inicio</a>   <i class="fa-sharp fa-solid fa-angle-right"></i>
        <li> <a href="${ paths.category }"> Categorías</a>   <i class="fa-sharp fa-solid fa-angle-right"></i>
        <li>Entretenimiento</li>`
    },


    // SUBCategorías

    {
        // SMARTHOME 
        path: '/categorias/tecnologia/smarthome/index',
        pathLink: `<li> <a href="/"> Inicio</a> <i class="fa-sharp fa-solid fa-angle-right"></i>
        <li> <a href="${ paths.category }"> Categorías</a> <i class="fa-sharp fa-solid fa-angle-right"></i>
        <li> <a href="${ paths.technology }"> Tecnología</a> <i class="fa-sharp fa-solid fa-angle-right"></i>
        <li> <a href="${ paths.smarthome }"> SmartHome</a>`
    },

    {
        // VACUNAS 
        path: '/categorias/salud/vacunas/index',
        pathLink: `<li> <a href="/"> Inicio</a> <i class="fa-sharp fa-solid fa-angle-right"></i>
        <li> <a href="${ paths.category }"> Categorías</a> <i class="fa-sharp fa-solid fa-angle-right"></i>
        <li> <a href="${ paths.health }"> Salud</a> <i class="fa-sharp fa-solid fa-angle-right"></i>
        <li> <a href="${ paths.vaccines }"> Vacunas</a> `
    },

    {
        // VACUNAS-INF-GENERAL
        path: '/categorias/salud/vacunas/inf-general/index',
        pathLink: `<li> <a href="/"> Inicio</a> <i class="fa-sharp fa-solid fa-angle-right"></i>
        <li> <a href="${ paths.category }"> Categorías</a> <i class="fa-sharp fa-solid fa-angle-right"></i>
        <li> <a href="${ paths.health }"> Salud</a> <i class="fa-sharp fa-solid fa-angle-right"></i>
        <li> <a href="${ paths.vaccines }"> Vacunas</a>  <i class="fa-sharp fa-solid fa-angle-right"></i>
        <li> <a href="${ paths.vaccines_inf_g }"> Información general</a> `
    },


]


const pathArticle = [

    {
        // FROM SMARTHOME 
        path:'/categorias/tecnologia/smarthome/articles/',
        pathLink: `<li> <a href="/"> Inicio</a> <i class="fa-sharp fa-solid fa-angle-right"></i>
        <li> <a href="${ paths.category }"> Categorías</a> <i class="fa-sharp fa-solid fa-angle-right"></i>
        <li> <a href="${ paths.technology }"> Tecnología</a> <i class="fa-sharp fa-solid fa-angle-right"></i>
        <li> <a href="${ paths.smarthome }"> SmartHome</a>`
    },


    {
        // FROM VACUNAS-INF-GENERAL
        path: '/categorias/salud/vacunas/inf-general/articulos',
        pathLink: `<li> <a href="/"> Inicio</a> <i class="fa-sharp fa-solid fa-angle-right"></i>
        <li> <a href="${ paths.category }"> Categorías</a> <i class="fa-sharp fa-solid fa-angle-right"></i>
        <li> <a href="${ paths.health }"> Salud</a> <i class="fa-sharp fa-solid fa-angle-right"></i>
        <li> <a href="${ paths.vaccines }"> Vacunas</a>  <i class="fa-sharp fa-solid fa-angle-right"></i>
        <li> <a href="${ paths.vaccines_inf_g }"> Información general</a>  <i class="fa-sharp fa-solid fa-angle-right"></i>
        <li>Artículo</li>`
    },





]











const findPath = pathCategories.find( ob => pathname.includes(ob.path))


console.log(findPath)




if (!findPath){
    const finpath_article = pathArticle.find( ob => pathname.includes(ob.path))
    if (document.getElementById("breadcrumb")) document.getElementById("breadcrumb").innerHTML = finpath_article.pathLink;

} else {

    if (document.getElementById("breadcrumb"))document.getElementById("breadcrumb").innerHTML = findPath.pathLink;
}





    

