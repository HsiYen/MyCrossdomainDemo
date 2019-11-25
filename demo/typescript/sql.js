var oMYSQL = /** @class */ (function () {
    function oMYSQL() {
        //这里连接数据库
    }
    oMYSQL.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    oMYSQL.prototype["delete"] = function (id) {
        throw new Error("Method not implemented.");
    };
    oMYSQL.prototype.updata = function (info, id) {
        throw new Error("Method not implemented.");
    };
    oMYSQL.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return oMYSQL;
}());
var USRE = /** @class */ (function () {
    function USRE() {
    }
    return USRE;
}());
var u = new USRE();
u.usrename = "张三和李四";
u.password = "123456";
var obMysql = new oMYSQL();
obMysql.add(u);
