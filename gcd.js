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
			$('#steps').append("<br>"+ a+" divides "+b+" "+ Math.floor(b/a)+" times with remainder "+Math.floor(b%a) +".");
			return gcd(a, b%a);
		}
		$('#steps').append("<br>"+ b+" divides "+a+" "+ Math.floor(a/b)+" times with remainder "+Math.floor(a%b) +".");
		return gcd(a%b, b);
	}
	$('#calc_GCD').on("click",function(){
		$('#steps').text("");
		var a =$('[placeholder="a"]').val();
		var b =$('[placeholder="b"]').val();
		var tmp = gcd(a,b);
	});
});