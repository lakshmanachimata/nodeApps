module.exports = {
  facebookAuth: {
    clientID: '', // your App ID
    clientSecret: '',// your App Secret
    callbackURL: 'http://localhost:3000/auth/facebook/callback',
  },
  twitterAuth: {
    consumerKey: 'sOM9aZpoEyNAXKqvEUHd2O7cN',
    consumerSecret: '6I1x0PgH41AxuqtAKcfRqYtWDMKNv0TBaaoegW3RP3o1ks7NPk',
    callbackURL: 'http://localhost:3000/auth/twitter/callback',
  },
  googleAuth: {
    clientID: '262575533252-sviar9bm39g5c4dnlb6erkpvjme4hit2.apps.googleusercontent.com',
    clientSecret: '1K1fRgOmy1WJK4_Z8ycGRyuz',
    callbackURL: 'http://localhost:3000/auth/google/callback',
  },
};

