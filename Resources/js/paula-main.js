/*global gsap*/
/*global $*/
/*global ScrollTrigger*/

// const e = require("express");


let vw = $("body").innerWidth();
let expArray = $('.work-exp');
let currExp = 0;
let maxExp = expArray.length - 1;

$(document).ready(function () {
    currExp = 0;
    initFunct();
    
    $("#projects-grid").isotope({
        filter: "*",
        animationOptions: {
            duration: 1500,
            easing: "linear",
            queue: false
        }
    });

    let typedOne = new Typed("#hi", {
        strings: ["","Hello,"],
        typeSpeed: 50,
        loop: false,
        startDelay: 100,
        showCursor: false
    });

    let typed = new Typed("#who-am-I", {
        strings: ["","I'm Paula."],
        typeSpeed: 50,
        loop: false,
        startDelay: 800,
        showCursor: false
    });

    let typedTwo = new Typed("#description-me", {
        strings: ["","I'm a design engineer. I love to design innovative solutions with a storytelling element to provide seamless user experiences."],
        typeSpeed: 35,
        loop: false,
        startDelay: 2000,
        showCursor: false
    });

    $("#view-portfolio").click(function () {
        console.log("hi");
        window.location.href = "index.html";
    });
});


$(window).resize(function () {
    // setTimeout returns the numeric ID which is used by
    // clearTimeOut to reset the timer
    // currExp = 0;
    // $(".carousel").stop().animate({
    //     scrollLeft: $(".carousel").scrollLeft() - $(".carousel").scrollLeft()
    // }, 700);

    // if ($(".carousel").scrollLeft() !== 0) {
    //     $("#backward-exp").removeClass("invisible");
    // }

    // if ($(".carousel").scrollLeft() >= 2.5*0.58*vw) {
    //     $("#forward-exp").addClass("invisible");
    // } else {
    //     $("#forward-exp").removeClass("invisible");
    // }
});



const initFunct = function () {
    $("[data-paroller-factor]").paroller();


    // let typedDes = new Typed("#my-description", {
    //     stringsElement: "#my-description-text",
    //     typeSpeed: 30,
    //     loop: false,
    //     startDelay: 8000,
    //     showCursor: false
    // });


    // Checking if there is text in the contact section

    $(".feedback-input").each(function() {
        const currLabel = "#" + $(this).attr("label");
        if ($("#" + $(this).attr("id")).val().length > 0){
            $(currLabel).addClass("focused");
        }
    });

    // Setting experience carousel to 0.

    $(".carousel").animate({
        scrollLeft: 0
    }, 500);

    // Drop down in education section

    $(".more-info").click(function (){
        const opens = "#" + $(this).attr("opens");
        console.log(opens);
        $(opens).toggleClass("invisible");
        $(this).toggleClass("reverse");
    });

    // Menu

    $(".menu").click(function () {
        $(".menu").toggleClass("active");
        $(".menu-bar").toggleClass("active");
        if ($("section").hasClass("active")) {
            $("section").addClass("de-active");
            setTimeout(function () {
                $("section").toggleClass("active");
                $("section").removeClass("de-active");
            }, 500);
        } else {
            $("section").toggleClass("active");
        }
    });

    $(".nav-btn").click(function () {
        const id = "#" + $(this).attr("to").toString().substring(2);
        console.log(id);
        $(".menu").toggleClass("active");
        $(".menu-bar").toggleClass("active");
        if ($("section").hasClass("active")) {
            $("section").addClass("de-active");
            setTimeout(function () {
                $("section").toggleClass("active");
                $("section").removeClass("de-active");
            }, 500);
        }
        $("html, body").animate({
            scrollTop: $(id).offset().top
        }, 500);
    });

    // Scrolling through experience carousel


    $(".work-exp").click(function () {
        $(".work-exp").each(function() {
            $(this).addClass("hover");
        });
        const id = $(this);
        const proportion = id.offset().left;

        if (proportion > 0){
            currExp += 1;
        }
        else {
            currExp -= 1;
        }

        id.removeClass("hover");
        $(".carousel").animate({
            scrollLeft: id.offset().left + $(".carousel").scrollLeft() - (((vw - id.innerWidth())/(2*vw))*vw)
        }, 500);
    });


    // Contact labels

    $(".feedback-input").on("keyup keydown keypress change paste", function(){
        const currLabel = "#" + $(this).attr("label");
        if ($("#" + $(this).attr("id")).val().length > 0) {
            $(currLabel).addClass("focused");
        }
        else {
            $(currLabel).removeClass("focused");
        }
    });

    let owl = $(".carousel");
    // Owl carousels for skills
    owl.owlCarousel({
        margin: 80,
        loop: false,
        items: 1,
        center: true,
        stagePadding: 300,
        responsiveClass: true,
        responsive:{
            0:{
                margin: 10,
                stagePadding: 35
            },
            600:{
                margin: 15,
                stagePadding: 90
            },
            800:{
                margin: 50,
                stagePadding: 150
            },
            1000: {
                margin: 90,
                stagePadding: 250
            },
            1200: {
                margin: 150,
                stagePadding: 300
            },
            1400:{
                margin: 150,
                stagePadding: 400
            },
            1600: {
                margin: 150,
                stagePadding: 500
            }
        }
    });

     // Custom Navigation Events
     $(document).on("click", ".owl-item", function(){
        n = $(this).index();
        console.log($(this).find(".work-exp"));
        $(".work-exp").addClass("hover");
        $(this).find(".work-exp").removeClass("hover");
        owl.trigger("to.owl.carousel", [n, 500]);
    });

    $(".owl-three-items").owlCarousel({
        loop:true,
        margin:30,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3,
                loop:false
            }
        }
    });
    $(".owl-four-items").owlCarousel({
        loop:true,
        margin:30,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:4,
                loop:false
            }
        }
    });


    $(".project").click(function() {
        const url = $(this).attr("link_address");
        $(window).attr("location", url);
    });

    // $(window).scroll(function () {
    //     $(".item").each(function(){
    //         var skillsTopOffset = $(this).offset().top;
    //         console.log(skillsTopOffset);
    //         console.log(window.pageYOffset);
    //         if(window.pageYOffset > skillsTopOffset){
    //             $(".chart").easyPieChart({
    //                 easing: "easInOut",
    //                 trackColor: "#b3d1e78a",
    //                 barColor: "#367BB0",
    //                 scaleColor: false,
    //                 lineWidth: 4,
    //                 size: 80,
    //                 onStep: function(from, to, percent) {
    //                     $(this.el).find(".percent").text(Math.round(percent));
    //                 }
    //             });
    //         }
    //     });
    // });

    let current_left = "0%";


    $(".project-selector-option").click(function(){
        animation_left = $(this).attr("percentage-left").toString() + "%"
        $(".indicator").animate({left: animation_left});
        current_left = animation_left;
        var selector = $(this).attr("select");
        $("#project-grid").isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: "linear",
                queue: false
            }
        });

        // if(to_select==="all"){
        //     $(".project").each(function(){
        //         if($(this).attr("project-type")!==to_select){
        //             $(this).removeClass("display-none-project");
        //             $(this).addClass("display-block-project");
        //         }
        //     });
        // }
        // else {
        //     console.log("not all");
        //     $(".project").each(function(){
        //         if($(this).attr("project-type")!==to_select){
        //             console.log(to_select);
        //             $(this).addClass("display-none-project");
        //             $(this).removeClass("display-block-project")
        //         }
        //         else{
        //             $(this).removeClass("display-none-project");
        //             $(this).addClass("display-block-project");
        //         }
        //     })
        // }
    });

    // Clicking on projects 

    $(".experience-list-item").each(function(){
        const curr_exp_list = $(this);
        $( this ).find("h4").click(function(){
            curr_exp_list.toggleClass("active");
        })
        // $(currWorkExp + " .experience-list-item").removeClass("active");
    });

};