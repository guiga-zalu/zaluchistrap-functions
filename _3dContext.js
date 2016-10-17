$Canvas = $Canvas.init('3dContext') || {};
var _3dContext = $Canvas['3dContext'] = {
	setup : function(base){
		this.base = base || 1;
	},
	draw : function(element){
		var canvas = this.parent;
		var ctx = canvas.context;
		var index = element.index;
		ctx.scale(index, index);
		canvas.draw(element);
		index = 1 / index;
		ctx.scale(index, index);
	}
};
