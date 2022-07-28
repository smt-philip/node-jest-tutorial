import sum, { callMyFunction } from './src/functions';

console.log(sum(3, 7));

callMyFunction(() => {
    console.log('hello world');
});