//小鸟的构造函数
        /**
         * [Brid description]
         * @param {[type]} ctx        [绘制环境]
         * @param {[type]} img        [鸟图]
         * @param {[type]} widthFram  [一排的帧数]
         * @param {[type]} heightFram [一列的帧数]
         * @param {[type]} x          [鸟的起始x坐标]
         * @param {[type]} y          [鸟的起始y坐标]
         * @param {[type]} speed      [鸟下落的速度]
         */
(function(w){
    function Brid(ctx,img,widthFram,heightFram,x,y){

            this.ctx = ctx;
            this.img = img;
            this.widthFram = widthFram;
            this.heightFram = heightFram;
            this.x = x;
            this.y = y;
            this.speed = 2;

            //一个小鸟的宽和高
            this.width = this.img.width / this.widthFram;
            this.height = this.img.height / this.heightFram;

            //当前渲染的小鸟的帧数
            this.currentFram = 0;

            //加速度
            this.speedPlus = 0.05;

            this._bind();

        }
        Brid.prototype = {
            constructor:Brid,
            draw:function(){

                var baseRadian = Math.PI / 180*5;
                var maxRadian = Math.PI / 180*45;

                var rotateRadian = baseRadian * this.speed;
                rotateRadian = rotateRadian>=maxRadian? maxRadian:rotateRadian;
                this.ctx.save();
                this.ctx.translate(this.x+this.width/2,this.y+this.height/2);
                this.ctx.rotate(rotateRadian);


                this.ctx.drawImage(this.img,this.width*this.currentFram,0,this.width,this.height,-this.width/2,-this.height/2,this.width,this.height);

                this.ctx.restore();
            },
            update:function(){
                this.currentFram = ++this.currentFram >= this.widthFram? 0:this.currentFram;

                this.y += this.speed;

                this.speed += this.speedPlus;
            },
            _bind:function(){
                var self = this;
                this.ctx.canvas.onclick = function(){
                    self.speed = -1.5;
                }
            }

        }

        var brid = null;

        //工厂模式
        w.getBrid = function(ctx,img,widthFram,heightFram,x,y){
            if(!brid){
                brid = new Brid(ctx,img,widthFram,heightFram,x,y)
            }
            return brid;
        }

}(window));
