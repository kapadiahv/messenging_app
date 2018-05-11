var Group_page = function () {
    //browser.get('http://localhost:4200/login');
};

Group_page.prototype = Object.create({}, {
    newChatLink: {
        get: function () {
            return element(by.linkText('New Chat'));
        }
    },
    newChatHeading: {
        get: function () {
            return element(by.id('create-chat-heading'));
        }
    },
    createGroupchatToggle: {
        get: function () {
            return element(by.xpath('//*[@id="create-chat"]/ul/span/li/span[2]/label/span[2]'));
        }
    },
    chatMembers: {
        get: function () {
            return element(by.className('mdl-textfield__input ng-untouched ng-pristine ng-valid'));
        }
    },
    typeMembers: {
        value: function (keys) {
            return this.chatMembers.sendKeys(keys);
        }
    },
    chatName: {
        get: function () {
            return element(by.className('mdl-textfield__input ng-untouched ng-pristine ng-invalid'));
        }
    },
    typeChatname: {
        value: function (keys) {
            return this.chatName.sendKeys(keys);
        }
    },

    createGroupButton: {
        get: function () {
            return element(by.xpath('//*[@id="create-chat"]/button'));

        }

    }


});

module.exports = Group_page;