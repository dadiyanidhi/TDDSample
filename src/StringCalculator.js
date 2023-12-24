export const StringCalculator = (inputString) => {
  // Regular expression to match numbers
  var regex = /-?\b\d+\b/g;

  // Extract numbers from the string
  var numbersArray = inputString.match(regex);

  // Sum of matched  strings numbers
  const sum = numbersArray?.reduce((sum, item) => sum + Number(item), 0);
  return sum || 0;
};
