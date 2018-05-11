var CreateUserPage = require('./resources/pages/createUser_page.js');
var dataLoader = require('./resources/config/test_data.json');
var TestingFunc = require('./resources/helper/basic.js');

describe('Creating a Group Chat and sending first message in Group Chat', function () {
    var page;
    var testHelpers;

    beforeEach(function () {
        page = new CreateUserPage();
        testHelpers = new TestingFunc();

    });

    it('Should create a new user', function () {

        browser.get(dataLoader.url);
        page.newUserButton.click();
        page.typeUsername(dataLoader.newUser.username);
        page.typeEmailAddress(dataLoader.newUser.email);
        page.typePassword(dataLoader.newUser.password);
        page.typeVerifyPassword(dataLoader.newUser.password);
        page.createUserButton.click();


    });

    it('Should login to the application with the new user', function () {
        testHelpers.doLogin(dataLoader.url, dataLoader.newUser.username, dataLoader.newUser.password);

    });

});