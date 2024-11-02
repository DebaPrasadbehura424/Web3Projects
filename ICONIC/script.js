gsap.from('#resort_gate', {
    x: -50,
    scale: 1.2,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
        trigger: "#core4",
        start: "top 10%",
        end: "top 0%",
        // markers: true


    }
})
gsap.from('#resort_gate1', {
    y: 50,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
        trigger: "#resort_gate",
        start: "top 0%",
        end: "top 0%",
    }
})
gsap.from('#resort_gate2', {
    x: 50,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
        trigger: "#resort_gate1",
        start: "top 0%",
        end: "top 0%",
    }
})
gsap.from('#resort_gate3', {
    y: -50,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
        trigger: "#resort_gate2",
        start: "top 0%",
        end: "top 0%",
    }
})
gsap.from('#resort_gate4', {
    x: -50,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
        trigger: "#resort_gate3",
        start: "top 0%",
        end: "top 0%",
    }
})
gsap.from('#resort_gate5', {
    x: -50,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
        trigger: "#resort_gate4",
        start: "top 0%",
        end: "top 0%",
    }
})
gsap.from('#resort_gate6', {
    x: -50,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
        trigger: "#resort_gate5",
        start: "top 0%",
        end: "top 0%",
    }
})
gsap.from('#resort_gate7', {
    x: -50,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
        trigger: "#resort_gate6",
        start: "top 0%",
        end: "top 0%",
    }
})
gsap.from('#resort_gate8', {
    x: -50,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
        trigger: "#resort_gate7",
        start: "top 0%",
        end: "top 0%",
    }
})
gsap.from('#resort_gate9', {
    x: -50,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
        trigger: "#resort_gate8",
        start: "top 0%",
        end: "top 0%",
    }
})
gsap.from('  #big_ban h1', {
    y: 400,
    duration: 2,
    transform: "rotateY(100deg) ",

    ease: "bounce",
    scrollTrigger: {
        trigger: "#navbar1",
        start: "top -3%",
        end: "top 0%",
    }
})
gsap.from(' #core1 #navbar3 h3', {
    y: 200,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: "#navbar1",
        start: "top -3%",
        end: "top 0%",
    }



})

gsap.from(' #core2 #big_foot h1', {
    y: 400,
    duration: 2,
    transform: "rotateY(100deg) ",
    ease: "bounce",
    scrollTrigger: {
        trigger: "#core2 img",
        start: "top 5%",
        end: "top 0%",
    }
})

gsap.to('#imfs img', {
    y: 1070,
    opacity: 1,
    rotate: 360,
    stagger: 0.3,
    duration: 0.5,
    scrollTrigger: {
        trigger: "#core3",
        start: "top 20%",
        end: "top 0%",
        scrub: 5,

    }
})

gsap.from('#core2 img', {
    y: 200,
    opacity: 0,
    scale: 1.2,
    ease: "bounce",
    scrollTrigger: {
        trigger: "#big_ban h1",
        start: "top 60%",
        end: "top 0%",
        scrub: 5,


    }
})

gsap.set('#photo1', {
    x: 200,
})
gsap.set('#photo2', {
    x: -200,
})
gsap.to('#photo1', {
    x: -400,
    duration: 0.5,
    rotate: 360,
    scrollTrigger: {
        trigger: "#core6",
        start: "top 0%",
        end: "top 0%",
        scrub: 5,
    }
})
gsap.to('#photo2', {
    x: 400,
    rotate: 360,
    duration: 0.5,
    scrollTrigger: {
        trigger: "#core6",
        start: "top 0%",
        end: "top 0%",
        scrub: 5,
    }
})
document.getElementById('tap').addEventListener('click', () => {
    gsap.to('#core5 .box6', {
        x: 600,
        rotate: 360,
    })

    gsap.to('#core5 .box5', {
        x: -600,
        rotate: 360,
    })
    gsap.to('#core5 .box4', {
        y: -800,
        rotate: 360,
    })
    gsap.to('#core5 .box3', {
        y: 450,
        rotate: 360,
    })
    gsap.to('#core5 .box2', {
        x: -600,
        y: -300,
        rotate: 360,
    })
    gsap.to('#core5 .box1', {
        y: -250,
        x: 600,
        rotate: 360,
    })
    gsap.to('#core5 .box7', {
        y: -300,

        rotate: 360,
    })
    gsap.to('#core5 .box8', {
        x: 400,
        rotate: 360,
    })

    gsap.to('#core5 .box9', {
        x: -400,
        rotate: 360,
    })
    gsap.to('#core5 .box10', {
        y: -600,
        rotate: 360,
    })
    gsap.to('#core5 .box11', {
        y: 150,
        rotate: 360,
    })
    gsap.to('#core5 .box12', {
        x: -200,
        y: -300,
        rotate: 360,
    })
    gsap.to('#core5 .box13', {
        y: -250,
        x: 400,
        rotate: 360,
    })
    gsap.to('#core5 .box14', {
        y: -100,

        rotate: 360,
    })


})



