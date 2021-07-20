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