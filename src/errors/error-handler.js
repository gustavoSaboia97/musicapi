import ApiError from "./errorTypes/api-error";

export default class ErrorHandler{

    async apiError(err, req, res, next){
        if (err instanceof ApiError){
            console.log(`[API ERROR] ${err.message}`);
            res.status(err.status).json(err.message);
        }
        else{
            next(err);
        }
    }

    async genericError(err, req, res, next){
        console.log(`[GENERIC ERROR] ${err.message}`);
        res.status(500).json(err.message);
    }
}