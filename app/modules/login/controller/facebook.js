



 const passport = require('passport');
 const GoogleStrategy = require('passport-google-oauth20').Strategy;
 const FacebookStrategy = require('passport-facebook').Strategy;

   
 
       
module.exports =()=>{
    passport.use(new GoogleStrategy({
        clientID: '2636368836499129',
        clientSecret: '0aebe6f4fe80c6c1505dcd4ba64e2b45',
        callbackURL: 'https://localhost:3000/api/callback/gmail',
        profileFields: ['id', 'displayName', 'name']
        
    },
        async (accessToken, refreshToken, profile, done) => {
            
   
            done(null, (profile));
        }));



    passport.use(
        new FacebookStrategy(
            {
                clientID: '2636368836499129',
                clientSecret: '0aebe6f4fe80c6c1505dcd4ba64e2b45',
                callbackURL: 'https://localhost:3000/api/callback/facebook',
                profileFields: ['email']
            },
           
            async (accessToken, refreshToken, profile, done) => {
                console.log(accessToken,refreshToken,profile)
                done(null, profile);
    
            }
        )
    );
    

}




