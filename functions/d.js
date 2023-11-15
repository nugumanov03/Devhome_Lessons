function power(a ,n){
    if( n == 0){
        return 1;
    }
    if( n%2 == 0) return power(a , n/2) * power(a , n/2);
    else return a * power(a , n-1);
}
// power(2,2) = 2 * power(2,1) = 4
// power(2,1) = 2 * power(2,0) = 2
// power(2,0) = 1
// a^10 = a^5 * a^5
// a^16 = a^8 * a^8 => f(n/2) * f(n/2)

console.log(power(4 , 5))
