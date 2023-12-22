class OtpCreater {
  constructor() {}

  main() {
    const number = new Date().getMilliseconds();
    const randomNumber = Math.floor(Math.random() * 10);
    const otp = `${number}${randomNumber}`;
    const finalOtp = otp.length < 4 ? otp + "0" : otp
    return finalOtp;
  }

  otpCreate() {
    try {
      const otp = this.main();
      return otp;
    } catch (error) {
      return error;
    }
  }
}

module.exports = OtpCreater;
