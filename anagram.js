function isAnagram(str1,str2){
    if (str1.length != str2.length) return false;
    let list = {}
    for(let val of str1){
        list[val] ? list[val]++ : list[val] = 1
    }
    console.log(list)

    for (let val of str2){
        if (!list[val]){
            return false
        }else{
            list[val--]
        }
    }
    return true

}

console.log(isAnagram('temu','metu'))