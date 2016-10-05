_Game = $Canvas.Game = {
	setup : function(framerate){
		this.framerate = framerate;
		window.addEventListener(
			_Conversor.toS(framerate, 'Hz', true),
			this.update
		);
	},
	update : function(){
		for(var x in this.elements)
			elements[x].update ? elements[x].update() : elements[x].draw();
	},
	element : function(width, height, color, x, y, type, mode, ){
		this.mode = mode.toLowerCase() == 'fill';
		this.width = +width || 100;
		this.height = +height || 100;
		this.color = color || $Css.random() || 'green';
		this.x = x == undefined ? 0 : +x;
		this.y = y == undefined ? 0 : +y;
		this.type = type;
		/*switch(type.toLowerCase()){
			case 'bg':
			case 'background':
			case 'img':
			case 'src':
				
				break;
			case 'rect':
			case 'rectangle':
				this.update = function(){
					this.parent.parent.context.stroke()
				}; break;
			default:
				
		}*/
		this.update = (function(){
			return type.toLowerCase() == 'draw' ? (this.mode ? function(){
				var ctx = this.parent.parent.context;
				ctx.fillStyle = this.color;
				ctx.fillRect(this.x, this.y, this.width, this.height);
			} : function(){
			}) : 0;
		})();
		if(type.toLowerCase() == 'object'){
			if(mode.toLowerCase() == 'fill'){
			}
		}
	}
};
$Canvas = $Canvas.init('Game');
