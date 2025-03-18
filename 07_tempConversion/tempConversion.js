const convertToCelsius = function(temp) {
  let celcius=Math.round(((temp-32)*5/9)*10)/10;
  return celcius;
};

const convertToFahrenheit = function(temp) {
  let farhen=Math.round((temp*9/5+32)*10)/10;
  return farhen;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
