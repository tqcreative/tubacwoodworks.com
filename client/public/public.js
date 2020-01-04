////////////
// Global Variables
////////////

let heroAnimationTrigger = false;
let quoteOneTrigger = false;
let quoteTwoTrigger = false;

////////////
// On Ready
////////////

document.addEventListener("DOMContentLoaded", function(){
console.log('DOM has finished loading.')

////////////
// item in viewport
////////////
function elementInViewport(el) {
    let top = el.offsetTop;
    let left = el.offsetLeft;
    let width = el.offsetWidth;
    let height = el.offsetHeight;
  
    while(el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }
  
    return (
      top < (window.pageYOffset + window.innerHeight) &&
      left < (window.pageXOffset + window.innerWidth) &&
      (top + height) > window.pageYOffset &&
      (left + width) > window.pageXOffset
    );
}


////////////
// On scroll events
////////////
window.addEventListener('scroll', function(event) {
       
    /////////////////////////////////////////
    // GSAP Animations
    /////////////////////////////////////////

    // 1: is this element on the screen?
    if (document.getElementById("quote_1")) {
      // id="quote_1" is on the page somewhere.

      // 2: is the quoteOneTrigger trigger true or false. If it is false then we want to fire the animation. if it is true we want to ignore the result.
      if (elementInViewport(document.getElementById("quote_1")) && quoteOneTrigger === false){
        quoteOneTrigger = true;
        gsap.from("#quote_1", {duration: 2, opacity: 0, x: "-100%", ease: "power4"});

        // 3: if you are no longer in the view then we want to make sure that the animation trigger is reset to false.
      } else if (!elementInViewport(document.getElementById("quote_1")) && quoteOneTrigger === true){
        quoteOneTrigger = false;
      }
    }

    if (document.getElementById('hero_quote')){
      if (elementInViewport(document.getElementById("hero_quote")) && heroAnimationTrigger === false){
        heroAnimationTrigger = true;
        gsap.from("#hero_quote", {delay: .5, opacity: 0, duration:1, x:750, ease: "power4"});
      } else if (!elementInViewport(document.getElementById("hero_quote")) && heroAnimationTrigger === true){
        heroAnimationTrigger = false;
      }
    }

    if(document.getElementById('quote_2')){
      if(elementInViewport(document.getElementById('quote_2')) && quoteTwoTrigger === false){
        quoteTwoTrigger = true;
        gsap.from("#quote_2", {duration: 2, opacity: 0, x: "200%", ease: "power4"});
      } else if (!elementInViewport(document.getElementById("quote_2")) && quoteTwoTrigger === true){
        quoteTwoTrigger = false;
      }
    }

    
});


////////////
// On load 
////////////

if (document.getElementById('hero_quote')){
  if (elementInViewport(document.getElementById("hero_quote")) && heroAnimationTrigger === false){
    heroAnimationTrigger = true;
    gsap.from("#hero_quote", {delay: .5, opacity: 0, duration:1, x:750, ease: "power4"});
  } else if (!elementInViewport(document.getElementById("hero_quote")) && heroAnimationTrigger === true){
    heroAnimationTrigger = false;
  }
}

const rellax = new Rellax('.parallax');

///////////////////////////
/////// ! WARNING ! ///////
///////////////////////////
// no code beyond this point.
});
