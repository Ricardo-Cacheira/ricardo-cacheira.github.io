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

const html = document.querySelector('html');
html.style.scrollbarWidth = 'thin';

var currentProject;

function openProject(index) {
    currentProject = index;
    var element = document.getElementById("project"+index);
    var fade = document.getElementById("fade");
    element.classList.add("open");
    element.classList.remove("hidden");
    fade.classList.add("fadeAnim");
    fade.classList.remove("hidden");
    html.style.scrollbarWidth = 'none';
    disableScroll();
}

function closeProject() {
    var element = document.getElementById("project"+currentProject);
    var fade = document.getElementById("fade");
    element.classList.add("hidden");
    element.classList.remove("open");
    fade.classList.add("hidden");
    fade.classList.remove("fadeAnim");
    html.style.scrollbarWidth = 'thin';
    enableScroll();
    let iframe_tag = element.querySelector( 'iframe');
    let video_tag = element.querySelector( 'video' );
    if ( iframe_tag) {
        let iframeSrc = iframe_tag.src;
        iframe_tag.src = iframeSrc; 
    }
    if ( video_tag) {
        video_tag.pause();
    }
}

//scroll controll

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}