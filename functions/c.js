function f(x){
    if(x == 1){
        return 1
    }
    return x * f(x-1)
}
// f(5) = 5 * f(4) = 120
// f(4) = 4 * f(3) = 24
// f(3) = 3 * f(2) = 6
// f(2) = 2 * f(1) = 2
// f(1) = 1
console.log(f(5))
// 5!= 5 * 4 * 3 * 2 * 1
// 5! = 5 * 4!
// 4! = 4 * 3!
// 1! = 1