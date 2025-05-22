const accountId = 144553
var accountEmail = " shivam@gmail.com"
let accountPassword = "12345"
accountCity = "Jaipur"
let accountState 
console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

// accountId = 2 //not allowed

accountEmail = " shivam1@gmail.com"
accountPassword = " 11111"
accountCity = "Mehsana"

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/*
prefer not to use var
bcoz of issue in block scope and functuonl scope 
*/
