const objArray = [
    { name: 'apple', price: 100 },
    { name: 'banana', price: 200 },
    { name: 'grape', price: 300 },
  ]
  
  // myFind 를 구현하여 arr.find 와 동일한 값이 나오도록 하기.
  function myFind(arr, callback) {
    // myFind 구현
    for (let i = 0; i < arr.length; i++) {
       if(callback(arr[i])){
        return arr[i];
       }       
    }
  }
  
  const result1 = objArray.find(function (obj) {
    return obj.name === 'banana';
  });
  
  const result2 = myFind(objArray, function (obj) {
    return obj.name === 'banana';
  });
  console.log(result1 === result2); // true