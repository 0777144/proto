/* eslint-disable */

window.clearConsole = () => console.clear();
window.runCleaner = () => window.addEventListener('message', window.clearConsole);
window.stopCleaner = () => window.removeEventListener('message', window.clearConsole);

window.runCleaner()
