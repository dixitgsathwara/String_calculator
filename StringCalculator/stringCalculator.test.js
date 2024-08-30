const add= require('./stringCalculator.js');

test('return 0 if the string is empty',()=>{
    expect(add("")).toBe(0);
});
test('return single number if the length of the string is 1',()=>{
    expect(add("1")).toBe(1);
    expect(add("2")).toBe(2);
});
test('return sum of numbers separated by coma in the given string',()=>{
    expect(add("1,2,3,4,5")).toBe(15);
});
test('return sum of numbers separated by coma and semicolon in the given string',()=>{
    expect(add("1\n,2")).toBe(3);
});