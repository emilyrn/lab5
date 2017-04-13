

function fToC(fahrenheit)
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
    console.log(fTemp + " degrees Fahrenheit is " + fToCel + " degrees Celsius.");
}

fToC(75);

function cToF(celsius)
{
  var cTemp = celsius;
  var cToFar = (cTemp *9) / 5 + 32;
    console.log(cTemp + " degrees Celsius is " + cToFar + " degrees Fahrenheit.")
}

cToF(11);
