class movie {
    constructor (title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    getrating(){
        return this.rating;
    }
    getPG(){
        return this.rating === "PG" ? this.title : "Not PG";
    }
   
 }
 const movie1 =new movie(3, "red gaint movies", "PG")
 const movie2 =new movie("casio royale" , "Eon Productions", "PG13")
 const movie3 =new movie("The Godfather", "Eon Productions", "R")
 const movie4 =new movie("The ghost", "RR Productions", "PG")

 const arr = [movie1, movie2, movie3, movie4];
 for (let i = 0; i < arr.length; i++) {
    if (arr[i].getrating() === "PG") {
        console.log([arr[i].getPG()]);
    }
}
 

 
 