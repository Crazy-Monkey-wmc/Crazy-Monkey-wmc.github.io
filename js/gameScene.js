(function(w){
	function gameScene(ctx,imgObj){
		this.ctx = ctx;
		this.imgObj = imgObj;

		this.listeners = []//听众队列

		this.roles = [];//用来存储游戏所需的角色

		this._initRoles();

            
	}
	gameScene.prototype = {
		constrcutor:gameScene,
		_initRoles:function(){
			//背景两个
            this.roles.push(getSky(this.ctx,this.imgObj.sky,3));
            this.roles.push(getSky(this.ctx,this.imgObj.sky,3));

           
            //管道六个
            for(var i =0;i<6;i++){
                this.roles.push(getPipe(this.ctx,this.imgObj.pipeDown,this.imgObj.pipeUp,130,this.imgObj.land.height,3));
            }
             //大地四个
            for(var i = 0;i<4;i++){
                this.roles.push(getLand(this.ctx,this.imgObj.land,3));
            }

            //创建鸟
            this.roles.push(getBrid(this.ctx,this.imgObj.brid,3,1,10,10));
		},
		//添加听众
		addListener:function(listener){
			this.listeners.push(listener);
		},
		triggerBridOver:function(){
			this.listeners.forEach(function(lis){
				lis();
			});
		},
		draw:function(){
			var brid = getBrid();

            var bridX = brid.x + brid.width/2;
            var bridY = brid.y + brid.height/2;
            if(this.ctx.isPointInPath(bridX,bridY)||bridY<0||bridY>(this.ctx.canvas.height-this.imgObj.land.height))
            {

            	this.triggerBridOver();
                

            }else{
            	this.ctx.beginPath();//清除上一次绘制的6个管道路径
                this.roles.forEach(function(role){
                	role.draw();
                	role.update();
           		});
            }
			
		}

	}
	w.getGameScene = function(ctx,imgObj){
			return new gameScene(ctx,imgObj);
		}
}(window))