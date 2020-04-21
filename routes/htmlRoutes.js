module.exports = function(app) {
    app.get("/", (req, res) => {
        res.render("index", {
            msg: "Welcome!"
        });
    });
    
    app.get("/about", (req, res) => {
        res.render("about");
    });

    app.get("/projects", (req, res) => {
        res.render("projects");
    });
}