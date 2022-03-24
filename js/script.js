console.log('------------- # 4');
function sum(a, b) {
	return a + b;
}
console.log(sum(1, 3));
function sub(a, b) {
	return a - b;
}
console.log(sub(1, 3));
function mult(a, b) {
	return a * b;
}
console.log(mult(1, 3));
function div(a, b) {
	return a / b;
}
console.log(div(1, 3));
console.log('------------- # 5');
function growth(n){
	let answ = '';
	for(let i = 1; i <= n; i++){
		answ += i + ' ';
	}
	return answ;
}
console.log(growth(5));
console.log('------------- # 6');
function decr(n){
	let answ = '';
	for(let i = n; i >= 1; i--){
		answ += i + ' ';
	}
	return answ;
}
console.log(decr(5));
console.log('------------- # 7');
function expon(x, n){
	let result = Math.pow(x, n);
	return result;
}
console.log(expon(2, 3));
console.log('------------- # 8');
function isBigger(a, b){
	return a > b;
}
console.log(isBigger(5, -1));
console.log('------------- # 9');
function isSmaller(a, b){
	return a < b;
}
console.log(isSmaller(5, -1));