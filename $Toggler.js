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
		var ret = '';
		if(_prop != valor){
			let x = a.join();
			let y = x.indexOf(_prop);
			ret = x.replace(x.slice(y, x.indexOf(',', y) ), valor);
		}else{
			let y = a.join();
			let x = y.indexOf(valor);
			ret = y.replace(y.slice(x, y.indexOf(',', x)), valor);
		}
		ele.style.setProperty(prop, ret);
	},
	remove : function(ele, prop, _prop, valor){
		
	},
	toggle : function(ele, prop){
		
	}
};
