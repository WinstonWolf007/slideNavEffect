let el1 = document.querySelector("#el1");
let el2 = document.querySelector("#el2");
let el3 = document.querySelector("#el3");

let bar = document.getElementById("navBar");

function changeProperties(el) {
    bar.style.left = el.getBoundingClientRect().left+"px";
    bar.style.width = el.getBoundingClientRect().width+"px";
    bar.style.top = el.getBoundingClientRect().bottom+"px";
}

changeProperties(el1);

for (let el of [el1, el2, el3]) {
    el.addEventListener("mousedown", () => { changeProperties(el) });
}