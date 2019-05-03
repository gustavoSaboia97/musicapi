import basicAuth from 'basic-auth';

export default class Authenticator{

    authenticate(req, res, next){    
        
        const userAuth = basicAuth(req);

        const login = process.env.LOGIN || "login";
        const password = process.env.PASSWORD || "password";

        const unauthorized = (req) => {
            res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
            return res.sendStatus(401);
        };

        if (!userAuth || !userAuth.name || !userAuth.pass) {
            return unauthorized(res);
        }
        
        if (userAuth.name === login && userAuth.pass === password) {
            return next();
        } else {
            return unauthorized(res);
        }
    }

}