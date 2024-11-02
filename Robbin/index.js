





var t1 = gsap.timeline();
t1.from("#logo_side img ,#logo_side h2,#options ul li a,#page1 h1,#page1 p,i,#page1 button", {
    x: -100,
    opacity: 0,
    duration: 2,
    delay: 2
})
let l1 = gsap.timeline();
l1.to("#myphoto img", {
    y: 730,
    x: -450,
    scale: 1.1,
    duration: 5,
    delay: 1,
    scrollTrigger: {
        trigger: "#two",
        start: "top 20%",
        end: "top 10%",
        scrub: 5,
    }
})

l1.from("#divider #sec .test,#divider #first .motiv", {
    y: 100,
    opacity: 0,
    duration: 5,
    delay: 1,
    scrollTrigger: {
        trigger: "#two",
        start: "top 30%",
        end: "top 5%",
        scrub: 5,
    }
})

l1.from("#works #offer_work .box1", {
    x: -400,
    opacity: 0,
    scale: 0,
    duration: 6,
    delay: 6,
    scrollTrigger: {
        trigger: "#three",
        start: "top 5%",
        end: "top 10%",
        scrub: 5,
    }
})
l1.from("#works #offer_work2 .box1", {
    x: 400,
    opacity: 0,
    scale: 0,
    duration: 5,
    delay: 3,
    scrollTrigger: {
        trigger: "#works #offer_work .box1",
        start: "top 10%",
        end: "top 0%",
        scrub: 5,
    }
})

l1.from("#four #firstrow img", {
    y: -200,
    opacity: 0,
    duration: 1,
    delay: 1,
  
    scrollTrigger: {
        trigger: "#four",
        start: "top 10%",
        end: "top 5%",
        scrub: 5,
        
    }
})



l1.from("#four #secrow img", {
    y: 100,
    opacity: 0,
    duration: 1,
    delay: 1,
    scrollTrigger: {
        trigger: "#four #firstrow img",
        start: "top 10%",
        end: "top 5%",
        scrub: 5,
      
    }
})

l1.from("#four #thirdrow img", {
    x: 100,
    opacity: 0,
    duration: 1,
    delay: 1,
    scrollTrigger: {
        trigger: "#four #secrow img",
        start: "top 9%",
        end: "top 4%",
        scrub: 5,
        
    }
})



