module.exports = function(app, passport) {

    app.get('/', function(req, res, next) {
        res.render('index.ejs'); 
    });
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    if (req.isAuthenticated())
        return next();

    res.redirect('/login');
}