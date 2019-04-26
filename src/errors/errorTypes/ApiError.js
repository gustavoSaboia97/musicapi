export default class ApiError extends Error {
    
    constructor(message, status){
        super(message)
        this.name = 'API_ERROR'
        this.status = status
    }
}