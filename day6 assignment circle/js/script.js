class circle {
    constructor(radius , color){
        this.radius = radius;
        this.color = color;
    }
 
   getRadius(){
     this.radius;
     return this.radius * 2.2;
   } 
   getarea(){
       return this.radius  * 3.14;
   }
   gettostring(){
       return `circle1 radius:${this.radius} color: ${this.color}`;
   }
   getcolor(){
       return this.color;
   }
   setcolor(color){
       this.color = color;
   }
   setRadius(radius){
       this.radius = radius;
   }

}

const circle1 = new circle(1.0, 'red');
console.log(circle1);
