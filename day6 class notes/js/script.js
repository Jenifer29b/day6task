class ulber{
    constructor(place , amount,distance){
        this.place = place;
        this.amount = amount;
        this.distance = distance;
    }
 getcalculate(){
    if(this.amount<100)
    return this.amount * this.distance;
   else{
    return this.amount * this.distance * 0.9;
   }
 }
}
  
 const person1 =new ulber ("Mumbai", "500", "20");
 const person2 =new ulber ("chennai", "200", "30");
 const person3 =new ulber ("pune", "300", "40");

 console.log(person1);
  