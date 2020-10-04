
const obteneramiibo = require("./library");


obteneramiibo("Mario").then(    (response) =>{
     response.amiibo.forEach(element => {
        console.log(element.name + ' de la Serie '+element.amiiboSeries + ' Fecha de lanzamineto ' + element.release.na )  })
        
         
     }
 

      
    ).catch((error) =>{
        console.log('error');
    });
    