(function(w){
	function overScene(ctx){
		this.ctx = ctx;
	}
	overScene.prototype = {
		constrcutor:overScene,
		draw:function(){
			this.ctx.save();

			this.ctx.fillStyle = 'rgba(100,100,100,0.5)';
            this.ctx.fillRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height);
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillStyle = 'red';
            this.ctx.font = '900 40px 微软雅黑';
            this.ctx.fillText('GOOD GAME!!!',ctx.canvas.width/2,ctx.canvas.height/2);

            this.ctx.restore();
		}
	}
	w.getOverScene = function(ctx){
		return new overScene(ctx);

	}
}(window))