const AccountService = require("./account");
const PersonService = require("./person");

const account = new AccountService(generateUUID());
account.createAccount();

const service = [PersonService, AccountService];
module.exports = { service };
console.log(module.exports);
