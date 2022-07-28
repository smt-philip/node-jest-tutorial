/**
 * importing functions to test
 */
import sum, { callMyFunction } from '../src/functions.js';
/**
 * automatically in scope within every test file. 
 * The methods in the Jest object help create mocks and let you control Jest's overall behavior
 * https://jestjs.io/docs/jest-object
 */
import {jest} from '@jest/globals'

/**
 * test for sum(num1, num2);
 * @returns num1 + num2
 */
describe('sum function that adds up 2 numbers', () => {
    it('sums up 5 + 7', () => {
        expect(sum(3, 7)).toEqual(10);
    });
});

/**
 * test for callMyFunction(callback);
 * Will invoke method passed in as parameter
 */
describe('callMyFunction method', () => {
    it('call in the passed function', () => {
        const callback = jest.fn(console.log("hello world"));
        callMyFunction(callback);
        expect(callback).toHaveBeenCalledTimes(1);
    });
});