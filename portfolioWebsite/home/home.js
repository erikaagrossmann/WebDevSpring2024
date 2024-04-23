document.addEventListener('DOMContentLoaded', function(){
    //gsap.from('body', 1.5, {opacity:0})
    gsap.from('nav', 1, {right:-500, delay:0.5})
    gsap.from('p', 1, {opacity:0, delay:0.5})
    gsap.from('.profile', 1, {opacity:0, delay:0.75})

    // this.getElementById('profile').addEventListener('click', function () {
     const profile= getElementById('profile')
    // swirls=== false
    
    // if (swirls===false) {
    //     swirls=== true
    // } else {
    //     swirls===false
    // }
    // })

    
        profile.addEventListener('mouseenter',function () {
          gsap.to(this, {className: 'animation active', duration: 1})} )
      
      //remove on mouse leave
    
        profile.addEventListener('mouseleave',function () {
          gsap.to(this, {className: 'animation', duration: 1})} )
    

  })