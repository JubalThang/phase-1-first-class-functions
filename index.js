function receivesAFunction(callBackFunction) {
    callBackFunction()
}
function namedFunction(){
    console.log('I am a named function')
}
function returnsANamedFunction() {
   return namedFunction
}
function returnsAnAnonymousFunction() {
    return function() {
        console.log("I\'m an unnamed function")
    }
}