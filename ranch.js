console.log("Stallion Barn!");
function Stallions(name,color,sire,damSire,fee){
    this.name=name;
    this.color=color;
    this.sire=sire;
    this.damSire=damSire;
    this.fee=fee;
}
Stallions.prototype = {
  info : function() {
	  console.log("--------------------------------------------");
      console.log(this.name + ": a  " + this.color + " horse by " + this.sire + " out of a mare by " + this.damSire + ". His fee is " + this.fee + "<br />");
      }
}
var stallions=[];
stallions[0]= new Stallions("Fire Cat","black","Savage Kitten","Savage Kitten"," $100,000 ");
stallions[1] = new Stallions( "Storm Warning", "bay","Storm Cat","Savage Kitten","$100,000");
stallions[2]= new Stallions("Royal Flush","chestnut","Affirmed","Seattle Slew", "$100,000");
stallions[3] = new Stallions(" Northern Ice "," grey "," Holy Bull "," Danzig ", " $25,000 ");

 
function stallionBarn(arr) {
  for(var i = 0; i < arr.length; i++) {
   arr[i].info();
  }    

}

stallionBarn(stallions);