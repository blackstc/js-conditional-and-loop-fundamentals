var yourCode = {
  commafy: function(n) {
    var results = [];
    for (var i = 1; i <= n; i++) {
      results.push(i);
    }
    return results.join(",");
  },

  joinToString: function(array) {
    var newArr = array.join(" and ");
    return newArr + " oh my.";
  },

  printBracketedNumbers: function(num) {
    var results = "";
    for (var i = 0; i <= num; i++) {
      results += "[" + i + "]";
    }
    return results;
  },

  sumOfN: function(num) {
    var total = 0;
    for (var i = 1; i <= num; i++) {
      total += i;
    }
    return total;
  },

  moviesFor: function(actor) {
    switch (actor) {
      case "Robin Williams":
        return "Jumanji, Hook, Good Will Hunting";
      case "Sandra Bullock":
        return "Gravity, The Lake House, The Blind Side";
      case "Daniel Radcliffe":
        return "All of the Harry Potters";
      default:
        return "Please provide an actor or actress";
    }
  },

  joinWithForAndIndex: function(arr) {
    var result = "";
    for (var i = 0; i < arr.length; i++) {
      result += arr[i] + i;
    }
    return result;
  },

  joinWithForAndToken: function(arr, token) {
    var results = arr.join(token);
    return results;
  }
};

module.exports = yourCode;
