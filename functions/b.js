function f(x){
    if(x == 1){
        return 1
    }
    if(x == 0){
        return 0
    }
    return f(x-1) + f(x-2)
}
// f(6) = f(5) + f(4) = 8
// f(5) = f(4) + f(3) = 5
// f(4) = f(3) + f(2) = 3
// f(3) = f(2) + f(1) = 2
// f(2) = f(1) + f(0) = 1
// f(1) = 1
// f(0) = 0

console.log(f(5))