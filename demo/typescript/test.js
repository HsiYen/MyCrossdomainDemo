// import { create } from "domain";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student(firstname, middleInitial, lastname) {
        this.firstname = firstname;
        this.middleInitial = middleInitial;
        this.lastname = lastname;
        this.fullname = firstname + " " + middleInitial + " " + lastname;
    }
    return Student;
}());
function greeter(person) {
    return "Hello," + person.firstname + person.lastname;
}
// let user={firstname:"Jinxx",lastname:"xiyan"};
var user = new Student("JIN", "NMM", "JGHG");
var kkname = "JIM";
var list = [0, 2, 3];
//枚举类型
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
document.getElementById('div').innerHTML = greeter(user);
//never类
function error(message) {
    throw new Error(message);
}
// declare function create(o: object | null): void;
// create({ prop: 0 });
// create(null);
//类型断言
var someValue = "this is a string";
var strLength = someValue.length;
console.log(strLength);
//接口函数
function Label(LabelObj) {
    // console.log(LabelObj.label);
    return LabelObj.label;
}
var myObj = { size: 20, label: "this is a job" };
Label(myObj);
function createSquare(config) {
    var newSquare = { color: "red", area: 10 };
    if (config.color) { //判断接口该参数是否存在
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ colour: "green", width: 87 });
console.log(mySquare);
//断言只读属性
var newA = [1, 5, 45, 4];
var B = newA;
// newA = B as number[];
// B[0] = 12 as number;
console.log(B);
//创建一个类
var Woman = /** @class */ (function () {
    function Woman(UserMoney) {
        if (UserMoney === void 0) { UserMoney = 300; }
        this.Money = UserMoney; //给Money赋值
    }
    Woman.prototype.Shopping = function () {
        console.log("\u5DF2\u7ECF\u82B1\u4E86" + this.Money + "\u94B1");
    };
    Woman.prototype.gotoShopping = function (RestOfMoney) {
        console.log("\u5C31\u5269\u4E0B" + RestOfMoney + "\u94B1\u4E86");
    };
    return Woman;
}());
var XiaoMing = /** @class */ (function (_super) {
    __extends(XiaoMing, _super);
    function XiaoMing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    XiaoMing.prototype.hadShopping = function () {
        console.log("\u5C0F\u660E\u5DF2\u7ECF\u4E70\u4E86\u4E2A\u5305\u82B1\u4E86200");
    };
    return XiaoMing;
}(Woman));
var Female = new XiaoMing();
Female.hadShopping();
Female.Shopping();
Female.gotoShopping(10);
