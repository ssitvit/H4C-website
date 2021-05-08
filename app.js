const hamburger_menu = document.querySelector(".landhamburger-landmenu");
const container = document.querySelector(".landingcontainer");

hamburger_menu.addEventListener("click", () => {
    container.classList.toggle("active");
});

window.onload = function () {
    console.log("loaded");
    var typed = new Typed("#typed", {
        strings: ["",
            "WELCOME TO IEEE SSIT",
            "RISKCOVRY",
            "PRESENTS",
            "HACK4CAUSE 4.0",
            "Block Chain",
            "ARTICIAL INTELLIGENCE",
            "WEBDEV",
            "Internet of things",
        ],
        backSpeed: 15,
        smartBackspace: true,
        backDelay: 1900,
        startDelay: 500,
        typeSpeed: 25,
        loop: true,
    });
};

// timer

var deadline = new Date("May 30 , 2021 21:00:00").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var t = deadline - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);
    // document.getElementById("countdown").innerHTML = "<div class='time'> <span class='number'>" + days + "</span>d<span class='number'> " + hours + "</span>h<span class='number'> " + minutes + "</span>m<span class='number'> " + seconds + "</span>s " + "</div>";
    document.getElementById("countdown").innerHTML =
        "<div class='time'> <span class='number'>" +
        days +
        "</span> : <span class='number'> " +
        hours +
        "</span> : <span class='number'> " +
        minutes +
        "</span> ";
    if (t < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = `<h2>The Hackathon has begun!</h2>`;
    }
}, 1000);
