import suma from '../src/js/suma';

test('sumar 1 + 2 es igual a 3', () => {
  expect(suma(1, 2)).toBe(3);
});

test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});
