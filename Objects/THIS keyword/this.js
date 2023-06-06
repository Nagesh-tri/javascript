//factory function:
//predifined obj bind with any fxn named prototype is used next: adding some methods to it
CreateArray.prototype.InsertItem=function (item) {
    this.arr.push(item);
}
//...here the real factory fxn is
function CreateArray() {
    this.arr=[];

}
//method added to all objs created using this constructor fxn would have all methods that have in prototype objs as its chain
CreateArray.prototype.ClearItems=function () {
    this.arr=[];
}

//creating new obj using constructor(new keyword) function
let arr= new CreateArray();