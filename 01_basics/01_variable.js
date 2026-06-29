const accountId = 123789
let accountEmail = "moeez@example.com"
var accountPassword = "00335"
accountCity = "Bahawalpur"
let accountState;

// Notes:
// const (we can't change const)
// let (we can change let value)
// var (don't use var because it create issue in block scope & functional scope)
// accountCity = "Bahawalpur" (we can create variable like this but this method is not recommended but keep in mind variable can be declare like this)
// let accountState; (if we don't define the value of variable it will be print but unidentified)

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

