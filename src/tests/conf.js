// conf.js
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['login_spec.js','channel_spec.js', 'createUser_spec.js'],

}