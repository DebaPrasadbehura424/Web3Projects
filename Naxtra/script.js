



document.getElementById('about').addEventListener('click', () => {
    document.getElementById('lists').style.display = "block";
    document.getElementById('listabout').style.display = "none";
})
document.getElementById('course').addEventListener('click', () => {
    document.getElementById('listabout').style.display = "block";
    document.getElementById('lists').style.display = "none";
})
let scroller = document.getElementById('scroll_section');
let dots = document.querySelectorAll('.dots li');
function changeactive(x) {
    for (var i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    dots[x].classList.add('active');
}
dots.forEach((call, key) => {
    call.addEventListener('click', () => {
        scroller.style.transform = `translateX(-${(key) * 110}%)`;
        let index = key;
        changeactive(index);


    })

})

let showcontent = document.getElementById('showcontent');
let firstlink = document.getElementById('first_row_first_content');
let change = "upgo";
showcontent.addEventListener('click', () => {

    if (change == "upgo") {

        firstlink.style.transform = "translateY(0%)";
        showcontent.innerHTML = "Go Back";
        change = "downgo";
    } else {

        firstlink.style.transform = "translateY(-100%)";
        showcontent.innerHTML = "Know More";
        change = "upgo";
    }
})
let showlinks = document.getElementById('showlinks');
let seccontent = document.getElementById('sec_sec_content_links');
let link = "get";
showlinks.addEventListener('click', function () {
    if (link == "get") {
        seccontent.style.transform = "translateY(0%)";
        showlinks.innerHTML = "Go Back";
        link = "forget";
    } else {
        seccontent.style.transform = "translateY(-100%)";
        showlinks.innerHTML = "Links";
        link = "get";
    }
})




let lines = document.getElementById('lines');
let optionsout = document.querySelector('.options_out');
var navbar = "downcome";
lines.addEventListener("click", function () {
    if (navbar == "downcome") {
        console.log(navbar)
        optionsout.style.transform = " translateY(0%) scale(1,1)";
        optionsout.style.borderRadius = "0%";
        navbar = "upgo";
        console.log(navbar)

    }
    else {
        console.log(navbar);
        optionsout.style.transform = "translateY(-140%)";
        optionsout.style.borderRadius = "50%";
        navbar = "downcome";
        console.log(navbar);

    }

})


















