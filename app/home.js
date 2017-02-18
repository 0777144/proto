
import {welcome} from './welcome';


welcome('home').then(function () {
    console.log('welcome: ', Array.from(arguments));
});

