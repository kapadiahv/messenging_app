var LoginPage = require('./resources/pages/login_page.js');
var dataLoader = require('./resources/config/test_data.json');

describe('Login to My Messaging App', function () {
    var page;

    beforeEach(function () {
        page = new LoginPage();
    });

    it('Should Navigate to the Login Screen', function () {
        //Pre step to navigate to My Messaging App.
        browser.get(dataLoader.url);
    });

    it('Should be able to log me in with the username and password provided', function () {
        //Steps to login on the login form
        page.typeUsername(dataLoader.username);
        page.typePassword(dataLoader.password);
        page.loginButton.click();

    });

    it('Should be logged in with user', function () {

        var li = element(by.linkText('New Chat'));
        //Expect the New Chat button on side pane to be present, only available after user has successfully logged in
        expect(li.isPresent()).toBe(true);




    });

});