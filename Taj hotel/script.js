
var slideIndex = 0;
change();

function change() {
    var i;
    var x = document.getElementsByClassName("photos");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";

    }
    slideIndex++;
    if (slideIndex > x.length) {
        slideIndex = 1
    }
    x[slideIndex - 1].style.display = "block";
    setTimeout(change, 3000);
}

function slider() {



    let next = document.getElementById('move');
    next.addEventListener('click', nexta);
    var index = 0;
    function nexta() {
        var photos = document.getElementsByClassName('photos');
        photos[index].style.display = "none";
        if (index == photos.length - 1) {
            index = 0;
            photos[index].style.display = "block";
        }
        else {
            index++;
            photos[index].style.display = "block";
        }
    }

    let prev = document.getElementById('meva');
    prev.addEventListener('click', preva);
    function preva() {
        var photos = document.getElementsByClassName('photos');
        photos[index].style.display = "none";
        if (index == 0) {
            index = photos.length - 1;
            photos[index].style.display = "block";
        }
        else {
            index--;
            photos[index].style.display = "block";
        }
    }

}
slider();


function omega() {

    let mail = document.getElementById('look');
    let pop = document.getElementById('pop_box');
    let content = document.getElementById('contact_box');
    let cut = document.getElementById('cut');
    var cck = "bella";
    pop.style.display = "none";

    mail.addEventListener('mouseover', () => {
        if (cck == "bella") {
            pop.style.display = "block";
            cck = "kella";
        } else {
            pop.style.display = "none";
            cck = "bella"
        }
    })
    // 
    var pox = "van";
    cut.addEventListener('click', () => {
        if (pox == "van") {
            pop.style.display = "none";
            pox = "show";
        } else {
            pop.style.display = "block";
            pox = "van"
        }
    })
    // 

    content.style.display = "none";
    let box = "ok"
    mail.addEventListener('click', () => {
        if (box == "ok") {
            content.style.display = "block";
            box = "notok"
        } else {
            content.style.display = "none";
            box = "ok";
        }


    })


}
omega();

function sec() {




    let limited = document.getElementById('limited');
    let gate = document.getElementById('gate');
    let mem = document.getElementById('mem');
    let care = document.getElementById('care');
    let suitr = document.getElementById('suitr');
    let round = document.getElementById('round');
    let back = document.getElementById('photo_count');

    limited.addEventListener('click', () => {
        round.style.marginTop = "120px";
        back.style.background = "url('https://www.tajhotels.com/content/dam/tajhotels/in/en/offers/limited-period-escapes-24/LPE-global-offer-card.png/jcr:content/renditions/cq5dam.web.756.756.png')";
        back.style.backgroundSize = "cover";
        limited.style.color = "#C38C48";
        gate.style.color = "#4A4949";
        mem.style.color = "#4A4949";
        care.style.color = "#4A4949";
        suitr.style.color = "#4A4949";
        document.getElementById('Great').innerHTML = "25% Savings* on stays at select Hotels + Minimum 4% NeuCoins";
        document.getElementById('suite1').innerHTML = "LIMITED PERIOD ESCAPES";
        document.getElementById('valid').innerHTML = "VALID TILL 15th MAR 2024";

    })



    gate.addEventListener('click', () => {
        round.style.marginTop = "190px";
        back.style.background = "url('https://www.tajhotels.com/content/dam/tajhotels/banners/urban.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg')";
        back.style.backgroundSize = "cover";
        gate.style.color = "#C38C48";
        limited.style.color = "#4A4949";
        mem.style.color = "#4A4949";
        care.style.color = "#4A4949";
        suitr.style.color = "#4A4949";
        document.getElementById('Great').innerHTML = "Treat yourself and your loved ones to a relaxing staycation at our iconic city hotels.";
        document.getElementById('suite1').innerHTML = "URBAN GETAWAYS";
        document.getElementById('valid').innerHTML = "VALID TILL 31st MAR 2025";
    })


    mem.addEventListener('click', () => {
        round.style.marginTop = "260px";
        back.style.background = "url('https://www.tajhotels.com/content/dam/luxury/tle/TLE_Images_Folderised/2_Rooms_Suites/Luxury_Room/3X2/WOGLI/Luxury%20Room%20Sea%20View.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg')";
        back.style.backgroundSize = "cover";
        mem.style.color = "#C38C48";
        gate.style.color = "#4A4949";
        limited.style.color = "#4A4949";
        care.style.color = "#4A4949";
        suitr.style.color = "#4A4949";
        document.getElementById('Great').innerHTML = "An exclusive offer for our Exclusive members";
        document.getElementById('suite1').innerHTML = "MEMBER EXCLUSIVE OFFER";
        document.getElementById('valid').innerHTML = "ROUND THE YEAR";
    })


    care.addEventListener('click', () => {
        round.style.marginTop = "330px";
        back.style.background = "url('https://www.tajhotels.com/content/dam/ihcl/paathya/pathya_landing_page/carecations/carecation-400x400.jpeg/jcr:content/renditions/cq5dam.web.756.756.jpeg')";
        back.style.backgroundSize = "cover";
        care.style.color = "#C38C48";
        mem.style.color = "#4A4949";
        gate.style.color = "#4A4949";
        limited.style.color = "#4A4949";
        suitr.style.color = "#4A4949";
        document.getElementById('Great').innerHTML = "Carecations enable you to embark on inspiring journeys specially designed to lead positive change for a better tomorrow.";
        document.getElementById('suite1').innerHTML = "CARECATIONS";
        document.getElementById('valid').innerHTML = "VALID TILL 31st MAR 2025";


    })


    suitr.addEventListener('click', () => {
        round.style.marginTop = "400px";
        back.style.background = "url('https://www.tajhotels.com/content/dam/tajhotels/in/en/offers/suites-surprise-offer/suit-surprises-ss-taj-600x600.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg')";
        back.style.backgroundSize = "cover";
        suitr.style.color = "#C38C48";
        mem.style.color = "#4A4949";
        care.style.color = "#4A4949";
        gate.style.color = "#4A4949";
        limited.style.color = "#4A4949";

        document.getElementById('Great').innerHTML = "Great value on Suite bookings";
        document.getElementById('suite1').innerHTML = "SUITE SURPRISES";
        document.getElementById('valid').innerHTML = "VALID TILL 31st MAR 2025";


    })

}
sec();

function deva() {
    let right = document.getElementById('right');
    let firstrow = document.getElementById('first_row');
    let secrow = document.getElementById('sec_row');
    let left = document.getElementById('left');
    left.style.display = "none";
    right.addEventListener('click', () => {
        firstrow.style.transform = "translateX(-88rem)";
        left.style.display = "block";
        right.style.display = "none";
        setTimeout(() => {
            secrow.style.transform = "translateX(-88rem)";
        }, 50);
    })
    left.addEventListener('click', () => {

        secrow.style.transform = "translateX(88rem)";
        left.style.display = "none";
        right.style.display = "block";
        setTimeout(() => {
            firstrow.style.transform = "translateX(0rem)";
        }, 50);
    })

}
deva();

function close() {


    let skip = document.getElementsByClassName('scroll_one');
    let lefty = document.getElementById('leftys');
    let righty = document.getElementById('rightys');
    let loc = 0;
    lefty.style.display = "none";
    righty.addEventListener('click', () => {
        skip[loc].style.transform = "translateX(-100rem)"
        loc++;
        skip[loc].style.transform = "translateX(-80rem)"
        righty.style.display = "none";
        lefty.style.display = "block";
    })


    lefty.addEventListener('click', () => {
        skip[loc].style.transform = "translateX(100rem)"
        loc--;
        skip[loc].style.transform = "translateX(0rem)"
        righty.style.display = "block";
        lefty.style.display = "none";
    })

}
close();



setInterval(()=>{




setTimeout(() => {
    document.getElementById('big_ban').src = "https://www.tajhotels.com/content/dam/tajhotels/in/en/events-experiences/Heritage.jpg";

    document.getElementById('small_ban').src = "https://www.tajhotels.com/content/dam/luxury/weddings/taj-timeless-wedding.png/jcr:content/renditions/cq5dam.web.512.512.png";

}, 1000);
setTimeout(() => {
    document.getElementById('small_ban').src = "https://www.tajhotels.com/content/dam/tajhotels/ancillary-services/taj.JPG/jcr:content/renditions/cq5dam.web.512.512.jpeg";

    document.getElementById('side_ban').src = "https://www.tajhotels.com/content/dam/luxury/weddings/taj-timeless-wedding.png/jcr:content/renditions/cq5dam.web.512.512.png";
}, 2000);
setTimeout(() => {
    document.getElementById('down_ban').src = "https://www.tajhotels.com/content/dam/luxury/weddings/taj-timeless-wedding.png/jcr:content/renditions/cq5dam.web.512.512.png";

    document.getElementById('side_ban').src = "https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Delhi/images/4x3/Varq-PrivateDiningRoom-Master.jpg/jcr:content/renditions/cq5dam.web.512.512.jpeg";
}, 3000);
setTimeout(() => {
    document.getElementById('middle_ban').src = "https://www.tajhotels.com/content/dam/luxury/weddings/taj-timeless-wedding.png/jcr:content/renditions/cq5dam.web.512.512.png";

    document.getElementById('down_ban').src = "https://www.tajhotels.com/content/dam/tajhotels/ancillary-services/epicure-banner-400-x-400-nnn.jpg/jcr:content/renditions/cq5dam.web.512.512.jpeg";
}, 4000);
setTimeout(() => {
    document.getElementById('up_ban').src = "https://www.tajhotels.com/content/dam/luxury/weddings/taj-timeless-wedding.png/jcr:content/renditions/cq5dam.web.512.512.png";

    document.getElementById('middle_ban').src = "https://www.tajhotels.com/content/dam/luxury/weddings/jiva-spa-new.png/jcr:content/renditions/cq5dam.web.512.512.png";
}, 5000);
setTimeout(() => {
    document.getElementById('big_ban').src = "https://www.tajhotels.com/content/dam/luxury/weddings/taj-timeless-wedding.png/jcr:content/renditions/cq5dam.web.512.512.png";

    document.getElementById('small_ban').src = "https://www.tajhotels.com/content/dam/tajhotels/in/en/events-experiences/Heritage.jpg";


    document.getElementById('side_ban').src = "https://www.tajhotels.com/content/dam/tajhotels/ancillary-services/taj.JPG/jcr:content/renditions/cq5dam.web.512.512.jpeg";

    document.getElementById('up_ban').src = "https://www.tajhotels.com/content/dam/luxury/weddings/jiva-spa-new.png/jcr:content/renditions/cq5dam.web.512.512.png";
    document.getElementById('middle_ban').src = "https://www.tajhotels.com/content/dam/tajhotels/ancillary-services/epicure-banner-400-x-400-nnn.jpg/jcr:content/renditions/cq5dam.web.512.512.jpeg";

    document.getElementById('down_ban').src = "https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Delhi/images/4x3/Varq-PrivateDiningRoom-Master.jpg/jcr:content/renditions/cq5dam.web.512.512.jpeg";
}, 6000);

},6000);





gsap.to('#serch', {
    scale: 1.22,
    duration: 0.5,
    position: "fixed",
    top: '0',
    scrollTrigger: {
        trigger: '#serch',
        start: "top 0%",
        end: "top 0%",
        scrub: 5,
    }

})

gsap.to('#mail i', {
    y: 40,
    ease: "bounce",
    duration: 0.5,
    repeat: 15
})

gsap.from('.first_code', {
    x: -1600,
    duration: 2,

    scrollTrigger: {
        trigger: ".SHOWS",
        start: "top 20%",
        end: "top  0%",
        // markers:true
    }
})


gsap.to('.first_code img', {
    duration: 1,
    filter: "blur(0px)",
    stragger: 1,

    scrollTrigger: {
        trigger: ".first_code",
        start: "top 20%",
        end: "top  0%",
        // markers:true
    }
})
gsap.to('.first_code .box23', {
    duration: 1,
    backgroundColor: "#fff",
    stragger: 1,

    scrollTrigger: {
        trigger: ".first_code",
        start: "top 20%",
        end: "top  0%",
    }
})








