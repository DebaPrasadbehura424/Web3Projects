let mixlist = [
    {
        para: " Zhingal bell",
    },
    {
        para: " Merry chZhingal bellrismas",
    },
    {
        para: "zingallbell tune remix",
    },
    {
        para: "Merry chrismas tree",
    },
    {
        para: "Arjun beli remix",
    },
    {
        para: " Gudgaol ke bande",
    },

    {
        para: "Paisa ",
    },
    {
        para: "2024 Remic nonstop",
    },
    {
        para: " Unknown",
    },
    {
        para: "Unknown",
    },
    {
        para: " Esi tesi",
    },
    {
        para: " Bottle kholo",
    },
    {
        para: "Tadma",
    },
    {
        para: "Unknown",
    },
    {
        para: "Desi",
    },
    {
        para: "Unknown",
    },
    {
        para: "2023 remix",
    },
    {
        para: "Tera hoke nachda",
    },
    {
        para: "Ya ya ra ra",
    },
    {
        para: "Unknown",
    },
    {
        para: "2023 remix",
    },
    {
        para: "Nonstop remix",
    },
    {
        para: "Nonstop remix2",
    },
    {
        para: "Unknown",
    },
    {
        para: "Pyar di",
    },
    {
        para: "akh khad",
    },
    {
        para: "Tu mila",
    },
    {
        para: "Unknown",
    },
    {
        para: "Sara jamana",
    },
    {
        para: "Nonstop 2024 2",
    },
    {
        para: "Nonstop 2024 3",
    },
    {
        para: "Mahi ve",
    },
    {
        para: "Bhai chara",
    },
    {
        para: "Pehele bhi main",
    },
    {
        para: "Pada maut se pala mera",
    },
    {
        para: "Kuchde marthapiti",
    },
    {
        para: "Rap",
    },
    {
        para: "Dj pupu",
    },
    {
        para: "Tere pyar mein",
    },
    {
        para: "Jhuti be",
    },
    {
        para: "Mahi ve",
    },
    {
        para: "Mahi ve",
    },
    {
        para: "Love mashup",
    },
    {
        para: "Punjabi sher",
    },
    {
        para: "Bhola",
    },
    {
        para: "Bhojpuri hehe",
    },
    {
        para: "Bhojpuri kinga",
    },
    {
        para: "Unknown",
    },
    {
        para: "Unknown",
    },
    {
        para: "Jay sri ram",
    },
    {
        para: "Amara tak",
    },
    {
        para: "Ram ram",
    },
    {
        para: "Ram sena",
    },
    {
        para: "Ram ayodha",
    },
    {
        para: "Ram raj",
    },
    {
        para: "Ram ghar aye",
    },
    {
        para: "Ram aye hain",
    },
  
//   atrt




]




// dont touch part
let allmusic = document.querySelector('.allmusic');
k = 40;
let braket = "";
mixlist.forEach((m) => {
    braket += `
<div class="musiclistof_all   dommy">
       <img src="https://img.freepik.com/premium-vector/logo-music-equalizer-dj-spectrum-colorful_174590-2.jpg?size=338&ext=jpg&ga=GA1.1.2082370165.1711324800&semt=ais"
alt="song">
       <p class="p">${m.para}</p>
      <audio src="https://www.pagalworld.com.cm/files/download/id/686${k}" controls></audio>
</div>

`
    k++;
})
allmusic.innerHTML = braket;
// play part
let audio = document.querySelectorAll("audio");
let icons = document.querySelectorAll('.musiclistof_all');
function cheackplay() {
    for (var i = 0; i < audio.length; i++) {
        audio[i].pause();

    }
}
icons.forEach((run, key) => {
    run.addEventListener('click', () => {
        cheackplay();
        audio[key].play();
    })
})



