var links = document.links;
for (var i = 0; i < links.length; i++) {
    links[i].target = "_blank";
}

const base = {
    origin: 'bottom',
    delay: 300,
    distance: '120px',
    easing: 'ease-in-out',
};

const project = {
    origin: 'left',
    delay: 200,
    distance: '200px',
    easing: 'ease-in-out',
};

const award = {
    origin: 'left',
    delay: 300,
    interval: 300,
    distance: '200px',
    easing: 'ease-in-out',
};

const hr = {
    origin: 'left',
    delay: 0,
    distance: '200px',
    easing: 'ease-out',
};

window.sr = ScrollReveal();

sr.reveal('.animate', base);
sr.reveal('.project', project);
sr.reveal('.award', award);
sr.reveal('.hr3', hr);

// var thisis = document.getElementById("wrapper");
// var tyty = document.getElementById("move");
// var witth = tyty.offsetWidth;



// thisis.style.paddingRight = witth + "px";


const track = document.getElementById("image-track");

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
};

const handleOnMove = e => {
    if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
    maxDelta = window.innerWidth / 2;

    const percentage = mouseDelta / maxDelta * -100,
    nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
    nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    track.dataset.percentage = nextPercentage;

    track.animate({
    transform: `translate(${nextPercentage}%, -50%)`
    }, {
    duration: 1200,
    fill: "forwards"
    });

    for (const image of track.getElementsByClassName("image")) {
    image.animate({
        objectPosition: `${100 + nextPercentage}% center`
    }, {
        duration: 1200,
        fill: "forwards"
    });
    }
};

/* -- Had to add extra lines for touch events -- */

window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);
//# sourceURL=pen.js