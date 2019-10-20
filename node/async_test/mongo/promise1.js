let Promise = require('promise')
let x = new Promise(function(resolve, reject){
    let isClean = true;  
    if(isClean){
        resolve("clean");
    }
    else{
        reject("not clean")
    }
}
)