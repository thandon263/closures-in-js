
var Person = class {
	constructor(firstname, lastname) {
		this.firstname = firstname
		this.lastname = lastname
	}
	
	greet() {
		return 'Hi! ' + this.firstname	
	}
}

var obj = new Person('Thando', 'Ncube')
console.log(obj)
console.log(obj.greet())

