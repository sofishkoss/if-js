let currentColor=0;
const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

function change1() {
    currentColor++;
    if (currentColor>5) currentColor=0;
    let a = document.getElementById("text1");
    a.style.color = colors[currentColor];
}

function change2(){
    currentColor++;
    if (currentColor>5) currentColor=0;
    let u = document.getElementById("text2");
    u.style.color = colors[currentColor];
}
function change3(){
    currentColor++;
    if (currentColor>5) currentColor=0;
    let k = document.getElementById("text3");
    k.style.color = colors[currentColor];
}
