counter = 10
for(let i = 1; i <= 15;i++){
    
    for(let j = i; j <= 15;j++){
        for(let k = j; k <= 15;k++){
            counter++
        }
    }
}

console.log(counter)