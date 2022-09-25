// require('dotenv').config()

// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const FacebookStrategy = require('passport-facebook').Strategy;



// // 1]  ----------------GOOGLE----------------------

// passport.use(new GoogleStrategy({
//     clientID: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     callbackURL: process.env.GOOGLE_CALL_BACK_URL,
//     accessType: 'offline',
//     profileFields: ['id', 'displayName', 'name', 'emails']
//     // userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo',
// },
//     async (accessToken, refreshToken, profile, done) => {
//         // console.log("-----Google profile -------- :", profile)
//         const { email, name } = profile._json;
//         const userData = {
//             email,
//             name,
//             login_type: "google"
//         };

//         await saveSocialUser(userData)

//         done(null, (profile));
//     }));



// // 2]  ----------------FACEBOOK----------------------

// passport.use(
//     new FacebookStrategy(
//         {
//             clientID: '2636368836499129',
//             clientSecret: '0aebe6f4fe80c6c1505dcd4ba64e2b45',
//             callbackURL: 'https://localhost:3000/login/fb',
//             profileFields: ['id',  'name']
//         },
//         async (accessToken, refreshToken, profile, done) => {
//             console.log(accessToken, refreshToken, profile)

         
//             const user = {
//                 id,
//                 firstname,
             
//             };
           
//             await user(user)
//             done(null, profile);

//         }
//     )
// );




// passport.serializeUser(function (user, done) {
//     done(null, user);
// });

// passport.deserializeUser(function (obj, done) {
//     done(null, obj);
// });

