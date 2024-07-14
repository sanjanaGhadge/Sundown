/*import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});
*/
console.log("hiii");
/*
document.addEventListener('DOMContentLoaded', function() {
    console.log("Script is running");
    */

    var elemC = document.querySelector("#elem-container");
    var fixed = document.querySelector("#fixed-image");

    console.log(elemC);
    console.log(fixed);

    if (elemC && fixed) {
        elemC.addEventListener("mouseenter", function() {
           
            fixed.style.display = "block"; // Ensure fixed is not null here
        });

        elemC.addEventListener("mouseleave", function() {
            
            fixed.style.display = "none"; // Ensure fixed is not null here
        });
    } else {
        console.log("One or both elements not found.");
        if (!elemC) console.log("Element with ID 'elem-container' not found.");
        if (!fixed) console.log("Element with ID 'fixed-image' not found.");
    }
 var elems= document.querySelectorAll(".element")
 elems.forEach(function(elem) {
    elem.addEventListener("mouseenter", function() {
        var image= elem.getAttribute("data-image")
        fixed.style.backgroundImage=`url(${image})`
    })
})


document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides:true,
        slidesPerView: 3,
        spaceBetween: 8, // Adjust the space between slides as needed
       
    });
});


var loader =document.querySelector('#loader')
setTimeout(function (){
 loader.style.top="-100%"
},3400)


 

   

  