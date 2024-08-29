
//Given a starting list/array of data, it could make some statistical sense to know how much each value differs from the
//average. If for example during a week of work you have collected 55,95,62,36,48 contacts for your business, it might
//be interesting to know the total (296), the average (59.2), but also how much you moved away from the average each
//single day.

function distancesFromAverage(arr){
    let avg =  arr.reduce((sum,cur) => sum + cur,0) / arr.length
    return arr.map(x => Math.round((avg - x)*100)/100)
  }