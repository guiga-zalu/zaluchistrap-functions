$Math = $Canvas.Math = {
	setup : function(x0, y0, x1, y1){
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
	to : {
		rX : that.mWidth / that.mX,
		rY : that.mHeight / that.mY,
		width : function(x){
			return Math.round((this.rX*x + that.mWidth) / 2);
		},
		height : function(y){
			return Math.round((this.rY*y + that.mHeight) / 2);
		}
	},
	func : function(index){
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
		that.context.strokeStyle = color || $Css.random();
		that.context.beginPath();
		that.context.moveTo(
			this.to.width(x),
			this.to.height( y(-this.mX) )
		);
		for(let x = -this.mX; x <= this.mX; x++){
			that.context.lineTo( this.to.width(x), this.to.height( y(x) ) );
		}
		that.context.stroke();
	}
}
//Call: $Canvas.Math.setup(x0, y0[, x1, y1])
//Bef : $Canvas.Math.addFunction(arguments)
//Use : $Canvas.Math.draw(index[, color])
//Base-Code:"http://blog.renatolouro.com.br/the-smallest-3d-maker/como-desenhar-funcoes-com-html5-js-e-canvas/"
