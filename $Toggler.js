$Toggler = {
	get : function(ele, prop, _prop){
		var a = ele.style.getProperty(prop);
		var b = a.split(',');
		if(_prop){
			for(var x in b)
				b[x].indexOf(_prop) > -1 ? break : continue;
			return b[x];
		}else{
			return b;
		}
	},
	set : function(ele, prop, _prop, _valor){
		var valor = _valor;
		if(!_valor) valor = _prop;
		var a = this.get(ele, prop);
		var b = this.get(ele, prop, (_valor ? _prop : 0));
		var ret = '';
		if(_prop){
			let x = a.join();
			let y = x.indexOf(_prop);
			ret = 
		}else{
			let x = (a.join()).indexOf(_prop);
			ret = a.replace(a.slice(x, a.indexOf(',', x)), valor);
		}
		ele.style.setProperty(prop, ret);
	},
	remove : function(ele, prop, _prop, valor){
		
	},
	toggle : function(ele, prop){
		
	}
};
