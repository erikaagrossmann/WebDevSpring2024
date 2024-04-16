document.addEventListener('DOMContentLoaded', function(){
    const phone= document.getElementById('phone').addEventListener('click', outcomeP)
    const email= document.getElementById('email').addEventListener('click', outcomeE)
    // const insta= document.getElementById('insta').addEventListener('click', outcomeI)
    const facebook= document.getElementById('linkedIn').addEventListener('click', outcomeL)
  })



  function outcomeP () {
    const message = `My Number is (267) 788-3813. Text or call me for inquiries!`
    document.getElementById('resultP').append(message)

    }


    

function outcomeE () {
    const message = `My Email is Erikaagrossmann@gmail.com Email me for inquiries!`
    document.getElementById('resultE').append(message)
     }

// function outcomeI () {
//     const message = `My Instagram is erika._paige`
//     document.getElementById('resultI').append(message)
//     }

function outcomeL () {
    const message = `My linkedIn is Erika Grossman`
    document.getElementById('resultL').append(message)
    }