function convertNumber(aNumber) {
  var stringNumber = aNumber.toFixed(2).replace(/./g, function(c, i, a) {
   return i && c !== "." && ((a.length - i) % 3 === 0) ? ',' + c : c;
});
   return ('$'+ stringNumber);

}
module.exports = convertNumber;
