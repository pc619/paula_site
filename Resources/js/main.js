/*global gsap*/
/*global $*/
/*global ScrollTrigger*/

const classEl = (className) => document.getElementsByClassName(className);
const el = (id) => document.getElementById(id);
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
    toggleActions: "restart pause resume pause"
});

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".home-page",
        pin: ".home-page",   // pin the trigger element while active
        start: "top top", // when the top of the trigger hits the top of the viewport
        end: 200,
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scroll
        snap: 1
    },
    onComplete: function () {
        window.scrollTo(0,0);
        window.location.href = "paula_castillero.html";
}});

tl.to(".scroll-indicator-loading", {
    rotation: 345,
    transformOrigin: "50% 100%"
});





const descriptionBoxAppear = function (descriptionBoxID) {
    $(descriptionBoxID).removeClass("disappear-animation");
    $(descriptionBoxID).removeClass("invisible");
};

const descriptionSlideDown = function (descriptionBoxID) {
    $(descriptionBoxID).addClass("disappear-animation");
};

const descriptionBoxDisappear = function (descriptionBoxID) {
    $(descriptionBoxID).addClass("invisible");
    console.log(descriptionBoxID);
};

$("#angard").hover(function () {
    descriptionBoxAppear("#angard-box");
}, function () {
    descriptionSlideDown("#angard-box");
    setTimeout(descriptionBoxDisappear, 200, "#angard-box");
});

$("#quizzard").hover(function () {
    descriptionBoxAppear("#quizzard-box");
}, function () {
    descriptionSlideDown("#quizzard-box");
    setTimeout(descriptionBoxDisappear, 200, "#quizzard-box");
});

$("#shazam-rebrand").hover(function () {
    descriptionBoxAppear("#shazam-rebrand-box");
}, function () {
    descriptionSlideDown("#shazam-rebrand-box");
    setTimeout(descriptionBoxDisappear, 200, "#shazam-rebrand-box");
});

