function spawnStar(initial = false) {
    const star = document.createElement("div");
    star.className = "star";
    star.textContent = "★";

    star.style.fontSize = (12 + Math.random() * 35) + "px";

    star.style.setProperty(
        "--duration",
        (4 + Math.random() * 5) + "s"
    );

    star.style.setProperty(
        "--spin",
        (Math.random() * 1080 - 540) + "deg"
    );

    if (initial) {
        star.style.left = Math.random() * 100 + "vw";
        star.style.top = Math.random() * 100 + "vh";
    } else {
        if (Math.random() < 0.5) {
            star.style.left = Math.random() * 100 + "vw";
            star.style.top = "105vh";
        } else {
            star.style.left = "105vw";
            star.style.top = Math.random() * 100 + "vh";
        }
    }

    star.style.setProperty(
        "--dx",
        -(window.innerWidth * (0.3 + Math.random() * 0.7)) + "px"
    );

    star.style.setProperty(
        "--dy",
        -(window.innerHeight * (0.3 + Math.random() * 0.7)) + "px"
    );

    document.body.appendChild(star);

    star.addEventListener("animationend", function() {
        star.remove();
    });
}

for (let i = 0; i < 75; i++) {
    spawnStar(true);
}

setInterval(function() {
    spawnStar();
}, 85);
