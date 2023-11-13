n = 4
arr = [];
for(let i = 0; i < n ;i++){
    // console.log(i);
    arr[i] = []
    for(let j = 0; j < n; j++){
        if( i == 0 || j == 0){
            arr[i][j] = 1
        }else{
            arr[i][j]= arr[i-1][j]+arr[i][j-1]
        }
    }
}
console.table(arr)

