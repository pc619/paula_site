/*global gsap*/
/*global $*/
/*global ScrollTrigger*/


$(document).ready(function () {
    initFunct();

});

const initFunct = function () {

    let typed = new Typed("#who-am-I", {
        strings: ["","an engineer,", "a coder,", "a designer,", "Paula."],
        typeSpeed: 70,
        loop: false,
        startDelay: 200,
        showCursor: false
    });

    $("#view-portfolio").click(function () {
        console.log("hi");
        window.location.href = "paula_castillero.html";
    });
};