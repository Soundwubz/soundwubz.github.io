$('.close-btn').on("click", (event) => {
    // let className = event.currentTarget.className;
    let nav = $('.nav');
    nav.css("right", "-35%");
});

$('.open-button').on("click", (event) => {
    // let className = event.currentTarget.className;
    let nav = $('.nav');
    nav.css("right", "0");
});

// may have to reimplement. dropping frames
// could be from running off a phone hotspot.

let activeTab = $('.home-content');

function changeTab(location) {
    if(activeTab.attr("data-location") != location) {
        activeTab.css("opacity", "0");
        setTimeout(function() {
            activeTab.hide();
        }, 500);
    }
}

$('.nav-btn').on("click", (event) => {
    let element = event.target;
    let location = element.attr("data-location");
    switch(location) {
        case "Home":
            changeTab(location);
            break;
        case "About":
            changeTab(location);
            break;
        case "Projects":
            changeTab(location);
            break;
    }
});