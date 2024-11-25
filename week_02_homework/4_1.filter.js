const objArray = [
    { name: 'apple', price: 100 },
    { name: 'banana', price: 200 },
    { name: 'grape', price: 300 },
  ]
  
  // myFilter 를 구현하여 arr.filter 와 동일한 값이 나오도록 하기. // 배열 순서
  function myFilter(arr, callback){
    let resultArry = [];
    for (let i = 0; i < arr.length; i++) {
      if(callback(arr[i])){
        resultArry.push(arr[i]); 
      }
    }
    return resultArry;
  }
    // myFilter 구현

    const result1 =  myFilter(objArray,function (obj) {
      return obj.price >= 200;     
    });
    console.log(result1);
    // const filter1 = objArray.filter(function(item){
    //   return item.price >= 200;
    // })
    // console.log(filter1);
      
    
  


