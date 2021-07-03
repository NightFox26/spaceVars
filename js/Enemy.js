class Enemy {
    xPos = 0;
    yPos = 0;
    width = 0;
    height = 0;
    move = 20;
    elmHTML;

    constructor(xPos, yPos, w, h) {
      this.xPos = xPos;
      this.yPos = yPos;
      this.width = w;
      this.height = h;

      this.elmHTML = document.createElement("img");
      this.elmHTML.src = "image/enemy.png";
      this.elmHTML.className = "enemy";
      
      let spritesBox = document.getElementById("sprites");
      spritesBox.appendChild(this.elmHTML);
      this.updateGraphics();
    } 
    
    /*
    goUp(){

    }

    goDown(){

    }

    shoot(){

    }
    */
    
    updateGraphics(){
      this.elmHTML.style.right = this.xPos +"px";
      this.elmHTML.style.top = this.yPos +"px";
      this.elmHTML.style.width = this.width +"px";
      this.elmHTML.style.height = this.height +"px";
    }
    
}