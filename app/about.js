
import {welcome} from './welcome';


welcome('about').then(function () {
    console.log('welcome: ', Array.from(arguments));
});

