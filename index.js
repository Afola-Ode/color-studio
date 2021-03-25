let colors = ["#C2185B", "#F57C00", "#512DA8", "#009688", "#e48900", "#be0000", "#1f441e", "#4fc514", "#03A9F4", "#CDDC39"];

document.querySelector("button").addEventListener("click", function(){
    let pos = Math.floor(Math.random()*10);
    document.querySelector("body").style.backgroundColor = `${colors[pos]}`;
 })