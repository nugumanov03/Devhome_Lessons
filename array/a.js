a1 = 5
a2 = 7
a3 = 9


    const fruits = [4 ,5 ,-3, 4, 2, 3];
    // fruits.push(obj , "banana", "apple", "peach");
    const pos = []
    for(let i = 0; i < fruits.length; i++){
        if( fruits[i] > 0){
            pos.push(fruits[i])
        }
    }
    console.log(pos.length)

const arr = [1,  -3, 4, -2, 1];

const dva = (arr) =>
arr.reduce((result, current, index) => 

(index > 0 && (current >= 0) === (arr[index - 1] >= 0)

) || result, false);

const result = dva(arr) ? "YES" : "NO";
console.log(result);





