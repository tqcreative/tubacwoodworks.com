////////////
// Global Variables
////////////

let heroAnimationTrigger = false;
let quoteOneTrigger = false;
let quoteTwoTrigger = false;
let checkerOneTrigger = false;
let checkerTwoTrigger = false;
let checkerThreeTrigger = false;

////////////
// On Ready
////////////

document.addEventListener("DOMContentLoaded", function(){
//console.log('DOM has finished loading.')

////////////
// is the item in viewport?
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

    let yOffset = window.pageYOffset;
    let speed = 2;
    document.getElementsByClassName("parallax")[0].style.backgroundPosition = "center "+ ((yOffset)/speed) +"px";

    // 1: is this element on the screen?
    if (document.getElementById("quote_1")) {
      // id="quote_1" is on the page somewhere.

      // 2: is the quoteOneTrigger trigger true or false. If it is false then we want to fire the animation. if it is true we want to ignore the result.
      if (elementInViewport(document.getElementById("quote_1")) && quoteOneTrigger === false){
        quoteOneTrigger = true;
        gsap.from("#quote_1", {duration: 2, opacity: 0, x: "-101%", ease: "power4"});

        // 3: if you are no longer in the view then we want to make sure that the animation trigger is reset to false.
      } else if (!elementInViewport(document.getElementById("quote_1")) && quoteOneTrigger === true){
        quoteOneTrigger = false;
      }
    }

    if(document.getElementById('quote_2')){
      if(elementInViewport(document.getElementById('quote_2')) && quoteTwoTrigger === false){
        quoteTwoTrigger = true;
        gsap.from("#quote_2", {duration: 2, opacity: 0, x: "200%", ease: "power4"});
      } else if (!elementInViewport(document.getElementById("quote_2")) && quoteTwoTrigger === true){
        quoteTwoTrigger = false;
      }
    };

    if(document.getElementById('checkerbox_quote_1')){
      if(elementInViewport(document.getElementById('checkerbox_quote_1')) && checkerOneTrigger === false){
        checkerOneTrigger = true;
        gsap.from("#checkerbox_quote_1", {duration: 1, opacity: 0, delay: 0, x:"101%"});
      } else if (!elementInViewport(document.getElementById('checkerbox_quote_1')) && checkerOneTrigger === true){

          checkerOneTrigger = false;

      }
    };

    if(document.getElementById('checkerbox_quote_2')){
      if(elementInViewport(document.getElementById('checkerbox_quote_2')) && checkerTwoTrigger === false){

          checkerTwoTrigger = true;

        gsap.from("#checkerbox_quote_2", {duration: 1, opacity: 0, delay: .5, x:"101%"});
      } else if (!elementInViewport(document.getElementById('checkerbox_quote_2')) && checkerTwoTrigger === true){
        checkerTwoTrigger = false;
      }
    };

    if(document.getElementById('checkerbox_quote_3')){
      if(elementInViewport(document.getElementById('checkerbox_quote_3')) && checkerThreeTrigger === false){
        checkerThreeTrigger = true;
        gsap.from("#checkerbox_quote_3", {duration: 1, opacity: 0, delay: 1, x:"101%"});
      } else if (!elementInViewport(document.getElementById('checkerbox_quote_3')) && checkerThreeTrigger === true){

          checkerThreeTrigger = false;

      }
    };
    
});


////////////
// On load 
////////////

// on load events should happen in the componentDidMount() function. dont forget to @import gsap from 'gsap' for animation components;

// if (document.getElementById('hero_quote')){
//   if (elementInViewport(document.getElementById("hero_quote")) && heroAnimationTrigger === false){
//     heroAnimationTrigger = true;
//     gsap.from("#hero_quote", {delay: .5, opacity: 0, duration:1, x:750, ease: "power4"});
//   } else if (!elementInViewport(document.getElementById("hero_quote")) && heroAnimationTrigger === true){
//     heroAnimationTrigger = false;
//   }
// }

//const rellax = new Rellax('.parallax');


///////////////////////////
/////// ! WARNING ! ///////
///////////////////////////
// no code beyond this point.
});
