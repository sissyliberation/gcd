$(document).ready(function(){
	function gcd(a,b) {
		if(a==b) {
			$('#steps').append("<br>"+a+" is GCD.");
			return a;
		}
		else if (a==0) {
			$('#steps').append("<br>"+b+" is GCD.");
			return b;
		}
		else if (b==0) {
			$('#steps').append("<br>"+a +" is GCD.");
			return a;
		}	
		else if (a < b) {
			$('#steps').append("<br>"+ a+" divides "+b+" "+ ~~(b/a)+" times with remainder "+ ~~(b%a) +".");
			return gcd(a, b%a);
		}
		$('#steps').append("<br>"+ b+" divides "+a+" "+ ~~(a/b)+" times with remainder "+ ~~(a%b) +".");
		return gcd(a%b, b);
	}
	$('#calc_GCD').on("click",function(){
		$('#steps').text("");
		var a =$('[placeholder="a"]').val();
		var b =$('[placeholder="b"]').val();
		if(isNaN(a) || isNaN(b) || a=="" || b=="" || a<0 || b <0) {
			alert("Please only enter positive integers.");
		}
		else {
			gcd(a,b);
		}
	});
});