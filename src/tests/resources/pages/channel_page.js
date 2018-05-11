var Channel_page = function () {
    //browser.get('http://localhost:4200/login');
};

Channel_page.prototype = Object.create({}, {
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
    createChannelToggle: {
        get: function () {
            return element(by.xpath('//*[@id="create-chat"]/ul/li/span[2]/label'));
        }
    },
    channelName: {
        get: function () {
            return element(by.className('mdl-textfield__input ng-untouched ng-pristine ng-invalid'));
        }
    },
    typeChannelName: {
        value: function (keys) {
            return this.channelName.sendKeys(keys);
        }
    },

    createChannelButton: {
        get: function () {
            return element(by.xpath('//*[@id="create-chat"]/button/span'));

        }
    },

    userHeader: {
        get: function () {
            return element(by.xpath('/html/body/app-root/div/div/main/div/ng-component/div/div/header/div/span'));

        }
    },

    messageTextBox: {
        get: function () {
            return element(by.xpath('//*[@id="message-text"]'));

        }
    },

    typeMessage: {
        value: function (keys) {
            return this.messageTextBox.sendKeys(keys);
        }
    },

    chatSendButton: {
        get: function () {
            return element(by.className('mdl-button mdl-js-button mdl-button--icon'));

        }
    },

    chatBubbleUsername: {
        get: function () {
            return element(by.className('mdl-card__title-text'));
        }
    },

    chatBubbleMessages: {
        get: function () {
            return element(by.className('mdl-card__supporting-text'));

        }
    }


});

module.exports = Channel_page;