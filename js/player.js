	 
       var Sprite = function(fn) {
 
    this.image = null;
    this.load = function(ig) { this.image = new Image(); this.image.src = ig;  }
    this.frameIndex = 0;
    this.CurrentFrame = 0;
        this.load(fn);
        
      
    this.drawAnimated = function(x, y, ssIndex,context)
    { context.clearRect(0,0,canvas.width,canvas.height);
            this.frameIndex++;
            if (this.frameIndex >= 4)
                {
                this.frameIndex = 0;}
                
            this.CurrentFrame = ssIndex[this.frameIndex];
        
        context.drawImage(this.image, (this.CurrentFrame%12)*300, Math.floor(this.CurrentFrame/12)*300,300, 300, x, y, 50,50);
    };
 
};
       
       
   