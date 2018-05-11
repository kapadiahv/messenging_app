# Testing Messenging App Using Protractor

# Description
These are protractor tests using the jasmine framework.

# Functionality
login_spec.js
This will have the log tests

channel_spec.js
This will have tests that create a channel as well as post a message to the channel chat

createUser_spec.js
Create a new user and login with a the newely created user

group_spec.js
Creates a group chat
**Note, creating a group chat is crashing the node js server due to some headers not being handled properly by the application.

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

