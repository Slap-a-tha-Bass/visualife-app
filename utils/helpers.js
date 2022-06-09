// create an array of years from the yearExpectancy to the current year
export const months = Array(12)
  .fill(null)
  .map((month, index) => {
    return index + 1;
  });
export const days = Array(31)
  .fill(null)
  .map((day, index) => {
    return index + 1;
  });
// create an array of years from 60 to 100
export const ages = Array(61)
  .fill(null)
  .map((age, index) => {
    return index + 60;
  });
