var Login_page = function () {
    //browser.get('http://localhost:4200/login');
};

Login_page.prototype = Object.create({}, {
    usernameField: {
        get: function () {
            return element(by.id('username'));
        }
    },
    typeUsername: {
        value: function (keys) {
            return this.usernameField.sendKeys(keys);
        }
    },
    passwordField: {
        get: function () {
            return element(by.id('password'));
        }
    },
    typePassword: {
        value: function (keys) {
            return this.passwordField.sendKeys(keys);
        }
    },
    loginButton: {
        get: function () {
            return element(by.xpath('//*[@id="login-card"]/div/button[1]/span'));
        }
    },
    drawerMenu: {
        get: function () {
            return element(by.className('material-icons'))
        }
    },
    sidePaneUsername: {
        get: function () {
            return element(by.className('mdl-layout-title side-pane-username'))
        }
    },
    getSidePanelUsername: {
        get: function () {
            return this.sidePaneUsername.getText();
        }

    }



});

module.exports = Login_page;