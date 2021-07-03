class Ship {
    xPos = 0;
    yPos = 0;
    width = 0;
    height = 0;
    move = 10;

    constructor(xPos, yPos, w, h) {
      this.xPos = xPos;
      this.yPos = yPos;
      this.width = w;
      this.height = h;
      this.updateGraphics();
    }
    
    goUp(){
        if(this.yPos > 15){
            this.yPos -= this.move;
            this.updateGraphics();
        }
    }
    
    goDown(){
        if(this.yPos < 550 - 120 -15){
            this.yPos += this.move;
            this.updateGraphics();
        }
    }

    shootBullet(){
        let widthBullet = 30;
        let heightBullet = 15;
        let xPosBullet = this.xPos+this.width +5;
        let yPosBullet = this.yPos+(this.height/2) - (heightBullet/2);
        
        var bullet = new BulletPlayer(xPosBullet,yPosBullet, widthBullet,heightBullet);        
    }
    
    updateGraphics(){
        var elm = document.getElementById("player");
        elm.style.left = this.xPos +"px";
        elm.style.top = this.yPos +"px";
        elm.style.width = this.width +"px";
        elm.style.height = this.height +"px";
    }
    
}