// $(window).scroll(function () {
//   var scroll = $(window).scrollTop();
//
//   if (scroll > 130)
//   {
//     $('.header').css('position','fixed');
//     $('.header').css('background','transparent');
//   }
//   if (scroll == 0)
//   {
//     $('.header').css('position','static');
//     $('.header').css('background-color','#BA9F4E');
//   }
//
//
// });


window.addEventListener("scroll", function() {
let navArea = document.getElementById("navArea");

if (window.pageYOffset > 0) {
navArea.classList.add("is-sticky");
} else {
navArea.classList.remove("is-sticky");
}
});
