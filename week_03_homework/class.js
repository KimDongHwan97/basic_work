// 1. RPG 게임에서 사용할 **캐릭터 클래스를 설계**하세요.
// 2. 캐릭터 클래스는 아래 조건을 만족해야 합니다:
//     1. 캐릭터의 **이름**, **레벨**, **체력**, **공격력** 속성을 가질 것.
//     2. attack 메서드를 구현하여, 호출 시 “<캐릭터 이름>가 공격을 시도합니다!“를 출력할 것.
//     3. heal 메서드를 구현하여, 호출 시 체력이 회복되고 “XXX의 체력이 Y만큼 회복되었습니다.“를 출력할 것.
//           hp= 10~20 랜덤값
//     4. levelUp 메서드를 구현하여 레벨업을 하면 렌덤으로 체력, 공격력을 추가해줄 것.
// 3. 설계한 클래스를 사용하여 **3명의 캐릭터 객체**를 만드세요.
// 4. 각 캐릭터 객체에서 attack과 heal 메서드를 실행해 보세요.


class Character {
  constructor(name, level, hp, att) {
    this.name = name;
    this.level = level;
    this.hp = hp;
    this.att = att;
  }

  attack() {
    console.log(`${this.name}가 공격을 시도합니다!`);
  }
  heal(amount){
      this.hp += amount;
      console.log(`${this.name}의 체력이 ${amount}만큼 회복되었습니다.`)
      // const randomNum = Math.random();
      // const randomHp = this.hp * (randomNum * )
  }
  levelUp(){
    const randomNum = Math.floor(Math.random()*(11)+10);
    this.hp += randomNum;
    const randomNum2 = Math.floor(Math.random()*(11)+10);
    this.att += randomNum2;
    console.log(`${this.hp}의 체력이 ${randomNum}만큼 증가되었습니다.`)
    console.log(`${this.att}의 공격력이 ${randomNum2}만큼 증가되었습니다.`)
  }

}
const myCharacter = new Character("전사", 1, 100, 5);
const myCharacter2 = new Character("마법사", 1, 100, 10);
const myCharacter3 = new Character("도적", 1, 100, 15);
console.log("내 캐릭터는", myCharacter);
console.log("내 캐릭터는", myCharacter2);
console.log("내 캐릭터는", myCharacter3);
myCharacter.attack();
myCharacter.heal(20);
myCharacter.levelUp();
myCharacter2.attack();
myCharacter2.heal(20);
myCharacter2.levelUp();
myCharacter3.attack();
myCharacter3.heal(20);
myCharacter3.levelUp();


