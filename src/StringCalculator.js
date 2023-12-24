export const StringCalculator = (inputString) => {
  // Regular expression to match numbers
  var regex = /-?\b\d+\b/g;

  // Extract numbers from the string
  var numbersArray = inputString.match(regex);

  // Find negatives
  const negativeNumbers = numbersArray?.filter((num) => num < 0);
  if (negativeNumbers?.length > 0) {
    throw new Error(`negatives not allowed :${negativeNumbers.toString()}`);
  }

  // Sum of matched  strings numbers
  const sum = numbersArray?.reduce((sum, item) => sum + Number(item), 0);
  return sum || 0;
};
