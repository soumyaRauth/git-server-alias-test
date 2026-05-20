const add = (a, b, ...rest) => {
  return (
    a +
    b +
    rest.reduce((acc, current) => {
      return acc + current;
    }, 0)
  );
};

const subtract = (a, b) => {
  return a - b;
};
