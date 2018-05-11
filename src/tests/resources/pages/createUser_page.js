var createUser_page = function () {
    //browser.get('http://localhost:4200/login');
};

createUser_page.prototype = Object.create({}, {
    usernameField: {
        get: function () {
            return element(by.xpath('//*[@id="username"]'));
        }
    },

    typeUsername: {
        value: function (keys) {
            return this.usernameField.sendKeys(keys);
        }
    },

    emailAddressField: {
        get: function () {
            return element(by.xpath('//*[@id="email"]'));
        }
    },

    typeEmailAddress: {
        value: function (keys) {
            return this.emailAddressField.sendKeys(keys);
        }
    },

    passwordField: {
        get: function () {
            return element(by.xpath('//*[@id="password"]'));
        }
    },

    typePassword: {
        value: function (keys) {
            return this.passwordField.sendKeys(keys);
        }
    },


    verifyPasswordField: {
        get: function () {
            return element(by.xpath('//*[@id="verifPassword"]'));
        }
    },

    typeVerifyPassword: {
        value: function (keys) {
            return this.verifyPasswordField.sendKeys(keys);
        }
    },

    createUserButton: {
        get: function () {
            return element(by.xpath('//*[@id="new-user"]/button/span'));

        }
    },

    newUserButton: {
        get: function () {
            return element(by.xpath('//*[@id="login-card"]/div/button[2]/span'));

        }
    },

});

module.exports = createUser_page;