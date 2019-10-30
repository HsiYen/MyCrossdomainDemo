// import { create } from "domain";

class Student {
  fullname: string;
  constructor(public firstname, public middleInitial, public lastname) {
    this.fullname = firstname + " " + middleInitial + " " + lastname;
  }
}
interface Person {//接口
  firstname: string;
  lastname: string;
}
function greeter(person: Person) {
  return "Hello," + person.firstname + person.lastname;
}
// let user={firstname:"Jinxx",lastname:"xiyan"};
let user = new Student("JIN", "NMM", "JGHG");
let kkname: string = `JIM`;

let list: Array<number> = [0, 2, 3];
//枚举类型
enum Color { Red, Green, Blue }
let c: Color = Color.Green;
document.getElementById('div').innerHTML = greeter(user);

//never类
function error(message: string): never {
  throw new Error(message);
}

// declare function create(o: object | null): void;

// create({ prop: 0 });
// create(null);

//类型断言
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
console.log(strLength);

//接口参数
interface LabelValue {
  label: string;
}

//接口函数
function Label(LabelObj: LabelValue) {
  // console.log(LabelObj.label);
  return LabelObj.label;
}

let myObj = { size: 20, label: "this is a job" };
Label(myObj);

//可选择的接口
interface SquareConfig {
  color?: string;
  width?: number;
  // readonly height: number;//只读属性
}

function createSquare(config: SquareConfig): { color: string, area: number } {
  let newSquare = { color: "red", area: 10 };
  if (config.color) {//判断接口该参数是否存在
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }

  return newSquare;
}
let mySquare = createSquare({ colour: "green", width: 87 } as SquareConfig);
console.log(mySquare);

//断言只读属性
let newA: number[] = [1, 5, 45, 4];
let B: ReadonlyArray<number> = newA;
// newA = B as number[];
// B[0] = 12 as number;
console.log(B);


//创建一个类
class Woman {
  Money: number;
  constructor(UserMoney: number = 300) {//构造函数
    this.Money = UserMoney;//给Money赋值
  }
  Shopping() {
    console.log(`已经花了${this.Money}钱`);
  }
  stopToShop(RestOfMoney: number) {
    console.log(`就剩下${RestOfMoney}钱了`);
  }
}

class XiaoMing extends Woman {
  hadShopping() {
    console.log(`小明已经买了个包花了200`);
  }
}

let Female = new XiaoMing();
Female.hadShopping();
Female.Shopping();
Female.stopToShop(10);
