interface DBI<T> {
  add(info: T): boolean;
  delete(id: number): boolean;
  updata(info: T, id: number): boolean;
  get(id: number): any[];
}

class oMYSQL<T> implements DBI<T>{
  constructor(){
    //这里连接数据库
  }
  add(info: T): boolean {
    console.log(info);
    return true;
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  updata(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): any[] {
    throw new Error("Method not implemented.");
  }

}

class USRE {
  usrename: string | undefined;
  password: string | undefined;
}

let u = new USRE();
u.usrename = "张三和李四";
u.password = "123456";

let obMysql = new oMYSQL<USRE>();
obMysql.add(u);