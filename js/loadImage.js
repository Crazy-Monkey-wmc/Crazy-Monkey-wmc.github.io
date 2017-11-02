/**
 * function{loadImage} 加载图片资源
 * param{imgUrl：Object}按照key，val形式存储要加载的图片资源
 * param{fn：Function}加载完毕后，吧这个资源传给回掉函数
 */
function loadImage(imgUrl,fn){
	var imgObj = {};//保存图片资源

	var tempImg,loaded = 0,imglengt = 0;
	for(var key in imgUrl){
		imglengt++;
		tempImg = new Image();
		tempImg.onload = function(){
			loaded++;
			if(loaded>=imglengt){
				fn(imgObj);
			}
		};
		tempImg.src = imgUrl[key];
		imgObj[key] = tempImg;
	}
}