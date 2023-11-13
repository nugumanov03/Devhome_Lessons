n = 3
m = 3
arr =[
    [1 ,2, 7],
    [1 ,3, 5],
    [4, 1, 6]
]
let sum_arr = []
let active_rows = []
let max = -10000
for ( let i = 0; i < n ; i++){
    let sum = 0
    for ( let j = 0; j < m;j++){
        if( arr[i][j] > max){
            max = arr[i][j];
        }
        sum += arr[i][j];
    }
    sum_arr.push(sum)
}
console.log(sum_arr)
for ( let i = 0; i < n ; i++){
    active_rows[i] = 0;
    for ( let j = 0; j < m;j++){
        if( arr[i][j] == max){
            active_rows[i] = 1;
        }
    }
}
console.log(active_rows)
let max_sum = -10000;
for ( let i = 0; i < n ; i++){
    if (active_rows[i] == 1 ){
        if(sum_arr[i] > max_sum){
            max_sum= sum_arr[i];
            ind = i
        }
    }
}
console.log( max_sum , ind)

