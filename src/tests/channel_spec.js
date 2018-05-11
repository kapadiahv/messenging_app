var ChannelPage = require('./resources/pages/channel_page.js');
var dataLoader = require('./resources/config/test_data.json');
var TestingFunc = require('./resources/helper/basic.js');

describe('Creating a Channel and sending first message in that channel Chat', function () {
    var page;
    var testHelpers;

    beforeEach(function () {
        page = new ChannelPage();
        testHelpers = new TestingFunc();

    });

    it('Should login to the application', function () {
        testHelpers.doLogin(dataLoader.url, dataLoader.username, dataLoader.password);

    });

    it('Should navigate and create a channel chat', function () {
        page.newChatLink.click();
        expect(page.newChatHeading.isPresent()).toBe(true);

    });

    it('Should be able to create a chanel', function () {
        page.createChannelToggle.click();
        page.typeChannelName(dataLoader.channelName);
        page.createChannelButton.click();

        //Validates the chat header to be the same name as the one inputed while creating channel name in above steps
        expect(page.userHeader.getText()).toEqual(dataLoader.channelName);


    });

    it('Should be able to send message on a channel chat', function () {
        page.typeMessage(dataLoader.channelMessage);

        // The send button is hidden if the hamburger menu is open, th
        // Only after a certain decrease in size does the hamburger menu close and allows the send button to be displyaed
        // Which is why to actually send a message, decreasing the size of the window was required so that the send button is displayed
        browser.manage().window().setSize(320, 480);

        page.chatSendButton.click();

        //Validates that chat bubble that apepars is the by the user and message that was sent in previous steps
        expect(page.chatBubbleUsername.getText()).toEqual(dataLoader.username);
        expect(page.chatBubbleMessages.getText()).toEqual(dataLoader.channelMessage);

        //Resize browser back to orginal size, so hamburger menu re-appears.
        browser.manage().window().setSize(1039, 620);

    });



});