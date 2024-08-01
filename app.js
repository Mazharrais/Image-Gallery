
let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";

});

// nextBtn.addEventListener("event", () => {
//     scrollContainer.style.scrollBehavior = "smooth";
//     scrollContainer.scrollLeft += 900;
// });

// backBtn.addEventListener("event", () => {
//     scrollContainer.style.scrollBehavior = "smooth";
//     scrollContainer.scrollLeft -= 900;
// });

function nextBtn2(){
    scrollContainer.style.scrollBehavior = "smooth";
       scrollContainer.scrollLeft += 900;
}

function backBtn1(){
    scrollContainer.style.scrollBehavior = "smooth";
       scrollContainer.scrollLeft -= 900;
}

