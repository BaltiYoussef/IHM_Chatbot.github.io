var img = document.querySelector('img');
img.addEventListener('click', onClick, false);


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function openpage0() {
    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
    width=1000,height=1000,left=250,top=250`;
    window.open("./congrats2.html", params)
    window.close("./roulette.html")
}

function openpage1() {
    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
    width=1000,height=1000,left=250,top=250`;
    window.open("./congrats3.html", params)
    window.close("./roulette.html")
}

function openpage2() {
    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
    width=1000,height=1000,left=250,top=250`;
    window.open("./congrats.html", params)
    window.close("./roulette.html")
}

function openpage3() {
    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
    width=1000,height=1000,left=250,top=250`;
    window.open("./congrats1.html", params)
    window.close("./roulette.html")
}



function onClick() {
    const music = new Audio('./../img/roulette.mp3');
    music.play()


    this.removeAttribute('style');

    var res = getRandomInt(3)


    var deg = Math.round(((getRandomInt(4) + 2) * 360) + (res * 90) + 45);

    console.log(res)
    if (res == 0) {
        console.log("article acheté ")
        setTimeout(openpage0, 2500);
    } else if (res == 1) {
        console.log("voyage sibérie ok")
        setTimeout(openpage1, 2500);
    } else if (res == 2) {
        console.log("5% sur premier achat")
        setTimeout(openpage2, 2500);
    } else {
        console.log("perdu")
        setTimeout(openpage3, 2500);
    }


    var css = '-webkit-transform: rotate(' + deg + 'deg);';


    this.setAttribute('style', css);

}