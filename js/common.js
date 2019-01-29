let main_height = document.querySelector('.main-box').scrollHeight;
let side_height = document.querySelector('.side-nav');

if(window.innerWidth<=768) {
    side_height.style.height = 'auto';
} else if(main_height >=window.innerHeight) {
    side_height.style.height = main_height + 'px';
} else {
    side_height.style.height= (window.innerHeight-70) + 'px';
};

window.addEventListener("resize", function(){
    if(window.innerWidth<=768) {
        side_height.style.height = 'auto';
    } else if(main_height >=window.innerHeight) {
        side_height.style.height = main_height + 'px';
    } else {
        side_height.style.height= (window.innerHeight-70) + 'px';
    };
});