// function myFunction() {
//     var input, filter, table, tr, td, i, txtValue;
//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
//     table = document.getElementById("myTable");
//     tr = table.getElementsByTagName("tr");
//     for (i = 0; i < tr.length; i++) {
//         td = tr[i].getElementsByTagName("td")[0];
//         if (td) {
//             txtValue = td.textContent || td.innerText;
//             if (txtValue.toUpperCase().indexOf(filter) > -1) {
//                 tr[i].style.display = "";
//             } else {
//                 tr[i].style.display = "none";
//             }
//         }
//     }
// }
// let p3=document.getElementById("p3");
// let p4=document.getElementById("p4");
// let questions = document.getElementById("questions").style.display = "none";
// let note1 = document.getElementById("note1").style.display = "none";
// let firstrow = document.getElementById("firstrow");
// let flag = 0;
// ques.addEventListener("click", function () {
//     if (flag == 0) {
//         let main = document.getElementById("main").style.display = "none";
//         let questions = document.getElementById("questions").style.display = "block";
//         let note1 = document.getElementById("note1").style.display = "none";
//         let p4 = document.getElementById("p4").style.display = "none";
//         let p3 = document.getElementById("p3").style.display = "none";
     
       
//         flag = 1;
//     }
//     else {
//         main.style.display = "block";
//          questions.style.display = "none";
//          let note1 = document.getElementById("note1").style.opacity = "0";
//          p4.style.display = "block";
//          p3.style.display = "block";
       

//         flag = 0;
//     }


// });

// firstrow.addEventListener("click", function () {

//     let main = document.getElementById("main").style.display = "none";
//     let questions = document.getElementById("questions").style.display = "none";
//     let note1 = document.getElementById("note1").style.display = "block";
// });
var t1 = gsap.timeline()
t1.from("#logo ,.icon,.options,#main p,#main button", {
    y: -100,
    duration: 1.5,
    delay: 0.7,
    opacity: 0,
    stagger: 0.3
});

gsap.from("#main h1", {
    x: -200,
    duration: 1,
    opacity: 0,
    delay: 2,
    stagger: 0.5,

})









