module.exports = function multiply(first, second) {
  var a = first, b = second;
  if(a.length < b.length) {
    var c = a;
    a = b;
    b = c;
  };

  a = a.split('');
  b = b.split('');

  var sumRepo = [];
  for(var i = b.length - 1; i >= 0; i--) {
    var arr = [];
    var balance;
    for(var j = a.length - 1; j >= 0; j--) {
      if(balance) {
        var c = (a[j] * b[i]) + balance;
        balance = 0;
      } else {
        var c = a[j] * b[i];
      };

      if(c > 9 && j) {
        arr.unshift( +((c + '')[1]) );
        balance = +((c + '')[0]);
      } else if(c > 9) {
        arr.unshift(+((c + '')[1]));
        arr.unshift(+((c + '')[0]));
      } else {
        arr.unshift(c);
      };
    }
    sumRepo.push(arr);
  }

  var amountSymbols = sumRepo[0].length;
  for(var i = 0; i < sumRepo.length - 1; i++) {
    var length = sumRepo[i].length - sumRepo[i + 1].length;
    if( length == 0 ) amountSymbols++;
    if( length == -1 ) amountSymbols += 2;
  }

  for(var i = 0; i < sumRepo.length - 1; i++) {
    var amountZeros = amountSymbols - sumRepo[i].length;
    for(var j = 0; j < amountZeros; j++) sumRepo[i].unshift(0);
  }

  var result = [];
  var balance;
  for(var i = amountSymbols - 1; i >= 0; i--) {
    var c = 0;
    for(var j = 0; j < sumRepo.length; j++) {
      if(sumRepo[j][i] == undefined) break;
      if(balance) {
        c += sumRepo[j][i] + balance;
        balance = 0;
      } else {
        c += sumRepo[j][i];
      };
    };
    if(c > 9 && i) {
      result.unshift( +((c + '')[1]) );
      balance = +((c + '')[0]);
    } else if(c > 9) {
      result.unshift(+((c + '')[1]));
      result.unshift(+((c + '')[0]));
    } else {
      result.unshift(c);
    };
  };
  return result.join('');
}
