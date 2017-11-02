//大地构造函数
        /**
         * construcotor{Land}背景构造函数
         * param{ctx：Context} 绘制环境
         * param{img：Image}图片
         * param{speed：number} 背景速度
         * 
         */
(function(w){
    function Land(ctx,img,speed){
            this.ctx = ctx;
            this.img = img;
            this.speed = speed || 2;

            this.width = this.img.width;
            this.height = this.img.height;

            Land.len++;
            this.x = this.width*(Land.len-1);
            this.y = this.ctx.canvas.height - this.img.height;

        }
        Land.len = 0;
        Land.prototype = {
            constructor:Land,
            draw:function(){
                this.ctx.drawImage(this.img,this.x,this.y);
            },
            update:function(){
                this.x -= this.speed;
                if(this.x <= -this.width){
                    this.x += this.width*Land.len;
                }
            }
        }
    
    w.getLand = function(ctx,img,speed){
        return new Land(ctx,img,speed);

    }

}(window));
        