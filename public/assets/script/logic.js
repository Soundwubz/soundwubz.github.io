let date = new Date();
let month = date.getMonth() + 1;
let day = date.getDate();
let year = date.getFullYear();

// $('#date').text(month + "/" + day + "/" + year);


function closeNav() {
    let nav = $('.nav');
    nav.css("right", "-35%");
}

$('.close-btn').on("click", closeNav);

$('.open-button').on("click", () => {
    let nav = $('.nav');
    nav.css("right", "0");
});


$('.nav-btn').on("click", (event) => {
    let element = $("#" + event.target.id);
    console.log(element);
    let location = element.attr("data-location");
    switch(location) {
        case "home":
            window.location.href = "/";
            break;
        case "about":
            window.location.href = "/about";
            break;
        case "projects":
            window.location.href = "/projects";
            break;
    }
});