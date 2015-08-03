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
  }
};

module.exports = yourCode;
