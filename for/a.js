console.log("Starting code")
n = prompt()
cnt_o = 0
cnt_pos = 0
cnt_otri = 0
for( let i = 0; i < n; i++){
    chislo = prompt()
    if( chislo == 0){
        cnt_o += 1;
    }
    if( chislo < 0){
        cnt_otri +=1
    }
    if( chislo > 0){
        cnt_pos +=1
    }
}
console.log(cnt_o, cnt_pos, cnt_otri)


// prompt()
a = 2
b = 5
c = 0
d = 2
for (let i = a; i < b; i++){
    k = Math.sqrt(i)
    if(Math.floor(k) * Math.floor(k) == i ){
        console.log(i)
    }
}