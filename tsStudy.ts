//基本数据类型
let sex: boolean = true
let myName: string = 'xu'
let age: number = 21

//undifinde,null为基本数据的子集
let u: undefined = undefined
let n: null = null
let F: number
F = u
F = null

//数组类型
//定义一个数组里面的元素只能存放number或者它的子集，长度不限
let numOfArr: number[] = [1,2] 
//定义一个数组，里面的长度和元素的类型是有限制的,
let Tuple: [number, string | number] = [1, '123']//长度只能是两个

//function主要定义参数的类型和个数，返回值的类型
function add(x:number, y:number, z?:number) : number{
  return typeof z === 'number' ? x+y+z : x+y
} //这一步add的类型是类型推导的 类似于 let a = 'str' 这是a已经是string类型了
//使用es6的默认参数设置可选值
function addEs6(x: number, y: number, z: number = 0): number{
  return x+y+z
}
//定义的每一个函数也是一个类型，如果想将函数赋给一个变量则需要赋值给一样的函数类型
const add2: (x: number, y: number, z: number) => number = add

//类 es6类
class Animal {
  name: string;
  static categoies: string[] = ['mammal', 'bird']
  constructor(name: string) {
    this.name = name
  }
  run() {
    return `${this.name} is running`
  } 
}
//继承
class Dog extends Animal {
  bark() {
     return `${this.name } is barking`
   }
}
//重写
class Cat extends Animal {
  constructor(name,) {
    super(name)
  }
  run() {
    return 'miao'+super.run()
  }
}

// typescript 修饰符
class Person {
  readonly family: string //只能访问不能修改
  public name: string     //public意思就是公开的实例可以通过 .进行访问
  age: number             //什么修饰符都不加默认就是 public
  private hobby: string   //private 只能在Person 内进行访问，子类和实例都不能访问
  protected hair: number  //保护类只能让子类和当前class内进行访问，实例不能访问
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}
 
//对象interface类 规范对象的形状
interface IPerson {     //interface是ts的关键字，定义接口
  readonly age: number;  //readonly创建出来的实例的age filed被初始化后只能读，不能修改
  name: string;           
  girlFriend?: boolean; //?代表这个字段可有可无
}
//interface 规范class的形状
interface ISwitch {
  switchRadio () : void //如果定义个函数类什么都不返回就是void
}
interface IBattery {
  checkBatteryStatus () :void
}
interface IBatteryAndISwitch extends ISwitch {
  checkBatteryStatus () :void
}
class Radio implements ISwitch{
  switchRadio() { }
  close() {}
}
class Car implements ISwitch,IBattery {
  switchRadio() { }
  checkBatteryStatus() {}
}
class Car2 implements IBatteryAndISwitch {
  switchRadio() { }
  checkBatteryStatus() {}
}

//enums 枚举 一个变量只能有几个值，这个类型就叫做枚举类型
enum Direction {
  Up,
  Down,
  Left,
  Right
}
console.log(Direction.Right, Direction[2])   //3 Left
//enum就像一个双向绑定的值
//如果UP赋值为一个num后续的枚举会一次递增
enum Direction2 {
  Up = 10,
  Down,
  Left,
  Right
}
console.log(Direction2.Left)  //12
//如果除此之外每个字段可以赋值为一个特定的值
enum Direction3 {
  Up = 'up',
  Down = 'down',
  Left = 'left',
  Right = 'right'
}
console.log(Direction3.Left)  //left


//Generics 泛型TODO:
//泛型发明的动机
function echo(arg: any): any {
  return arg
}
let result: string = echo(123)
console.log(result)
//echo这个函数需要保证返回值和参数的类型相同，但是不是确定的哪一种类型，
//但是result需要一个string类型，如果echo在执行的时候传入number，result就变成了一个number
//有与ts是静态编译，所以不会产生错误，js当中result 变量的值就是123，这就违背了我们的初衷
function echo2<T>(arg: T): T {
  return arg  //T就相当于一个占位符，传入的是什么类型的值，所有占位地方的值都要是对应的类型
}

//泛型约束
//首先看问题
function funWithLength<T>(arg: T) : T {
  // console.log(arg.length)  ：报错
  // 因为T只是个占位符，不确定是什么类型， 可能不会有length属性，所以在传入的时候
  // 需要约束T的形状
  return arg
}
interface IWithLength {
  length: number | string;
}

function funWithLength2<T extends IWithLength>(arg: T) :T {
  console.log(arg.length)
  return arg
}

funWithLength2([1, 2, 3]) //3

// class中的泛型
class Test<T> {
  private data = [];
  push(item: T) {
    return this.data.push(item)
  }
  pop(): T {
    return this.data.shift()
  }
}
const test = new Test<number>()
//当然class当中的泛型与data当中完全相同


//aliases  类型别名
type PlusType = number | string | undefined | null
const numType: PlusType = 123

//类型断言
function duanyan(input: number | string): void {
  let str = input as String
  if (str.length) {
    console.log(str)
  } else {
    const number = input as Number
    console.log(number.toString())
  }
}
//断言的简便写法
function duanyan2(input: number | string) {
  if ((<string>input).length) {
    console.log(<string>input)
  } else {
    return input.toString()
  }
}
