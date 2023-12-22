class Timestamp {
    min = new Date().getMinutes()
  sec = new Date().getSeconds();
  mili = new Date().getMilliseconds();

  main() {
    const timestamp = `${this.min}${this.mili}${this.sec}`;
    return timestamp;
  }
}

module.exports = Timestamp;
