function countdown(n){
if(n < 1){
    return [];
  }else{
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    console.log(countArray)
    return countArray
  }
}


countdown(9)