let linesabout = document.getElementById('linesabout');
let aboutlist = document.getElementById('aboutlist_naving just');
let navabout = "new"
linesabout.addEventListener("click", function () {
    if (navabout == "new") {
        aboutlist.style.transform = "translateY(0%)";
        navabout = "old";
    } else {
        aboutlist.style.transform = "translateY(-140%)";
        navabout = "new"
    }


})




