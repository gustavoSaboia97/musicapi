import basicAuth from 'basic-auth'

export default class Authenticator{

    constructor(){
        this._user = process.env.USER || "user"
        this._password = process.env.PASSWORD || "password"
    }

    authenticate(req, res, next){     
        console.log(this)
        let user = basicAuth(req)

        if (!user || !user.name || !user.pass) {
            return this._unauthorized(res)
        }
        
        if (user.name === this._user && user.pass === this._password) {
            return next()
        } else {
            return this._unauthorized(res)
        }
    }

    _unauthorized(res){
        res.set('WWW-Authenticate', 'Basic realm=Authorization Required')
        return res.sendStatus(401)
    }
}