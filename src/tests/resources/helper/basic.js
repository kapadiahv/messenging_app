var LoginPage = require('../pages/login_page.js');

var TestingFunc =  function() {

    var page;
    page = new LoginPage();

    this.doLogin = function(Url, Username, Password) {

        browser.get(Url);
        page.typeUsername(Username);
        page.typePassword(Password);
        page.loginButton.click();

        var li = element(by.linkText('New Chat'));
        //Expect the New Chat button on side pane to be present, only available after user has successfully logged in
        expect(li.isPresent()).toBe(true);

    };
};

module.exports = TestingFunc;