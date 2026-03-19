//Prototypes: Create a constructor function and add a method to its .prototype.

function User(username, email) {
	  this.username = username;
	  this.email = email;
}

User.prototype.getUsername = function() {
	  return this.username;
};

//this wont work
// User.getUsername = function() {
// 	  return this.username;
// };

const user1 = new User('john_doe', 'john@example.com');
console.log(user1.getUsername());

