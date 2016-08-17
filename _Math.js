class _Math extends $Canvas {
	setup(x0, y0, x1, y1){
		that.mWidth = that.element.width;
		that.mHeight = that.element.height;
		x1 = x1 == undefined ? x0 : x1;
		y1 = y1 == undefined ? y0 : y1;
		that.mX = Math.abs(+x0) + Math.abs(+x1);
		that.mY = Math.abs(+y0) + Math.abs(+y1);
	},
	functions : [],
	addFunction : function(){
		that.functions.push(arguments);
	},
	to{
		rX : that.mWidth / that.mX,
		rY : that.mHeight / that.mY,
		width : (x) => Math.round((this.rX*x + that.mWidth) / 2),
		height : (y) => Math.round((this.rY*y + that.mHeight) / 2)
	},
	func(index){
		return {
			g : that.functions[index],
			x : function(x){
				var ret;
				for(var j = this.g.length, i = 0; i < j; i++){
					ret += Math.pow(x, (j - i - 1)) * this.g[i];
				}
				//[0, 1, 2][^2, ^1, ^0][3 - 0 - 1, 3 - 1 - 1, 3 - 2 - 1][2 - 0, 2 - 1, 2 - 2][2, 1, 0]
				return ret;
			}
		}
	},
	draw(index, color){
		var y = that.func(index);
	}
}
