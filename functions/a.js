// f(x) = x + 5
// f(3) = 8
// g(x,y) = x + y
// g(12, 6) = 18
function g(x ,y){
    x = x + y;
    for (let i = 0; i < x;i++){
        console.log(i);
    }
    return "Done"
}
function f(){
    return 8;
}
let x = 7
let y = 9
console.log(g(f(),f()))
console.log(g(f(),f()))
console.log(x);


function minimum(a,b){
    if(a < b) return a;else return b;
}
function min(a,b,c,d){
    return(minimum(minimum(a,b),minimum(c,d)))
}