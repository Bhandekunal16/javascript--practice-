function main() {
  const number = new Date().getSeconds();
  const randomNumber = Math.floor(Math.random() * 100);
  const otp = `${number}${randomNumber}`;
  return otp.length < 4 ? otp + "0" : otp;
}

console.log(main());
