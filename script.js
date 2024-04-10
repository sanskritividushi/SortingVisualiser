let randomizearr = document.getElementById("randomize_arr_btn");
let sortb = document.getElementById("sort_button");
let bars_container= document.getElementById("bars_container");
let minrange = 1;
let maxrange = 50;
let barcount = 35;
let unsortedarr= new Array(barcount);

function randomnum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function createrandomarr() {
    for (let i = 0; i< barcount; i++){
        unsortedarr[i] = randomnum(minrange, maxrange);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    createrandomarr();
    renderbars(unsortedarr);
});

function renderbars(array) {
    for (let i = 0; i < array.length; i++) {
        let bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = array[i]*10  + "px";
        bars_container.appendChild(bar);
    }
}

randomizearr.addEventListener("click", function () {
    createrandomarr();
    bars_container.innerHTML = "";
    renderbars(unsortedarr);
});
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
async function bubblesort(array) {
    let bars= document.getElementsByClassName("bar");
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                for (let k = 0; k < bars.length; k++) {
                    if (k !== j && k !== j + 1) {
                        bars[k].style.backgroundColor = "#662549" ;
                    }
                }
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                bars[j].style.height = array[j] * 10 + "px";
                bars[j].style.backgroundColor = "#E8BCB9";
               // bars[j].innerText = array[j];
                bars[j + 1].style.height = array[j + 1] * 10 + "px";
                bars[j + 1].style.backgroundColor = "#FFA586";
                //bars[j + 1].innerText = array[j + 1];
                await sleep(10);
            }   
        }
        await sleep(30);
    }
    return array;
}

sortb.addEventListener("click", function () {
    let sorted_arr = bubblesort(unsortedarr);
    console.log(sorted_arr);
});

let speed = 50; 

function setSpeed(level) {
    switch (level) {
        case 1:
            speed = 100;
            break;
        case 2:
            speed = 50;
            break;
        case 3:
            speed = 25;
            break;
        case 4:
            speed = 10;
            break;
        case 5:
            speed = 5;
            break;
        default:
            speed = 50; 
            break;
    }
}

document.querySelectorAll(".speed-btn").forEach((button, index) => {
    button.addEventListener("click", function () {
        setSpeed(index + 1);
        document.querySelectorAll(".speed-btn").forEach((btn) => {
            btn.classList.remove("active");
        });
        button.classList.add("active");
    });
});

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function bubblesort(array) {
    let bars = document.getElementsByClassName("bar");
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                for (let k = 0; k < bars.length; k++) {
                    if (k !== j && k !== j + 1) {
                        bars[k].style.backgroundColor = "#662549";
                    }
                }
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                bars[j].style.height = array[j] * 10 + "px";
                bars[j].style.backgroundColor = "#E8BCB9";
                bars[j + 1].style.height = array[j + 1] * 10 + "px";
                bars[j + 1].style.backgroundColor = "#FFA586";
                await sleep(speed); 
            }
        }
        await sleep(speed); 
    }
    return array;
}
