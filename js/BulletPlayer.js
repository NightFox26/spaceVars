class BulletPlayer {
    xPos = 0;
    yPos = 0;
    width = 0;
    height = 0;
    move = 5;    
    elmHTML;

    constructor(xPos, yPos, w, h) {
      this.xPos = xPos;
      this.yPos = yPos;
      this.width = w;
      this.height = h;

      this.elmHTML = document.createElement("img");
      this.elmHTML.src = "image/playerBullet.png";
      this.elmHTML.className = "playerBullet";
      
      let spritesBox = document.getElementById("sprites");
      spritesBox.appendChild(this.elmHTML);

      playerBullets.push(this);

      this.updateGraphics();
    }
    
    goRight(){
        this.xPos += this.move;
        this.updateGraphics(); 
        if(this.xPos>900){
            this.destroyBullet();
        }       
    }

    destroyBullet(){
        const index = playerBullets.indexOf(this);
        if (index > -1) {
            playerBullets.splice(index, 1);
            this.elmHTML.remove();
        }
    }
    
    updateGraphics(){        
        this.elmHTML.style.left = this.xPos +"px";
        this.elmHTML.style.top = this.yPos +"px";
        this.elmHTML.style.width = this.width +"px";
        this.elmHTML.style.height = this.height +"px";
    }
    
}