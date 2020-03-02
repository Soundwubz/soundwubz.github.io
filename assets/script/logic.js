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
    if(activeTab.attr("data-location") !== location) {
        activeTab.css("opacity", "0");
        setTimeout(function() {
            // debugger;
            activeTab.css("display", "none");
            setTimeout(function() {
                $("." + location + "-content").css("display", "block");
                $("." + location + "-content").css("opacity", "1");
                activeTab = $("." + location + "-content");
                console.log('new active tab');
                console.log(activeTab);
            }, 100)
        }, 500);
    }
}

$('.nav-btn').on("click", (event) => {
    let element = $("#" + event.target.id);
    console.log(element);
    let location = element.attr("data-location");
    switch(location) {
        case "home":
            changeTab(location);
            break;
        case "about":
            changeTab(location);
            break;
        case "projects":
            changeTab(location);
            break;
    }
});