// 필요한 모듈을 불러옵니다.
import readlineSync from 'readline-sync';

// 프로그램 시작
function main() {
  // 사용자로부터 입력을 받습니다.

  const choice = readlineSync.question("원하는 번호를 입력하세요: ");
       console.log("선택하세요:");
       console.log("1.사칙연산 계산기");
       console.log("2.구구단 출력기 (2~9단)\n");

  switch (choice) {
      case '1':
          readlineSync.question('사칙연산 계산기를 선택하셨습니다');
          calculator();
          break;
      case '2':
          readlineSync.question("구구단 출력기를 선택하셨습니다.");
          printMultiplicationTable();
          break;
      default:
          readlineSync.question("올바른 선택을 하세요.");
          return main();
  }





  // 입력에 따라 해당 기능을 실행합니다.
}

// 사칙연산 계산기 함수
function calculator() {
    
    const choice1 = readlineSync.question("원하는 번호를 입력하세요: ");
    console.log("선택하세요:");
    console.log("1.덧셈");
    console.log("2.뺄셈");
    console.log("3.곱셈");
    console.log("4.나눗셈");

    switch (choice1) {
        case '1':
            readlineSync.question('덧셈');
            function solution(num1, num2) {
                return num1 + num2;           
            }
            let result = solution(num1, num2);
            console.log (result);
            break;
        case '2':
            readlineSync.question("뺄셈");
            function solution1(num1, num2) {
                return num1 - num2;           
            }
            let result1 = solution1(num1, num2);
            console.log (result1);
            break;
        case '3':
            readlineSync.question("곱셈");
            function solution2(num1, num2) {   
                return num1 * num2 ;              
            }
            let result2 = solution2 (num1, num2);
            console.log (result2);
            break;
        case '4':
            readlineSync.question("나눗셈");
            function solution3(num1, num2) {   
                return num1 / num2 ;              
            }
            let result3 = solution3(num1, num2);
            console.log (result3);
            break;
        default:
            console.log(chalk.red('올바른 선택을 하세요.'));
            calculator();
            
    }
        


  // 여기에 코드를 작성하세요.
}

// 구구단 출력 함수
function printMultiplicationTable() {
    // 여기에 코드를 작성하세요.
    for (let i = 2; i <= 9; i++) {
        for (let k = 1; k <= 9; k++) {
            console.log(`${i} x ${k} = ${i * k}`)
        }
    }
}

// 프로그램 실행
main();
