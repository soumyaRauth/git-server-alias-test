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
  console.log("a, b");
  console.log(a, b);
  return a - b;
};
console.log(subtract(10, 5));

const multiply = (a, b) => {
  return a * b;
};
