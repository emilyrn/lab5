function convertTemp(number,string) {
if(string===" fahrenheit") {
  var convert = (number *9) / 5 + 32;
  console.log(number + " celsius is " + convert + string);
}
else {
  var convert2 = (number - 32) * 5 / 9;
  console.log(number + " fahrenheit is " + convert2 + string);
}
}

convertTemp(212, " celsius");
convertTemp(32, " celsius");
convertTemp(65, " celsius");
convertTemp(0 , " fahrenheit");
