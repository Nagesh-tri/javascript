//create creature

class Creature{
    constructor(name){
        this.name=name;
    }
    eat(){
        console.log(`${this.name} is Eating..`);
    }
}

//HUmans who inheritance everything from creature.
class Humans extends Creature{
    constructor(name){
        super(name);
    }
    sleep(){
        console.log(`${this.name} is Sleeping...`);
    }
}

//Employes:
class Employes extends Humans{
    constructor(name,salery){
        super(name,salery);
    }
    chngSalery(nSalery){
        this.salery=nSalery
        console.log(`New Updated salery of ${this.name} is ${this.salery}.`);
    }
    displaySalery(){
        console.log(`salery of ${this.name} is ${this.salery}`);
    }
}

//Engineers:

class Engineers extends Employes{
    constructor(name,salery){
        super(name,salery)
    }
    code(){
        console.log(`${this.name} is coding`);
    }
    fixbugs(){
        console.log(`${this.name} fixs bugs...`); 
    }
    sleep(){
    console.log(`${this.name} naver sleeps...!`);
    }
}

let N1 = new Engineers('Nagesh',50000);

N1.chngSalery(45000);
N1.displaySalery();