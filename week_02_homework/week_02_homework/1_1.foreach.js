const objArray = [
    { name: 'apple', price: 100 },
    { name: 'banana', price: 200 },
    { name: 'grape', price: 300 },
  ]
  
  objArray.forEach(function (obj) {
    console.log(obj.name);
  });
 
 

  //   const name1 = objArray.forEach('name');
//   console.log(name1);
 
  // forEach를 이용하여 objArray의 name을 모두 출력
  // apple
  // banana
  // grape