const ulSlide1 = document.getElementById('ul-slide1');
const ulSlideImage1 = document.getElementById('slider1');

const ulSlide2 = document.getElementById('ul-slide2');
const ulSlideImage2 = document.getElementById('slider2');

const ulSlide3 = document.getElementById('ul-slide3');
const ulSlideImage3 = document.getElementById('slider3');

cargarEventos();

function cargarEventos() {

    //Se ejecuta cuando se presionar agregar carrito

}

// ulSlide1.addEventListener('mouseover', (e)=>{
//     if(e.target.id.includes("Producto")) {
//         var children = ulSlideImage1.children;
//         for (var i = 0; i < children.length; i++) {
//             if(children[i].id == e.target.id) {
//                 children[i].style.opacity = 1;
//                 e.currentTarget.children[i].style.border = "1px solid #ccc";
//             } else {
//                 children[i].style.opacity = 0;
//                 e.currentTarget.children[i].style.border = "0px solid #ccc";
//             }
//         }

//     }
// });

// ulSlide2.addEventListener('mouseover', (e) => {
//     if (e.target.id.includes("Producto")) {
//         var children = ulSlideImage2.children;
//         for (var i = 0; i < children.length; i++) {
//             if (children[i].id == e.target.id) {
//                 children[i].style.opacity = 1;
//                 e.currentTarget.children[i].style.border = "1px solid #ccc";
//             } else {
//                 children[i].style.opacity = 0;
//                 e.currentTarget.children[i].style.border = "0px solid #ccc";
//             }
//         }

//     }
// });

// ulSlide3.addEventListener('mouseover', (e) => {
//     if (e.target.id.includes("Producto")) {
//         var children = ulSlideImage3.children;
//         for (var i = 0; i < children.length; i++) {
//             if (children[i].id == e.target.id) {
//                 children[i].style.opacity = 1;
//                 e.currentTarget.children[i].style.border = "1px solid #ccc";
//             } else {
//                 children[i].style.opacity = 0;
//                 e.currentTarget.children[i].style.border = "0px solid #ccc";
//             }
//         }

//     }
// });

function changeImage(e , id) {
    var children = document.getElementById(id).children;
    for (var i = 0; i < children.length; i++) {
        if (children[i].id == e.id) {
            children[i].style.opacity = 1;
            e.parentElement.children[i].style.border = "1px solid #ccc";
        } else {
            children[i].style.opacity = 0;
            e.parentElement.children[i].style.border = "0px solid #ccc";
        }
    }
}