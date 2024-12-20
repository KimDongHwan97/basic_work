// 1. 보물 상자를 여는 Promise 함수를 만들어보세요.
// 2. 함수는 다음 조건을 만족해야 합니다:
//     1. 함수 이름은 findTreasure로 합니다.
//     2. 3초 동안 보물을 찾는 작업을 시뮬레이션합니다.
//     3. **10% 확률**로 성공하고, 90% 확률로 실패합니다.
//     4. 성공(resolve) 시 “축하합니다! 황금 보물을 발견했습니다!” 메시지를 반환.
//     5. 실패(reject) 시 “보물을 찾는 데 실패했습니다. 다시 시도하세요.” 메시지를 반환.
// 3. findTreasure를 호출한 뒤 .then()과 .catch()를 사용하여 성공과 실패 메시지를 출력하세요.

function findTreasure(){
    return new Promise((resolve, reject) => {
        console.log("보물을 찾는 중입니다....")
        setTimeout(() => {
            const randomNum = Math.random()
            if(randomNum < 0.1){
                resolve("축하합니다! 황금 보물을 발견했습니다!")
            }else{
                reject("보물을 찾는 데 실패했습니다. 다시 시도하세요.")
            }
        }, 3000);
    });
};



findTreasure()
 .then((successMessage) => {
    console.log(successMessage)
 })
 .catch((errorMessage) => {
    console.log(errorMessage)
 });
