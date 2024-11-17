function isAnagram(str1,str2){
    if (str1.length != str2.length) return false;
    let freq1 = {}
    let freq2 = {}
    for(let val of str1){
        freq1[val] = (freq1[val] || 0 ) + 1
    }
    for(let val of str2){
        freq2[val] = (freq2[val] || 0) + 1
    }

    for (let key in freq1){
        if (!(key in freq2)){
            return false
        }
        if (freq2[key] !== freq1[key]){
            return false
        }
    }
    console.log(freq1)
    console.log(freq2)
    return true
}

console.log(isAnagram('temu','metu'))