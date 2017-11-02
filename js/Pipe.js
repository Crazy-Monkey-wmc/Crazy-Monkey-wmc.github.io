/**
         * [Pipe description]
         * @param {[type]} ctx        [绘制环境]
         * @param {[type]} imgDown    [上管道图片]
         * @param {[type]} imgUp      [下管道图片]
         * @param {[type]} space      [两个管道之间 的间隙]
         * @param {[type]} langHeight [大地的高度]
         * @param {[type]} speed      [速度]
         */
(function(w){
    function Pipe(ctx,imgDown,imgUp,space,langHeight,speed){
            this.ctx = ctx;
            this.imgDown = imgDown;
            this.imgUp = imgUp;
            this.space = space;
            this.langHeight = langHeight;
            this.speed = speed || 2;

            this.width = this.imgDown.width;
            this.height = this.imgDown.height;

            this.minHeight = 100; 

            Pipe.len++;
            this.x = 300 + this.width*3*(Pipe.len-1);
            this.y = 0;



            this._init();
        }
        Pipe.len = 0;
        Pipe.prototype = {
            constructor:Pipe,
            _init:function(){

                //管道的最大高度
                var maxHeight = this.ctx.canvas.height - this.langHeight - this.space - this.minHeight;

                //随机生成的管道高度，在minHeight-maxHeight之间
                var randomHeight = Math.random()*maxHeight;
                randomHeight = randomHeight<this.minHeight? this.minHeight:randomHeight;

                //求上管道坐标
                this.downY = randomHeight - this.height;

                //求下管道的坐标
                this.upY = randomHeight + this.space;
                
            },
            draw:function(){
                this.ctx.drawImage(this.imgDown,this.x,this.downY);
                this.ctx.drawImage(this.imgUp,this.x,this.upY);
                this.drawPath();
            },
            update:function(){
                this.x -= this.speed;
                if(this.x < -this.width){
                    this._init();
                    this.x += this.width*3*Pipe.len; 
                }
            },
            drawPath:function(){
                this.ctx.rect(this.x,this.downY,this.width,this.height);
                this.ctx.rect(this.x,this.upY,this.width,this.height);
                
            }

        }
        w.getPipe = function(ctx,imgDown,imgUp,space,langHeight,speed){
            return new Pipe(ctx,imgDown,imgUp,space,langHeight,speed);
        }

}(window))
        