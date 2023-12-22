let array = ["1", "3", "4", "5", "8", "9", "10", "2", "6", "7"];

function main() {
  array.sort((a, b) => a - b);
  return array;
}

class SortService {
  async write(array) {
    return array.sort((a, b) => a - b);
  }
}

module.exports = SortService;
