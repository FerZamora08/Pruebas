const mate = {};
function sumar(a,b){
    return a+b;

}
function restar(a,b){
    return a-b;
}
function multiplicar(a,b){
    return a*b;

}
function dividir(a,b){
    if(b!==0){
        return a/b;
    } else{
        return"no se puede dividir entre 0"
    }

}

mate.sumar=sumar
mate.restar=restar
mate.multiplicar=multiplicar
mate.dividir=dividir
module.exports=mate;