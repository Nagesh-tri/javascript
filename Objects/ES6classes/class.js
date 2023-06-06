class iphone{
    constructor(gen,color){
        this.gen=gen
        this.color =color;
    }
    dial(){
        console.log('tring....tring....')
    }
}
let i1= new iphone(2,'black')
//new iphone 2
//for Inheritance:
class ihpone2 extends iphone{
    constructor(gen,color,BT){
        super(gen,color);//access to constuctor of super class
        this.BT=BT;
    }
    connectBT(){
        console.log('Conncted to bt Device....')
    }
}

let i2 =new ihpone2(4,'grey',5.0)

//iphonbe 3 having new property siri : bool true
//method: respondToHelloSiri(), log Siri how can I help you?

class iphone3 extends ihpone2{
    constructor(gen ,color,BT,siri){
        super(gen,color,BT,iphone3);
        this.siri= siri;
    }
    helloSiri(){
        if (siri) {
            console.log("Siri,...How can  i Hellp You");
        }
    }
}
let i3= new iphone3(3,'white','BT 5-0',true)
i3.connectBT()