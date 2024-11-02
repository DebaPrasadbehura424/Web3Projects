

// let boxes = document.querySelectorAll(".box").forEach(item => {
//     item.childNodes[1].style.display="none";
//     item.addEventListener("mouseover", event => {
//      item.childNodes[1].style.display="block";
//     });
//     item.addEventListener("mouseleave", event => {
//      item.childNodes[1].style.display="none";
//     });
// });



// gsap.to(".square",{
//     x:700,
//     duration:3,
//     scrollTrigger:".square2"
//     })
//     gsap.to(".square2",{
//         x:900,
//         duration:3
//     })


// part2


// gsap.to(".square", {
//     x: 700,
//     duration: 3,
//     scrollTrigger: {
//         trigger: ".square",
//         start: "top 80%",
//         end:"top 20%",
//         // 1// we can also write this 

//         // 2//    start:"top center" it run when you touch veiwport center
//         // 3// markers: true we can set it s property
//         // set markers this
//         // markers: {
//         //     startColor: "black",
//         //     endColor: "yellow",
//         //     fontSize: "4rem",
//         //     indent: 200
//         // },
//         // best sence
//         markers: true
//     }
// })


// gsap.to(".square2", {
//     x: 700,
//     duration: 3,
//     scrollTrigger: {
//         trigger: ".square2",
//         start: "top 50%",
//         end:"top 10%",
//         toggleClass:"red",
//         // 1// we can also write this 

//         // 2//    start:"top center" it run when you touch veiwport center
//         // 3// markers: true we can set it s property
//         // set markers this
//         // markers: {
//         //     startColor: "black",
//         //     endColor: "yellow",
//         //     fontSize: "4rem",
//         //     indent: 200
//         // },
//         // best sence
//         markers: true

//     }
// })


// TOGGLE ACTIONS FOR ANIMATIONS AGAIN


// gsap.to(".square1", {
//     x: 700,
//     duration: 3,
//     scrollTrigger: {
//         trigger: ".square1",
//         start: "top 50%",
//         end: "top 10%",
//         // toggleClass:"red",
//         //it take 4 diff actions
//         // toggleActions:"play           none                none         none",
//         //               // onEnter    onLeave           onEnterBack    onLeaveBack

//         // toggleActions: "restart    reverse       none    none", kama kamlani

//         // toggleActions: "restart    none      none    none", bit this one working

//         //  toggleActions: "restart    pause      none    none",
//         // we can use (onlyback)(complete)  as property in this above 4 things

//         markers: true

//     }
// })
gsap.to(".square3", {



    x: 500,
    y:500,
    // opacity:0,
    duration:5,
    scrollTrigger: {

        trigger: ".box3",
        start:"top 10%",
        end:"top 0%",
        scrub:true,
        markers:true


    }



})








let l1 = gsap.timeline();
l1.to(".square", {
    y: 730,
    x: -580,
    duration: 5,
    delay: 1,
    scrollTrigger: {
        trigger: ".square",
        start: "top 20%",
        end: "top 10%",
        scrub: 4,

    }
})

l1.to(".square2", {

    x: 1200,
    y: 1000,
    duration: 6,
    delay: 6,

    scrollTrigger: {
        trigger: ".box3",
        start: "top 20%",
        end: "top 10%",
        scrub: true,
        //    markers:true

    }
})
























































// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });














