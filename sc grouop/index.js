




let hambergur = document.getElementById('hamburger')
let menulist = document.getElementById('manulist');
let xmark = document.getElementById('xmark');
let options = document.getElementById('menulist ul');


hambergur.addEventListener('click', () => {
    menulist.style.transform = "translateX(0%)";
    
    menulist.style.display="block";
});
xmark.addEventListener("click", () => {
    menulist.style.transform = "translateX(100%)";
setTimeout(()=>{

    menulist.style.display="none";

},1000)

})

let brands = document.getElementById('brands');
let brandoption = document.getElementById('Brands_option');
let plusminus = document.getElementById('plusminus');
let icon = "true"
brands.addEventListener('click', () => {
    plusminus.classList.remove('fa-plus')
    plusminus.classList.add('fa-minus')
    if (icon == "true") {
        plusminus.classList.remove('fa-plus')
        plusminus.classList.add('fa-minus')
        icon = "false";
    } else {
        plusminus.classList.remove('fa-minus')
        plusminus.classList.add('fa-plus')
        icon = "true";
    }
    brandoption.classList.toggle('change');
})


let next = document.getElementById('next');
let slider = document.getElementById('slide');
let ind = document.querySelectorAll('.inividual_products');
let slidnum = 1;
next.addEventListener('click', () => {
    if (slidnum < ind.length) {
        slider.style.transform = `translateX(-${slidnum * 250}px)`
        slidnum++;
        next.style.display = "block";
        prev.style.display = "block";

    } else {
        next.style.display = "none";
        prev.style.display = "block";

    }
})



let prev = document.getElementById('back');

prev.addEventListener('click', () => {

    if (slidnum == 1) {

        next.style.display = "block";
        prev.style.display = "none";
    } else {

        slider.style.transform = `translateX(-${(slidnum - 2) * 250}px)`;
        slidnum--;
        next.style.display = "block";



    }
})



let mediaslider = document.getElementById('media_slider');
let dots = document.querySelectorAll('.dots li');
dots.forEach((lost, key) => {
    lost.addEventListener('click', () => {
        let sim = key;
        mediaslider.style.transform = `translateX(-${(key) * 550}px)`;
      
        for (var i = 0; i < dots.length; i++) {
            dots[i].classList.remove('ok');
        }
        dots[sim].classList.add('ok');
        
    })




})








