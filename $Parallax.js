_Parallax = {
	init : function(){
		this.elements = docuemnt.querySelectorAll('parallax, .parallax, #parallax, [parallax]');
		var elements = this.elements;
		for(var i = 0; i < elements.length; i++){
			elements[i].style.setProperty('z-index',
				elements[i].getAttribute('layer')
			);
		}
		window.addEventListener('scroll', this.position, false);
	},
	position : function(){
		var ele = this.elements;
		for(var l, i = 0; i < ele.length; i++){
			l = +ele[i].getAttribute('r') || Math.floor(Math.random()*50);
			ele[i].style.top = -(pageYOffset / l) + 'px';
		}
	}
};
$Constructor.functions.push('_Parallax.init');
