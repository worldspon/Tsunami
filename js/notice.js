const mod_btn = document.querySelector('.notice-mod-btn');
const confirm_btn = document.querySelector('.notice-confirm-box');
const mod_true_btn = document.querySelector('.notice-false-btn');
const mod_false_btn = document.querySelector('.notice-false-btn');
const mod_chk = document.querySelectorAll('.notice-mod-chk');
let prev_chk_ary;
let chk_ary;
console.log(mod_chk.length);

mod_btn.addEventListener('click', function(){
    prev_chk_ary=[];
    mod_btn.style.display = 'none';
    confirm_btn.style.display = 'flex';
    for(let i of mod_chk){
        i.style.display = 'block';
        prev_chk_ary.push(i.checked);
    };
});

mod_false_btn.addEventListener('click', function(){
    chk_ary = [];
    mod_btn.style.display = 'block';
    confirm_btn.style.display = 'none';
    for(let i of mod_chk){
        i.style.display = 'none';
    };
});