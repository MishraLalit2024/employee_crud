function formLoader(req, res, next){
    res.render('register');
    console.log("Form Loaded");
}

module.exports = formLoader;