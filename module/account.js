const PersonService = require("./person");
const person = new PersonService();

function randomAlphabet() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const randomIndex = Math.floor(Math.random() * alphabet.length);
  return alphabet[randomIndex];
}

let array = [];
generateUUID = () => {
  const input = new Date().getMilliseconds().toString();
  const randomNumber = Math.floor(Math.random() * 100);
  const randomIndex = randomAlphabet();
  const randomIndex2 = randomAlphabet();
  const randomIndex3 = randomAlphabet();
  const output = `${randomIndex}${randomIndex2}${randomIndex3}${input}${randomIndex}@${randomNumber}${randomIndex}`;
  output.length < 11 ? array.push(output + "0") : array.push(output);
  return output.length < 11 ? output + "0" : output;
};

class AccountService {
  constructor() {
    this.accountNumber = generateUUID();
    this.name = person.greet("John Doe", 22);
  }
  array = [];

  async createAccount() {
    await this.array.push({
      accountNo: this.accountNumber,
      name: this.name[0].name,
      age: this.name[0].age,
    });
    console.log(this.array);
    return this.array;
  }
}

module.exports = AccountService;
