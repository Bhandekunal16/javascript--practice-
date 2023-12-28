const Timestamp = require("./time");
const Color = require("./color");

const time = new Timestamp();
const color = new Color();

class Logger {
  constructor() {
    this.time = time.main();
  }

  new() {
    const services = ["AccountService", "OtpCreater", "Uuid", "SortService"];
    services.forEach((service) => {
      console.log(
        `[Node] ${this.time} ${color.yellow} [Service] ${color.green} ${service}`
      );
    });
  }

  log(body) {
    console.log(color.green + `[Node] ${body}`);
  }

  error(body) {
    console.log(color.red + `[Node] ${body}`);
  }
}

module.exports = Logger;
