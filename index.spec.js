var checkFile = require('check-ecmascript-version-compatibility');

describe('common.bundle.js', function () {
    it('is ES5-compliant', function (done) {
        // It can take awhile to parse large files, so you may need to
        // increase your timeouts.
        //this.slow(8000);
        //this.timeout(10000);

        console.log(checkFile('pubclic/dist/common.bundle.js', done));
    });
});
