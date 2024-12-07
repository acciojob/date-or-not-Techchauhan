var isDate = function (input) {
  // Check if the input is an instance of Date and valid
  if (input instanceof Date && !isNaN(input.getTime())) {
    return true;
  }
  
  // Try parsing the input as a date string
  const parsedDate = new Date(input);
  return !isNaN(parsedDate.getTime());
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
