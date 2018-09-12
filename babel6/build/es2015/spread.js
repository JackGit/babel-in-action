'use strict';

const spread = () => {
  const a = ['a', 'b', 'c'];
  const b = [...a, 'foo'];
  console.log(a, b);
};