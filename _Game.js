_Game = $Canvas.Game = {
	setup : function(framerate){
		this.framerate = framerate;
		window.addEventListener(
			_Conversor.toS(framerate, 'Hz', true),
			this.update
		);
		this.interval = setInterval(framerate, this.update);
	},
	update : function(){
		for(let x in this.elements;)
			elements[x].update ? elements[x].update() : elements[x].draw();
	},
	element : function(type, width, height, ){
		switch(type.toLowerCase()){
			case 'bg':
			case 'background':
			case 'img':
			case 'src':
				
				break;
			default:
				
		}
	}
};
