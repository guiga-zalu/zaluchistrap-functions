$Canvas.init('Math');
$Math = $Canvas.Math = {
	setup : function(x0, y0, x1, y1){
		this.mWidth = this.parent.element.width;
		this.mHeight = this.parent.element.height;
		x1 = x1 == undefined ? x0 : x1;
		y1 = y1 == undefined ? y0 : y1;
		this.mX = Math.abs(+x0) + Math.abs(+x1);
		this.mY = Math.abs(+y0) + Math.abs(+y1);
	},
	functions : [],
	advFunctions : [],
	addFunction : function(){
		/*
		arguments:
			Number[...]
			Array(Function[...])[, Array(Number[...])]
		*/
		var args = arguments;
		if(isNaN(args[0])){
			if($Usefull.test(args[0], 'array') && $Usefull.test(args[0][0], 'function')){
				this.advFunctions.push(args);
			}
		}else{
			this.functions.push(args);
		}
	},
	toWidth : function(x){
		return Math.round(this.mWidth * (x / this.mX + 1)) / 2);
	},
	toHeight : function(y){
		return Math.round(this.mHeight * (y / this.mY + 1) / 2);
	},
	func : function(index){
		var a = this.functions[index];
		return {
			g : a,
			y : function(x){
				var ret;
				for(var j = this.g.length, i = 0; i < j; i++){
					ret += Math.pow(x, (j - i - 1)) * this.g[i];
				}
				//[0, 1, 2][^2, ^1, ^0][3 - 0 - 1, 3 - 1 - 1, 3 - 2 - 1][2 - 0, 2 - 1, 2 - 2][2, 1, 0]
				return ret;
			}
		}
	},
	draw : function(index, color){
		var f = this.func(index);
		this.parent.context.strokeStyle = color || $Css.random() || 'green';
		this.parent.context.beginPath();
		var x = -this.mX;
		this.parent.context.moveTo(
			this.toWidth(x),
			this.toHeight( f.y(x) )
		);
		for(; x <= this.mX; x++){
			this.parent.context.lineTo( this.toWidth(x), this.toHeight( f.y(x) ) );
		}
		this.parent.context.stroke();
	},
	advDraw : function(index, color) {
		var y = this.Functions(index);
		this.parent.context.strokeStyle = color || $Css.random() || 'green';
		this.parent.context.beginPath();
		var x = -this.mX;
		this.parent.context.moveTo(
			this.toWidth(x),
			this.toHeight( f.y(x) )
		);
		for(; x <= this.mX ; x++){
			this.parent.context.lineTo( this.toWidth(x), this.toHeight( f.y(x) ));
		}
		this.parent.context.stroke();
	},
	init : function() {
		//By : Mik, http://stackoverflow.com/questions/2980763/javascript-objects-get-parent#answer-10170826
		for(var x in arguments) this[arguments[x]].parent = this;
		return this;
	}
}
//Call: $Canvas.Math.setup(Number x0, Number y0[, Number x1, Number y1])
//Bef : $Canvas.Math.addFunction(Number arguments)
//Use : $Canvas.Math.draw(Number index[, String color])
//Bef : $Canvas.Math.addFunction(Array(Function arguments)[, Array(Number arguments)])
//Base-Code:"http://blog.renatolouro.com.br/the-smallest-3d-maker/como-desenhar-funcoes-com-html5-js-e-canvas/"
