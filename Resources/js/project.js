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

    $("#nanogallery-nintendo").nanogallery2({
        items: [
            { src: "Resources/img/nintendo_rev_img/final_render_button_box.png", srct: "Resources/img/nintendo_rev_img/final_render_button_box.png"},
            { src: "Resources/img/nintendo_rev_img/mat_final_render-01.png", srct: "Resources/img/nintendo_rev_img/mat_final_render-01.png" },
            { src: "Resources/img/nintendo_rev_img/pngchar_post_proc.jpg", srct: "Resources/img/nintendo_rev_img/pngchar_post_proc.jpg" },
            { src: "Resources/img/nintendo_rev_img/button_box_exploded.png", srct: "Resources/img/nintendo_rev_img/button_box_exploded.png" },
            { src: "Resources/img/nintendo_rev_img/matt_exploded_view-01.png", srct: "Resources/img/nintendo_rev_img/matt_exploded_view-01.png" },
            { src: "Resources/img/nintendo_rev_img/user_guide.png", srct: "Resources/img/nintendo_rev_img/user_guide.png" },
            { src: "Resources/img/nintendo_rev_img/packaging_exploded_view.png", srct: "Resources/img/nintendo_rev_img/packaging_exploded_view.png" }
        ],

        thumbnailWidth: "auto",
        thumbnailHeight:  250,
        thumbnailGutterWidth: 30,
        thumbnailGutterHeight: 30,
        thumbnailBorderHorizontal: 0,
        thumbnailBorderVertical: 0,
        thumbnailAlignment: "center",
        viewerToolbar:    {
            display:    false },
        viewerTools:     {
                topLeft:    "",
                topRight:   "closeButton"
        },
        galleryTheme: {
            theme: "light"
          },
        viewerTheme : { background: '#fff' },
        icons: {
            buttonClose: '<ion-icon  style="color: #000;" name="close-outline"></ion-icon>',   // icon for previous image (toolbar)
            viewerImgNext: '<ion-icon style="font-size:48px; opacity: 50%; color: #000" name="chevron-forward-circle"></ion-icon>',
            viewerImgPrevious: '<ion-icon style="font-size:48px; opacity: 50%; color: #000"" name="chevron-back-circle"></ion-icon>'
        }
    });


        $(".popup-modal").magnificPopup({
            type: 'iframe'

        });


    const projectArray = [
        "nintendo_rev.html",
        "gizmo_fourse.html",
        "tandem_bike.html",
        "acasa.html",
        "tetris.html",
        "angard.html",
        "quizzard.html",
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