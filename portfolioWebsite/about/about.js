document.addEventListener('DOMContentLoaded', function(){
    gsap.from('nav', 1, {right:-500, delay:0.5})
    gsap.from('h2', 1, {opacity:0, delay:0.5})
    gsap.from('p', 1, {opacity:0, delay:0.5})
    gsap.from('.pic', 1, {opacity:0, delay:0.5})
    gsap.from('.animation', 1, {opacity:0, delay:1.5})


    const fountain= document.getElementById('pic').addEventListener('click', function() {

      var animation = document.getElementById("fountain");
       animation.classList.toggle('hidden')
     })

  })