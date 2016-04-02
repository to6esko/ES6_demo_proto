import "babel-polyfill";
//Numbers

//Number.isInteger()

console.log(Number.isInteger(25)); //true
console.log(Number.isInteger(25.0)); //true
console.log(Number.isInteger(25.1)); //false


console.log('.'.repeat(20));

//Number.isSafeInteger()
//Number.MAX_SAFE_INTEGER
//Number.MIN_SAFE_INTEGER

console.log(Math.pow(2,53));   // 9007199254740992
console.log(Math.pow(2,53)+1); // 9007199254740992

console.log('.'.repeat(20));

var inside =Number.MAX_SAFE_INTEGER,
outside=inside+1;

console.log(Number.isInteger(inside)); //true
console.log(Number.isSafeInteger(inside)); //true
console.log(Number.isInteger(outside)); //true
console.log(Number.isSafeInteger(outside)); //false



console.log('.'.repeat(20));

//Unicode
//ES5
var \u0061 = 'abc';
console.log(\u0061); //'abc'

//ES6
var \u{61}='abc';
console.log(\u{61}); //abc

console.log('.'.repeat(20));


//__proto__

let person = {
	getGreeting(){
		return 'Hello';
	}
};
let dog={
	getGreeting(){
		return 'Woof';
	}
};
let friend={
	__proto__:person;
};

console.log(friend.getGreeting()); //Hello
console.log(Object.getPrototype(friend===person)); //true
console.log(friend.__proto__===person); //true

friend.__proto__=dog;
console.log(friend.getGreeting()); //Woof
console.log(friend.__proto__===dob); //true
console.log(Object.getPrototype(friend)===dog); //true