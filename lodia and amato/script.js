






let history = document.getElementById('History');
let logo = document.getElementById('logo');
gsap.to(history, {
    y: 100,
    scrollTrigger: {
        trigger: "#logosection",
        start: "top -4%",
        end: "top -5%",
        scrub: 2,
    }
})
gsap.to(logo, {
    y: -100,
    scrollTrigger: {
        trigger: "#logosection",
        start: "top -4%",
        end: "top -5%",
        scrub: 2,
    }
})
let bottleimage = document.querySelector('#bottle img');
let rightimage = document.querySelector('#righthand img');
let leftimage = document.querySelector('#lefthand img');
let cone = document.querySelector('#cone img');
let stone = document.querySelector('#stone img');

window.addEventListener("load", () => {
    gsap.to(bottleimage, {
        duration: 1,
        scale: 2,
        transform: "rotate(-15deg)"
    })
});
window.addEventListener("load", () => {
    gsap.to(rightimage, {
        duration: 1,
        scale: 1,
        transform: "rotate(-8deg)"
    })
});
window.addEventListener("load", () => {
    gsap.to(leftimage, {
        duration: 1,
        scale: 1,
        transform: "rotate(-15deg)"
    })
});
window.addEventListener("load", () => {
    gsap.to(cone, {
        duration: 1,
        scale: 1,
    })
});
window.addEventListener("load", () => {
    gsap.to(stone, {
        duration: 1,
        scale: 1,
    })
});

let wines = document.getElementById('wines');
let tert = document.getElementById('tert');
let aboutus = document.getElementById('about');
let page1 = document.getElementById('page1');
let ball = document.getElementById('ball');

page1.addEventListener('mouseenter', function () {
    gsap.to(ball, {
        opacity: 1,
        scale: 1,
    })
})

page1.addEventListener('mousemove', function (dets) {
    gsap.to(ball, {
        left: dets.x,
        top: dets.y
    })
})
page1.addEventListener('mousemove', function (win) {
    gsap.to(wines, {
        left: win.x,
        top: win.y
    })
})

bottleimage.addEventListener('mouseenter', function () {
    rightimage.style.opacity = "30%",
        leftimage.style.opacity = "30%",
        cone.style.opacity = "30%",
        stone.style.opacity = "30%",
        gsap.to(wines, {
            opacity: 1,
            scale: 1,
        })
})
bottleimage.addEventListener('mouseleave', function () {
    rightimage.style.opacity = "100%",
        leftimage.style.opacity = "100%",
        cone.style.opacity = "100%",
        stone.style.opacity = "100%",
        gsap.to(wines, {
            opacity: 0,
            scale: 0,
        })
})

page1.addEventListener('mousemove', function (ter) {
    gsap.to(tert, {
        left: ter.x,
        top: ter.y
    })
})

rightimage.addEventListener('mouseenter', function () {
    bottleimage.style.opacity = "30%",
        leftimage.style.opacity = "30%",
        cone.style.opacity = "30%",
        stone.style.opacity = "30%",
        rightimage.style.transform = "rotate(18deg)"
    gsap.to(tert, {
        opacity: 1,
        scale: 1,
    })
})
rightimage.addEventListener('mouseleave', function () {
    bottleimage.style.opacity = "100%",
        leftimage.style.opacity = "100%",
        cone.style.opacity = "100%",
        stone.style.opacity = "100%",
        rightimage.style.transform = "rotate(20deg)",
        gsap.to(tert, {
            opacity: 0,
            scale: 0,
        })
})

leftimage.addEventListener('mouseenter', function () {
    bottleimage.style.opacity = "30%",
        rightimage.style.opacity = "30%",
        cone.style.opacity = "30%",
        stone.style.opacity = "30%",
        leftimage.style.transform = "rotate(-20deg)",
        gsap.to(tert, {
            opacity: 1,
            scale: 1,
        })
})
leftimage.addEventListener('mouseleave', function () {
    bottleimage.style.opacity = "100%",
        rightimage.style.opacity = "100%",
        cone.style.opacity = "100%",
        stone.style.opacity = "100%",
        leftimage.style.transform = "rotate(-25deg)",
        gsap.to(tert, {
            opacity: 0,
            scale: 0,
        })
})

page1.addEventListener('mousemove', function (abt) {
    gsap.to(aboutus, {
        left: abt.x,
        top: abt.y
    })
})

cone.addEventListener('mouseenter', function () {
    bottleimage.style.opacity = "30%",
        rightimage.style.opacity = "30%",
        leftimage.style.opacity = "30%",
        stone.style.opacity = "30%",
        cone.style.transform = "rotate(-70deg)",
        gsap.to(aboutus, {
            opacity: 1,
            scale: 1,
        })
})
cone.addEventListener('mouseleave', function () {
    bottleimage.style.opacity = "100%",
        rightimage.style.opacity = "100%",
        leftimage.style.opacity = "100%",
        stone.style.opacity = "100%",
        cone.style.transform = "rotate(-65deg)",
        gsap.to(aboutus, {
            opacity: 0,
            scale: 0,
        })
})

stone.addEventListener('mouseenter', function () {
    bottleimage.style.opacity = "30%",
        rightimage.style.opacity = "30%",
        leftimage.style.opacity = "30%",
        cone.style.opacity = "30%",
        stone.style.transform = "rotate(-10deg)",
        gsap.to(aboutus, {
            opacity: 1,
            scale: 1,
        })
})
stone.addEventListener('mouseleave', function () {
    bottleimage.style.opacity = "100%",
        rightimage.style.opacity = "100%",
        leftimage.style.opacity = "100%",
        cone.style.opacity = "100%",
        stone.style.transform = "rotate(0deg)",
        gsap.to(aboutus, {
            opacity: 0,
            scale: 0,
        })
})
// 
const about = new SplitType('.about');
// 
let ham = document.getElementById('hamburgur');
let hamtap = document.querySelectorAll('.about');
let one = document.getElementById('one');
let two = document.getElementById('two');
let third = document.getElementById('three');
let ibrow = "take";
function show() {
    hamtap.forEach((elme) => {
        elme.classList.toggle('active');
    })

    if (ibrow == "take") {
        two.style.opacity = 0;
        bottleimage.style.display = "none";
        leftimage.style.display = "none";
        stone.style.display = "none";
        one.style.transform = " translateY(14px)  rotate(-45deg)";
        third.style.transform = "  translateY(-6px)   rotate(45deg)";
        ibrow = "took";
    } else {
        bottleimage.style.display = "block";
        leftimage.style.display = "block";
        stone.style.display = "block";
        two.style.opacity = 1;
        one.style.transform = "rotate(0deg)";
        third.style.transform = "rotate(0deg)";
        ibrow = "take";
    }

}
ham.addEventListener('click', () => {
    show();
    gsap.from('.char', {
        y: 100,
        stagger: 0.03,
        opacity: 0,
        transform: "rotateX(90deg)",
    })
})
let bottomlogo = document.getElementById('bottom_logo');
gsap.to(bottomlogo, {
    y: 100,
    position: "fixed",
    duration: 1,
    scrollTrigger: {
        trigger: "#righthand img",
        start: "top 60%",
        end: "top 0%",
        scrub: 1,


    }
})
// 
const future = new SplitType('.future');
// 
gsap.from(' .future .char', {
    y: 100,
    stagger: 0.01,
    opacity: 0,
    transform: "rotateX(90deg)",
    scrollTrigger: {
        trigger: "#page2",
        start: "top 70%",
        end: "top 30%",
        scrub: 5,
    }
})
gsap.to("#apna_logo", {
    transform: "rotateY(0deg)",
    scrollTrigger: {
        trigger: "#page3",
        strat: "top 20%",
        end: "top 0%",
        scrub: "3",
    }
})


const joytext = new SplitType('.joy_text');

gsap.from(".joy_text .char", {
    opacity: 0.2,
    stagger: 0.5,
    duration: 1.3,
    scrollTrigger: {
        trigger: "#page5",
        start: "top 30%",
        end: "top 0%",
        scrub: 5
    }
})


let t1=gsap.timeline();
t1.to('#big_wine_toto',{

y:450,
scrollTrigger:{
    trigger:"#page6",
    start:"top 30%",
    end:"top 0%",
    scrub:5,
}

})














let photochange = document.querySelectorAll('.photochange');
function gotochange(cab) {


    if (cab == 0) {
        document.getElementById("winesall").src = "https://www.lidiaeamato.com/wp-content/uploads/2023/03/Rosato-4.jpg";
    }


    if (cab == 1) {
        document.getElementById("winesall").src = "https://www.lidiaeamato.com/wp-content/uploads/2023/03/Trebbiano-DOC-1.jpg";
    }
    if (cab == 2) {
        document.getElementById("winesall").src = "https://www.lidiaeamato.com/wp-content/uploads/2023/03/Montepulciano-DOC-Senza-Solfiti-1.jpg";
    }
    if (cab == 3) {
        document.getElementById("winesall").src = "https://www.lidiaeamato.com/wp-content/uploads/2023/03/Montepulciano-DOC-Senza-Solfiti-1.jpg";
    }


    if (cab == 4) {
        document.getElementById("winesall").src = "https://www.lidiaeamato.com/wp-content/uploads/2023/03/Montepulciano-DOC-1.jpg";
    }
    if (cab == 5) {
        document.getElementById("winesall").src = "https://www.lidiaeamato.com/wp-content/uploads/2023/03/Montepulciano-DOC-1.jpg";
    }


}

photochange.forEach((touch, key) => {
    touch.addEventListener('mouseenter', () => {
        let meme = key;
        gotochange(meme);
        gsap.from("#winesall", {
            opacity: 0,
            y: -100,
            duration: 1,
            scrub: 5,
            transform: "rotateY(90deg)",
        })

    })
})





























const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

