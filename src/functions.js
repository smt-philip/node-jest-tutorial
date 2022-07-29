/*
 * File: /src/functions.js
 * Version: 0.0.1
 * Project: node-jest-tutorial
 * Description: Functions to test
 * File Created: Friday, 28th July 2022 11:30 am
 * Author: Philip Mann (philip.mann@siliconmtn.com)
 * -----
 * Last Modified: Friday, 29th July 2022 11:30 am
 * Modified By: Philip Mann (philip.mann@siliconmtn.com)
 * -----
 * Copyright 2022, Silicon Mountain Technologies, Inc.
 */

/**
 * a method for getting the sum of two numbers
 * @param num1 
 * @param num2 
 * @returns num1 + num2
 */
const sum = (num1, num2) => {
    return num1 + num2;
}

export default sum;

/**
 * a function that takes a function as an arguement == callback
 * @param callback() 
 */
export const callMyFunction = (callback) => {
    callback();
}