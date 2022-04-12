 export class Quote {
     QUOTES:string;
     UPVOTES:number;
     DOWNVOTES:number;
     AUTHOR:string;
    //  POINTS:number
     constructor(QUOTES:string,UPVOTES:number,DOWNVOTES:number, AUTHOR:string){
         this.QUOTES=QUOTES;
         this.UPVOTES=UPVOTES;
         this.DOWNVOTES=DOWNVOTES;
         this.AUTHOR=AUTHOR;
        //  this.POINTS=POINTS;
     }
 }
