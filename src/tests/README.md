# Testing Messenging App Using Protractor

# Description
These are protractor tests using the jasmine framework to test the UI functionality of my messaging app in an Automated fashoin.

# Functionality
The functionalities tested include:
- Login to the application
- Create  channel
- Send a message
- Validate message sent appears in the chat bubble
- Create a New User
- Login with newely created user

# How to Run

   1. Start up the messaging app as per original instructions given.

   2. Install Protractor:
   npm install -g protractor

   3. Install and Start Web Driver (Starting Selenium Server) in another terminal window:
   webdriver-manager update
   webdriver-manager start

   3. Run the tests
   Navigate to the tests directory (src/tests) and run the below command.
   protractor conf.js

   you can modify conf.js with the individual tests you want to run if desired.

# Technologies Used
Protractor
javascript

