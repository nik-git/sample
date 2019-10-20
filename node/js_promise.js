function promise_callback_func(resolve_callback, reject_callback) {
    let a = 1+2
    if(a==2){
        resolve_callback('success')
    }
    else{
        reject_callback('failed')
    }
}
function resolve_callback_func(message1) {
    console.log('This is in the then '+ message1)
    }
function reject_callback_func(message1) {
    console.log('This is in the catch ' + message1)
    }
let promise =  new Promise(promise_callback_func)
let resolve = promise.then(resolve_callback_func)
let catch1 = resolve.catch(reject_callback_func)