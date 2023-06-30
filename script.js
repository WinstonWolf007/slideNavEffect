let el1 = document.querySelector("#el1");
let el2 = document.querySelector("#el2");
let el3 = document.querySelector("#el3");

let bar = document.getElementById("navBar");

// default pos
bar.style.left = el1.getBoundingClientRect().left+"px";
bar.style.width = el1.getBoundingClientRect().width+"px";
bar.style.top = el1.getBoundingClientRect().bottom+"px";

el1.addEventListener("mousedown", () => {
    bar.style.left = el1.getBoundingClientRect().left+"px";
    bar.style.width = el1.getBoundingClientRect().width+"px";
    bar.style.top = el1.getBoundingClientRect().bottom+"px";
});

el2.addEventListener("mousedown", () => {
    bar.style.left = el2.getBoundingClientRect().left+"px";
    bar.style.width = el2.getBoundingClientRect().width+"px";
    bar.style.top = el2.getBoundingClientRect().bottom+"px";
});

el3.addEventListener("mousedown", () => {
    bar.style.left = el3.getBoundingClientRect().left+"px";
    bar.style.width = el3.getBoundingClientRect().width+"px";
    bar.style.top = el3.getBoundingClientRect().bottom+"px";
});
