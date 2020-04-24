class Raindrop{
    constructor(x,y,w,h){
        this.x = random(0,800);
        this.y = 200;
        this.w = 5;
        this.h = 15;
    }
    display(){
      fill("brown");
      rect(this.x,this.y,this.w,this.h);
    }
  };