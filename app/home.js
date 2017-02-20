
import {welcome} from './welcome';
import {welcome2} from './welcome2';

let a = 'a';
let b = 'b';

console.log('welcome: ', welcome('home'), {[a + b]:'???'});

//Promise.resolve({[a + b]:'???'});


//let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
//console.log(x); // 1
//console.log(y); // 2
//console.log(z); // { a: 3, b: 4 }
