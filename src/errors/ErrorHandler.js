import ApiError from "./errorTypes/ApiError";

export default class ErrorHandler{

    async apiError(err, req, res, next){
        console.log(err)
        if (err instanceof ApiError){
            console.log(`[API ERROR] ${err.msg}`)
            res.status(err.status).json(err.message)
        }
        else{
            next(err)
        }
    }

    async genericError(err, req, res, next){
        console.log(`[GENERIC ERROR] ${err.message}`)
        res.status(500).json(err.message)
    }
}