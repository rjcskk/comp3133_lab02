const calculator = require('../calculator.js');

function test(operation, a, b, expected) {
    const result = calculator[operation](a, b);
    if (result === expected) {
        console.log(`${operation}(${a}, ${b}) expected result ${expected} PASS`);
    } else {
        console.log(`${operation}(${a}, ${b}) expected result ${expected} FAIL`);
    }
}

// Test cases for add
test('add', 5, 2, 7);
test('add', 5, 2, 8);

// Test cases for sub
test('sub', 5, 2, 3);
test('sub', 5, 2, 5);

// Test cases for mul
test('mul', 5, 2, 10);
test('mul', 5, 2, 12);

// Test cases for div
test('div', 10, 2, 5);
test('div', 10, 2, 2);
