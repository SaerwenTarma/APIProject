const respuesta = require("request-promise");

function obteneramiibo(nombreamiibo){

    var options ={
        uri: "https://www.amiiboapi.com/api/amiibo/?name=" + nombreamiibo,
        json:true
    }

    return respuesta(options);

}
module.exports = obteneramiibo;
