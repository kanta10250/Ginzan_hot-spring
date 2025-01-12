let snowContainer = document.querySelector('snow-container');

const createSnow = () => {
    let snow  = document.createElement("span");
    snow.className = "snow";

    minSize = 5;
    maxSize = 10;

    let snowSize = Math.random() * (macSize - minSize) + minSize;

    snow.style.width = snowSize + "px";
    snow.style.height = snowSize + "px";

}