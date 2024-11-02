
let move = document.querySelector('.move')
let mynotes = document.querySelector('.mynotes')
let mynotes2 = document.querySelector('.mynotes2')
let mynotes3 = document.querySelector('.mynotes3')
let mynotes4 = document.querySelector('.mynotes4')
let mynotes5 = document.querySelector('.mynotes5')
// mynotes.style.opacity="0%"

window.addEventListener("scroll", () => {

    if (window.pageYOffset > 2400 && window.pageYOffset < 4300) {
        move.style.top = "90%";

    }

    if (window.pageYOffset > 2450) {
        mynotes.style.setProperty('--afterback', 'scale(1,1)');
        mynotes.style.opacity = "100%";
    }
    if (window.pageYOffset > 2550) {
        mynotes2.style.setProperty('--aftertook', 'scale(1,1)');
        mynotes2.style.opacity = "100%";

    }
    if (window.pageYOffset > 2800) {
        mynotes3.style.setProperty('--afterlook', 'scale(1,1)');
        mynotes3.style.opacity = "100%";

    }
    if (window.pageYOffset > 3050) {
        mynotes4.style.setProperty('--afterkook', 'scale(1,1)');
        mynotes4.style.opacity = "100%";

    }
    if (window.pageYOffset > 3750) {
        mynotes5.style.setProperty('--aftercack', 'scale(1,1)');
        mynotes5.style.opacity = "100%";

    }


})









let musicall = document.querySelector(".musiclist_all");
let musicicons = '';
songschosse.forEach(elem => {
    musicicons += `
    <a href="${elem.pagelink}">             
    <img src="${elem.img}" alt="song">          
    </a>  
`
})
musicall.innerHTML = musicicons;
// gsap
let t1 = gsap.timeline();
t1.to(".musiclist_all", {
    x: "-450%",
    duration: 40,
    zIndex: 2,
    delay: 1,
    scrollTrigger: {
        trigger: ".musicicons",
        start: "top 0%",
        end: "top -40%",
        pin: true,
        scrub: 5,

    }
})




// firstpanel
let gamafirstsong = document.querySelector('.first_panel')
let gamasecsong = document.querySelector('.secoend_panel')
let nothingsong = '';
songalllist.forEach(x => {
    nothingsong += `
    
    <div class="first_song_rows">
    <a href="">    
        <img src="${x.img}"
            alt="look">
            </a>    
        <div class="innfo_songs">
            <h3>${x.filmname}</h3>
            <p>${x.singername}</p>
        </div>
        <div class="mp3_songs">
            <p>Mp3 Songs</p>
        </div>
    
    </div>
    
    
    `;
})
// secoend panel
gamafirstsong.innerHTML = nothingsong
// secoendpanel;
let nothingsongsec = '';
songalllistsec.forEach(y => {
    nothingsongsec += `
    
    <div class="first_song_rows">
    <a href="">    
        <img src="${y.img}"
            alt="look">
            </a>    
        <div class="innfo_songs">
            <h3>${y.filmname}</h3>
            <p>${y.singername}</p>
        </div>
        <div class="mp3_songs">
            <p>Mp3 Songs</p>
        </div>
    
    </div>
    
    
    `;
})
gamasecsong.innerHTML = nothingsongsec;

// loading time



// loading finish


gsap.to(".secenddivision", {
    display: "block",
    scrollTrigger: {
        trigger: ".first_panel",
        start: "top -10%",
        end: "top -10%",
    }


})




function navoption() {

    let dotstap = document.querySelector('.dots');
    let optionssongs = document.querySelector('.option_song');
    dotstap.addEventListener('click', () => {
        optionssongs.style.marginLeft = "100%";
        document.body.style.overflowY = "hidden";
    })
    let xmark = document.querySelector('.fa-xmark');
    xmark.addEventListener("click", () => {
        optionssongs.style.marginLeft = "-100%";
        document.body.style.overflowY = "scroll";

    })

}

navoption()
// nav option







// part2

function part2() {




    let singlesongs = document.querySelector('.single_songs');
    let entersong = "";
    secenddivision_song_list.forEach((loveu) => {
        entersong += `
    <div class="songs_list_single">
    <img  src="${loveu.srclist}" alt="song">
    <audio src="${loveu.auiolist}" ></audio>
    <p>${loveu.songname}</p>
    <button id="tap_tap">Add &#9829</button>
    </div>
    `;

    })

    singlesongs.innerHTML = entersong
    let audioplay = document.querySelectorAll('.songs_list_single audio')
    let audioplaycatch = document.querySelectorAll('.songs_list_single ')
    let rotateimg = document.querySelectorAll('.songs_list_single img');
    let songbutton = document.querySelectorAll('.songs_list_single button');
    songbutton.forEach((like, o) => {
        let sappo = "laga";
        like.addEventListener('click', () => {
            if (sappo == "laga") {
                like.style.color = "red";
                sappo = "lanka";

            } else {
                like.style.color = "black";
                sappo = "laga";

            }
        })

    })


    function cheacklist() {
        for (var i = 0; i < audioplay.length; i++) {
            audioplay[i].pause();
            rotateimg[i].classList.remove('rotingbox');

        }
    }
    audioplaycatch.forEach((caoch, keys) => {
        caoch.addEventListener('click', () => {
            cheacklist()
            audioplay[keys].play();
            rotateimg[keys].classList.add('rotingbox')
        })

    })
}
part2()

// DONT TOUCH LAST VILL;

// let read=fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
//     console.log(response.json());
// }).then((data) => {
//     console.log(data);
//   for(var x in data){
//     console.log(data[x].name);
//   }
// })


// let read = fetch('https://jsonplaceholder.typicode.com/users');
// read.then((response) => {
//     response.json().then((data) => {
//         for (var x in data) {
//             console.log(data[x].name);
//         }
//     })
// }).catch((reject)=>{
//     console.log("error");
// })

// let read=fetch('https://jsonplaceholder.typicode.com/users');

// read.then((response)=>{
//     response.json().then((data)=>{
//         console.log(data);
// for(var x in data){
//     console.log(data[x].name);
//     console.log(data[x].email);
// }
//     })
// })