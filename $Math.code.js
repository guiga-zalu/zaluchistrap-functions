$Math = $Math == undefined ? $Math : {};
$Math.code = {
	MIN : 97,
	toString : function toString(num, base){
		num = Math.floor(num);
		var ret = [],
			j;
		do{
			j = num % base;
			ret.push( String.fromCharCode( j + $Math.code.MIN ) );
			num = (num - j) / base;
		}while(num >= 1);
		ret.push( String.fromCharCode(base + $Math.code.MIN) );
		return ret.reverse().join('');
	},
	toInt : function toInt(str){
		var base = str.charCodeAt(0) - $Math.code.MIN,
			ret = 0,
			k = str.length - 1;
		for(var i = 0; i < k; i++){
			ret += Math.pow(base, i) * (str.charCodeAt(k - i) - $Math.code.MIN);
		}
		return ret;
	}
}
