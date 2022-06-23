home = document.getElementById("home-container");
community = document.getElementById("community-container");
aboutUs = document.getElementById("aboutus-container");


function navigate(page){
    console.log(page);
    switch(page) {
        case "home":
            home.style.display = 'flex';
            community.style.display = 'none';
            aboutUs.style.display = 'none';
            break;
        case "community":
            home.style.display = 'none';
            community.style.display = 'flex';
            aboutUs.style.display = 'none';
            break;
        case "about-us":
            home.style.display = 'none';
            community.style.display = 'none';
            aboutUs.style.display = 'block';
            break;
    }
}

    let element = document.getElementById("html");
    let fontSize = getComputedStyle(element, null).getPropertyValue("font-size");
    fontSize = parseInt(fontSize);

    localStorage.setItem('globalFontSize', fontSize);


function changeFontSize(type) {
    let element = document.getElementById("html");
    let fontSize = getComputedStyle(element, null).getPropertyValue("font-size");
    fontSize = parseInt(fontSize);

    switch(true) {
        case type == 'increase-font' && fontSize < 24:
            element.style.fontSize = (fontSize + 2) + "px";
            break;
        case type == 'decrease-font' && fontSize > 8:
            element.style.fontSize = (fontSize - 2) + "px";
            break;
        case type == 'default-font':
            fontSize = localStorage.getItem('globalFontSize');
            element.style.fontSize = fontSize + "px";
            break;
    }
}
