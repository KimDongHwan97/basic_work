const objArray = [
    { name: 'apple', price: 100 },
    { name: 'banana', price: 200 },
    { name: 'grape', price: 300 },
  ]
  
  // myMap를 구현하여 arr.map과 동일한 값이 나오도록 하기.
  function myMap(arr, callback) {
    let myMapResult2 = [];
    // myMap 구현
    for (let i = 0; i < arr.length; i++) {     
        myMapResult2.push(callback(arr[i]));       
    }
    return myMapResult2;
  }


  const result = myMap(objArray, function (item) {
    return item.price * 2;
  });
  console.log(result);

  // item.price = item.price * 2
  // return item;
