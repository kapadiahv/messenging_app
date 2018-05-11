var GroupPage = require('./resources/pages/group_page.js');
var dataLoader = require('./resources/config/test_data.json');
var TestingFunc = require('./resources/helper/basic.js');

describe('Creating a Group Chat and sending first message in Group Chat', function () {
    var page;
    var testHelpers;

    beforeEach(function () {
        page = new GroupPage();
        testHelpers = new TestingFunc();

    });

    it('Should login to the application', function () {
        testHelpers.doLogin(dataLoader.url, dataLoader.username, dataLoader.password);

    });

    it('Should navigate and create a group chat', function () {
        page.newChatLink.click();
        expect(page.newChatHeading.isPresent()).toBe(true);


    });

    it('Should be able to create a group chat', function () {

        page.createGroupchatToggle.click();
        page.typeMembers(dataLoader.groupMembers);
        page.typeChatname(dataLoader.groupName);
        page.createGroupButton.click();

    });

    it('Should be able to send message on a group chat', function () {


    });


});