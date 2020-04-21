let date = new Date();
let month = date.getMonth() + 1;
let day = date.getDate();
let year = date.getFullYear();

// $('#date').text(month + "/" + day + "/" + year);


function closeNav() {
    // let className = event.currentTarget.className;
    let nav = $('.nav');
    nav.css("right", "-35%");
}

$('.close-btn').on("click", closeNav);

$('.open-button').on("click", (event) => {
    // let className = event.currentTarget.className;
    let nav = $('.nav');
    nav.css("right", "0");
});

// may have to reimplement. dropping frames
// could be from running off a phone hotspot.

// let activeTab = $('.home-content');
// function changeTab(location) {
//     if(activeTab.attr("data-location") !== location) {
//         activeTab.css("opacity", "0");
//         closeNav();
//         setTimeout(function() {
//             // debugger;
//             activeTab.css("display", "none");
//             setTimeout(function() {
//                 $("." + location + "-content").css("display", "block");
//                 $("." + location + "-content").css("opacity", "1");
//                 activeTab = $("." + location + "-content");
//                 console.log('new active tab');
//                 console.log(activeTab);
//             }, 100)
//         }, 500);
//     }
// }

$('.nav-btn').on("click", (event) => {
    let element = $("#" + event.target.id);
    console.log(element);
    let location = element.attr("data-location");
    switch(location) {
        case "home":
            // window.location.replace("/home");
            window.location.href = "/";
            break;
        case "about":
            // window.location.replace("/about");
            window.location.href = "/about";
            break;
        case "projects":
            // window.location.replace("/projects");
            window.location.href = "/projects";
            break;
    }
});