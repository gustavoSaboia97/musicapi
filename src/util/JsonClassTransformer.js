export default class JsonClassTransformer{
    transform(obj){
        let jsonString = JSON.stringify(obj)
        jsonString = jsonString.replace(/_/g, "")
        return JSON.parse(jsonString)
    }
}