module.exports = {
  index: (req, res) => {
    res.render("index");
  },

  //about
  getAbout: (req, res) => {
    res.render("about");
  },
  //contact
  getContact: (req, res) => {
    res.render("contact");
  },

  //db redirect
  getHome: (req, res) => {
    res.redirect("/messages");
  },

  //searvices
  getSearvices: (req, res) => {
    res.render("searvices", { title: "Test Service" });
  },
  //testimonial
  getTestimonial: (req, res) => {
    res.render("testimonial");
  },
  //works
  getWorks: (req, res) => {
    res.render("works");
  },
  getPageNotFound: (req, res) => {
    res.render("404page");
  },
  getDetails: (req, res) => {
    res.redirect("/message/:id", { message: message });
  },
};
