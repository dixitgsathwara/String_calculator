const add= require('../src/stringCalculator.js');

describe("String Calculator",()=>{

    // An empty string should return 0
    test('return 0 if the string is empty',()=>{
        expect(add("")).toBe(0);
    });

    //  A single number should return the number itself
    test('return single number if the length of the string is 1',()=>{
        expect(add("1")).toBe(1);
        expect(add("2")).toBe(2);
    });

    // Two numbers separated by a comma should return their sum
    test('return sum of numbers separated by coma in the given string',()=>{
        expect(add("1,2,3,4,5")).toBe(15);
    });

    // Handle newlines between numbers
    test('return sum of numbers separated by coma and newline in the given string',()=>{
        expect(add("1\n,2")).toBe(3);
    });

    //Support different delimiters
    test('return sum of numbers separated by default delimiters',()=>{
        expect(add("//;\n1;2;3")).toBe(6);
    });

    //return an error for negative numbers
    test('return error if the numbers in the string are negative',()=>{
        expect(add("-1,2,-3")).toBe("Negatives not allowed: -1,-3");
    });

    //Ignore numbers greater than 1000
    test('return only those numbers sum whose value is under 1000',()=>{
        expect(add("1000,21,1001")).toBe(21);
    });    
})