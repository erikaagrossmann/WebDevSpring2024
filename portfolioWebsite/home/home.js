document.addEventListener('DOMContentLoaded', function(){
    gsap.from('nav', 1, {right:-500, delay:0.5})
    gsap.from('p', 1, {opacity:0, delay:0.5})
    gsap.from('.profile', 1, {opacity:0, delay:0.5})
     gsap.from('.animation', 1, {opacity:0, delay:2})

     const swirls= document.getElementById('swirls').addEventListener('click', function() {

     var animation = document.getElementById("swirls");
     if (animation.style.display === "none") {
       animation.style.display = "block";
     } else {
       animation.style.display = "none";
     }
    })



  })