# Types of Testing 
- Unit testing (for testing a single unit like components in an app)
- Integration Testing (for testing of a feature integrated using multiple components)
- End to End Testing (from user's perspective from logging in to logging out and test all th cases which users do in application) (will not do in this app as this will be done by testing methods like selenium etc and we are focused on developer testing in this tutorial)


# Setting up testing 

- Installed React Testing Library
- Installed Jest
- Installed Babel dependencies
- Configure Babel
- Configure Parcel config file to disable parcel transpilation
- Jest Configuration
- Jest - npx jest --init
- install jsdom library
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react inside my babel config
- Install npm i -D @testing-library/jest-dom
- use  "watch-test": "jest --watch" and run "npm run watch-test" command