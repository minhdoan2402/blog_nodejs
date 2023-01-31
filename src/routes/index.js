const newsRouter = require("./news");
const siteRouter = require("./site");
function route(app) {
  // function(req, res) thay (req, res) =>
  // get : được xem là router
  // app.get("/", (req, res) => {
  //   res.render("home");
  // });

  // router -> news
  // app.get("/news", (req, res) => {
  //   res.render("news");
  // });
  app.use("/news", newsRouter);
  app.use("/", siteRouter);

  // router -> favicon
  app.get("/favicon.ico", (req, res) => res.status(200));

  // router -> search
  // app.get("/search", (req, res) => {
  //   res.render("search");
  // });
}

module.exports = route;
