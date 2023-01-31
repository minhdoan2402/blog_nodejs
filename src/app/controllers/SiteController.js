class SiteController {
  // GET /
  index(req, res) {
    res.render("home");
  }

  //   [GET] /search
  search(req, res) {
    res.render("search");
  }
}
// xuất file ra ngoài
module.exports = new SiteController();
