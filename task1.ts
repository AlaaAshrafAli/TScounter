class Vehicles {
  color : string;
  type : string;
  constructor (color : string, type : string){
      this.color = color;
      this.type = type;
  }
}
class theCar extends Vehicle {
  price : number;
  constructor(color : string, type : string, price : number){
      super(color,type)
      this.price = price;
  }
  display () : string {
  return `The car is ${this.type} ${this.color} with price of ${this.price}` 
  }
}

var bMW = new Car('black','bMW',22000000);
var Kia = new Car('red','Kia',3300000);
alert(bMW.display())
alert(Kia.display())