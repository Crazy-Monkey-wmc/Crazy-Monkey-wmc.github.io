/**
         * 绘制背景
         * construcotor{Sky}背景构造函数
         * param{ctx：Context} 绘制环境
         * param{img：Image}图片
         * param{speed：number} 背景速度
         * 
         */
(function(w){
    function Sky(ctx,img,speed){
            this.ctx = ctx;
            this.img = img;
            this.speed = speed || 2;

            this.width = this.img.width;
            this.height = this.img.height;

            Sky.len++;
            this.x = this.width*(Sky.len-1);
            this.y = 0;


        }
        Sky.len = 0;
        Sky.prototype = {
            constructor:Sky,
            draw:function(){
                this.ctx.drawImage(this.img,this.x,this.y);
            },
            update:function(){
                this.x -=this.speed;
                if(this.x <= -this.width){
                    this.x += this.width*Sky.len;
                }
            }
        }
        w.getSky = function(ctx,img,speed){
            return new Sky(ctx,img,speed);
        }

}(window))
        