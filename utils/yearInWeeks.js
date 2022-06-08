export const yearInWeeks = ({ yearBorn, monthBorn, dayBorn }) => {
  const startDate = new Date(
    Number(yearBorn),
    Number(monthBorn),
    Number(dayBorn)
  );
  const endDate = new Date();
  const diffTime = Math.abs(endDate - startDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const diffWeeks = Math.ceil(diffDays / 7);
  return diffWeeks;
};
//   console.log(yearInWeeks({ yearBorn: 1990, monthBorn: 10, dayBorn: 16 }));
