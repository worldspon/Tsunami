let main_height = document.querySelector('.main-box').scrollHeight;
let side_height = document.querySelector('.side-nav');
console.log(window.innerHeight);
console.log(main_height);
if(main_height >=window.innerHeight) {
    side_height.style.height = main_height + 'px';
} else {
    side_height.style.height= (window.innerHeight-70) + 'px';
}

console.log(side_height.style.height);