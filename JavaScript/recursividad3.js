/*function rangeOfNumbers(startNum, endNum) {
    if(endNum < startNum){
      return [];
    }else{
      const countArray = rangeOfNumbers(startNum, endNum - 1);
      countArray.unshift(endNum);
      console.log(countArray)
    }
  };*/

  function rangeOfNumbers(startNum, endNum) {
    if (endNum < startNum) {
      return [];
    } else {
      const numbers = rangeOfNumbers(startNum, endNum - 1);
      numbers.push(endNum);
      console.log(numbers)
      return(numbers);
    }
  }

  rangeOfNumbers(1,10)