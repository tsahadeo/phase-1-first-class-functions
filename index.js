
function receivesAFunction (cb){
    return cb();
}

function returnsANamedFunction(){
    return function blahBlah(){
    }
}

function returnsAnAnonymousFunction(){
    return function(){
    }
}