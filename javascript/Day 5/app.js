const multiply = (a, b) => a * b;

const square = (a) => multiply(a, a);

const isRightTriangle = (a, b, c) => {
  return square(a) + square(b) === square(c);
};