
import {welcome} from './welcome';

let a = 'a';
let b = 'b';

console.log('welcome: ', welcome('home'), {[a + b]:'???'});

Promise.resolve({[a + b]:'???'});

