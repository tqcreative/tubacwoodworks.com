////////////
// Global Variables
////////////

let heroAnimationTrigger = false;
let quoteOneTrigger = false;
let quoteTwoTrigger = false;
let checkerOneTrigger = false;
let checkerTwoTrigger = false;
let checkerThreeTrigger = false;
let portfolioTriggers = false;
let portfolioTriggersTwo = false;
let galleryTrigger = false;

////////////
// On Ready
////////////

document.addEventListener("DOMContentLoaded", function () {
  //console.log('DOM has finished loading.')

  ////////////
  // is the item in viewport?
  ////////////
  function elementInViewport(el) {
    let top = el.offsetTop;
    let left = el.offsetLeft;
    let width = el.offsetWidth;
    let height = el.offsetHeight;

    while (el.offsetParent) {
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
  window.addEventListener('scroll', function (event) {

    /////////////////////////////////////////
    // GSAP Animations
    /////////////////////////////////////////

    let yOffset = window.pageYOffset;
    let speed = 2;
    if (document.getElementsByClassName("parallax") && window.screen.width >= 900) { document.getElementsByClassName("parallax")[0].style.backgroundPosition = "center " + ((yOffset) / speed) + "px"; }
    if (document.getElementsByClassName("hero_parallax") && window.screen.width < 899) { document.getElementsByClassName("parallax")[0].style.backgroundPosition = "center " + ((yOffset) / speed) + "px"; }
    // if (document.getElementsByClassName("parallax")) { document.getElementsByClassName("parallax")[0].style.transform = `translateY(${yOffset / speed}px)` }

    // 1: is this element on the screen?
    if (document.getElementById("quote_1")) {
      // id="quote_1" is on the page somewhere.

      // 2: is the quoteOneTrigger trigger true or false. If it is false then we want to fire the animation. if it is true we want to ignore the result.
      if (elementInViewport(document.getElementById("quote_1")) && quoteOneTrigger === false) {
        quoteOneTrigger = true;
        gsap.from("#quote_1", { duration: 1, opacity: 0, x: "-101%", ease: "power4"});

        // 3: if you are no longer in the view then we want to make sure that the animation trigger is reset to false.
      } else if (!elementInViewport(document.getElementById("quote_1")) && quoteOneTrigger === true) {
        quoteOneTrigger = false;
      }
    }

    if (document.getElementById('card0')) {
      if (elementInViewport(document.getElementById('card0')) && portfolioTriggers === false) {
        portfolioTriggers = true;
        gsap.from("#card0", { duration: 1, delay: 0, opacity: 0, y: "100%"});
        gsap.from("#card1", { duration: 1.5, delay: 0, opacity: 0, y: "100%"});
        gsap.from("#card2", { duration: 2, delay: 0, opacity: 0, y: "100%"});
      } else if (!elementInViewport(document.getElementById("card0")) && portfolioTriggers === true) {
        // portfolioTriggers = false;
      }
    };

    if(this.document.getElementById('footer')){
      if(elementInViewport(this.document.getElementById('footer')) && portfolioTriggers === true && portfolioTriggersTwo === true) {
        portfolioTriggers = false;
        portfolioTriggersTwo = false;
      }
    }

    // if(this.document.getElementById('nav')){
    //   if(elementInViewport(this.document.getElementById('nav')) && portfolioTriggers === true  && portfolioTriggersTwo === true) {
    //     portfolioTriggers = false;
    //     portfolioTriggersTwo = false;
    //   }
    // }

    if (document.getElementById('card3')) {
      if (elementInViewport(document.getElementById('card3')) && portfolioTriggersTwo === false) {
        portfolioTriggersTwo = true;
        gsap.from("#card3", { duration: 1, delay: .2, opacity: 0, y: 300});
        gsap.from("#card4", { duration: 1.5, delay: .2, opacity: 0, y: 300});
        gsap.from("#card5", { duration: 2, delay: .2, opacity: 0, y: 300});
      } else if (!elementInViewport(document.getElementById("card3")) && portfolioTriggersTwo === true) {
        // portfolioTriggersTwo = false;
      }
    };



    if (document.getElementById('quote_2')) {
      if (elementInViewport(document.getElementById('quote_2')) && quoteTwoTrigger === false) {
        quoteTwoTrigger = true;
        gsap.from("#quote_2", { duration: 1, opacity: 0, x: "150%", ease: "power4"});
      } else if (!elementInViewport(document.getElementById("quote_2")) && quoteTwoTrigger === true) {
        quoteTwoTrigger = false;
      }
    };

    if (document.getElementById('gallery_container')) {
      if (elementInViewport(document.getElementById('gallery_container')) && galleryTrigger === false) {
        galleryTrigger = true;
        // gsap.from("#gallery_container", { duration: 1, delay: 0, opacity: 0 });
        gsap.to(".item_1", { duration: .3, opacity: 1, delay: 1});
        gsap.to(".item_2", { duration: 2.5, opacity: 1, delay: .3});
        gsap.to(".item_3", { duration: 1.7, opacity: 1, delay: .3});
        gsap.to(".item_4", { duration: .9, opacity: 1, delay: .3});
        gsap.to(".item_5", { duration: 1.5, opacity: 1, delay: .3});
        gsap.to(".item_6", { duration: 1.1, opacity: 1, delay: .5});
        gsap.to(".item_7", { duration: 1.3, opacity: 1, delay: 1.8});
        gsap.to(".item_8", { duration: 1.4, opacity: 1, delay: .3});
        gsap.to(".item_9", { duration: 1, opacity: 1, delay: .3});
        gsap.to(".item_10", { duration: 1.2, opacity: 1, delay: .5});
        gsap.to(".item_11", { duration: 1.3, opacity: 1, delay: .3});
        gsap.to(".item_12", { duration: 1.5, opacity: 1, delay: 1});
        gsap.to(".item_13", { duration: .5, opacity: 1, delay: .3});
        gsap.to(".item_14", { duration: 1.5, opacity: 1, delay: 1});
        gsap.to(".item_15", { duration: 2.5, opacity: 1, delay: .3});
        gsap.to(".item_16", { duration: 2, opacity: 1, delay: 1});
      } else if (!elementInViewport(document.getElementById("gallery_container")) && galleryTrigger === true) {
        //galleryTrigger = false;
      }
    };

    if (document.getElementById('checkerbox_quote_1')) {
      if (elementInViewport(document.getElementById('checkerbox_quote_1')) && checkerOneTrigger === false) {
        checkerOneTrigger = true;
        gsap.from("#checkerbox_quote_1", { duration: 1, opacity: 0, delay: 0, x: "101%", ease: "power4" });
      } else if (!elementInViewport(document.getElementById('checkerbox_quote_1')) && checkerOneTrigger === true) {

        // checkerOneTrigger = false;
      }
    };

    if (document.getElementById('checkerbox_quote_2')) {
      if (elementInViewport(document.getElementById('checkerbox_quote_2')) && checkerTwoTrigger === false) {

        checkerTwoTrigger = true;

        gsap.from("#checkerbox_quote_2", { duration: 1, opacity: 0, delay: .3, x: "101%" });
      } else if (!elementInViewport(document.getElementById('checkerbox_quote_2')) && checkerTwoTrigger === true) {
        // checkerTwoTrigger = false;
      }
    };

    if (document.getElementById('checkerbox_quote_3')) {
      if (elementInViewport(document.getElementById('checkerbox_quote_3')) && checkerThreeTrigger === false) {
        checkerThreeTrigger = true;
        gsap.from("#checkerbox_quote_3", { duration: 1, opacity: 0, delay: .7, x: "101%" });
      } else if (!elementInViewport(document.getElementById('checkerbox_quote_3')) && checkerThreeTrigger === true) {

        // checkerThreeTrigger = false;

      }
    };

    if (document.getElementById('phone')) {
      if (window.pageYOffset > 2000 && window.pageYOffset < 7000) {
        gsap.to("#phone", { duration: 0, delay: .1, x: 0 });
      } else if (window.pageYOffset < 1999 || window.pageYOffset > 7001) {
        gsap.to("#phone", { duration: 0, delay: .1, x: -100 });
      }
    }

  });

  ////////////
  // On click
  ////////////

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
