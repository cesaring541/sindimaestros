var LocalStrategy   = require('passport-local').Strategy;
var User            = require('../app/models/user');

module.exports = function(passport) {

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    passport.use('local-signup', new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) {
        process.nextTick(function() {

            User.findOne({'email': email}, function(err, user) {
                if (err)
                    return done(err);

                if (user) {
                    return done(null, false, req.flash('signupMessage', 'El email ingresado ya existe'));
                } else {
                    var newUser            = new User();

                    newUser.email       = email;
                    newUser.password    = newUser.generateHash(password);
                    newUser.joined      = req.body.joined;
                    newUser.name        = req.body.name;
                    newUser.lastName    = req.body.lastName;
                    newUser.role        = req.body.role;

                    newUser.save(function(err) {
                        if (err)
                            throw err;
                        return done(null, newUser);
                    });
                }
            });    
        });
    }));

    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    passport.use('local-login', new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true
    },
    function(req, email, password, done) {
        
        User.findOne({'email' : email}, function(err, user) {
            
            if (err)
                return done(err);

            if (!user)
                return done(null, false, req.flash('loginMessage', 'El email ingresado no está registrado'));

            if (!user.validPassword(password))
                return done(null, false, req.flash('loginMessage', 'Contraseña incorrecta'));

            return done(null, user);
        });

    }));

};