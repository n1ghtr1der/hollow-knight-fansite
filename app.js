var navHome = document.getElementById("nav-home");
var navCommunity = document.getElementById("nav-community");
var navAboutus = document.getElementById("nav-aboutus");

navHome.addEventListener('click', showHome);
navCommunity.addEventListener('click', showCommunity);
navAboutus.addEventListener('click', showAboutus);

home = document.getElementById("home-container");
community = document.getElementById("community-container");
aboutus = document.getElementById("aboutus-container");

function showHome() {
    console.log('home');
    home.style.display = 'flex';
    community.style.display = 'none';
    aboutus.style.display = 'none';
}

function showCommunity() {
    console.log('community');
    home.style.display = 'none';
    community.style.display = 'flex';
    aboutus.style.display = 'none';
}

function showAboutus() {
    console.log('about us');
    home.style.display = 'none';
    community.style.display = 'none';
    aboutus.style.display = 'block';
}

var increaseSize = document.getElementById("increase-size");
var defaultSize = document.getElementById("default-size");
var decreaseSize = document.getElementById("decrease-size");

increaseSize.addEventListener('click', );
defaultSize.addEventListener('click', );
decreaseSize.addEventListener('click', );
