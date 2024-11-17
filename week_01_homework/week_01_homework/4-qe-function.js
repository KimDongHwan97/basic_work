// [함수 연습 문제]

// 문제 1: 두 숫자를 더하는 함수를 작성하고 결과를 출력하세요.
function numbers(num1 , num2){
    return num1 + num2;
}

// 문제 2: 이름을 매개변수로 받아서 "안녕하세요, [이름]님!"을 출력하는 함수를 작성하세요.
function aaa(name){
    console.log(`안녕하세요, ${name}님!`);
}
// 문제 3: 세 개의 숫자 중 가장 큰 수를 반환하는 함수를 작성하세요.
function aa2(a,b,c){
    if(a>b && a>c){
        return a;
    }else if(b>c){
        return b;
    }else{
        return c;
    }
}

// 문제 4: 숫자를 매개변수로 받아 짝수인지 홀수인지 반환하는 함수를 작성하세요.
function numbers1(num3){
    if(num3% 2 == 0){
        return "짝수"
    }else{
        return "홀수"
    }
}

// 문제 5: 배열을 매개변수로 받아 모든 요소를 출력하는 함수를 작성하세요.
function aa3(arr){
    for (let i = 0; i < arr.length; i++) {
        console.log(arr);
      }
}


const arr4 = 

function aa4(arr4){
for (const arr4 of colors) {
    console.log(arr4);
  }
}