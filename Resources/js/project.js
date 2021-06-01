/*global gsap*/
/*global $*/
/*global ScrollTrigger*/


let vw = $("body").innerWidth();

$(document).ready(function () {
    initFunct();
    AOS.init();
});

const find_next_page = function(strCurrentPage, arrProjectArray) {
    let link = 0;
    while (link < arrProjectArray.length){
        if(arrProjectArray[link] === strCurrentPage){
            if ((link + 1) > (arrProjectArray.length - 1)){
                return "";
            }
            else{
                return arrProjectArray[link+1];
            }
        }
        link = link + 1;
    }
};

const find_prev_page = function(strCurrentPage, arrProjectArray) {
    let link;
    for (link in arrProjectArray){
        if(arrProjectArray[link] === strCurrentPage){
            if ((link - 1) < 0){
                return "";
            }
            else{
                return arrProjectArray[link - 1];
            }
        }
    }
};

const initFunct = function () {
    const projectArray = [
        "gizmo_fourse.html",
        "tandem_bike.html",
        "acasa.html",
        "tetris.html",
        "angard.html",
        "quizzard.html",
        "shazam_rebrand.html",
        "intro_to_des.html",
        "grocity.html"
    ];

    const current_page = $("body").attr("link-address");
    console.log(current_page);
    const next_page = find_next_page(current_page, projectArray);
    console.log(next_page);
    const prev_page = find_prev_page(current_page, projectArray);
    console.log(prev_page);

    $("#next-btn").click(function() {
        $(window).attr("location", next_page);
    });

    $("#prev-btn").click(function() {
        $(window).attr("location", prev_page);
    });

    // $(".side-cross").click(function() {
    //     const url = "paula_castillero.html#projects-id";
    //     $(window).attr("location", url);
    // });

};