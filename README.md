# GarageGaming

## Description

#### _**This site is designed for a group of gamers.**_

#### _**By Tyler Stephenson, June 16, 2017**_

### Setup/Installation Requirements
* clone <link to repo>
* cd <local repo>
* create a firebase project here https://firebase.google.com/
  * once the project is created navigate to the rules tab via the database section on the left.
  * modify the rules to look like this:
  `{
    "rules": {
      ".read": true,
      ".write": true
    }
  }`
  * click publish and then dismiss the warning.
* create a `/src/app/api-keys.ts` file in the <local repo> to hold your firebase project keys.
  * the file should look like this with your firebase info replacing the x's:
    `export var masterFirebaseConfig = {
      apiKey: "xxxx",
      authDomain: "xxxx.firebaseapp.com",
      databaseURL: "https://xxxx.firebaseio.com",
      projectId: "xxxx",
      storageBucket: "xxxx.appspot.com",
      messagingSenderId: "xxxx"
    };`
* run this series of commands:
  * `$ npm install`
  * `$ ng serve`

## Planning

1. Specs
  * Use Bootstrap for base styling.
  * gamer model.
    * Base
      * name - string
      * age - number
      * availablity - string
      * game types - as an array of strings
    * Expansion/Future
      * games - array of strings
      * location - string
      * joined - timestamp
  * gamer functions.
    * Base
      * Create
      * Update
      * Delete
      * Find all gamers
      * Find a given gamer
      * Sort by availablity
      * Sort by game types
    * Expansion
      * firebase user authentication

2. User Stories
  * As a user, I'd like to visit a page to see a list of all team or club members.
  * As a user, I'd like to click a team or club member's entry in the list to visit their profile page, which should include more details about them.
  * As a user, I'd like the option to visit an "About" page that explains what the club is, and what they do.
  * As a user, I'd like all data persisted in a database, so it's always there when I need it.
  * As a user, I'd like to filter the list of users by their particular role in the group, or some other information/category. (For instance, a club may have a treasurer, president, and/or secretary. A sports team may have a goalie, forward, or striker, a book club may have founders and attendees. You're also welcome to filter by something other than role, if it's more relevant to your project.)
  * As an administrator, I want to add new users to the club. (User authentication is not required).
  * As an administrator, I want to edit user profiles, in case I make a mistake, or need to update their details.
  * As an administrator, need the option to delete a user, in case they leave the club or team.

3. Integration
  * index/homepage - welcome.
    * List gamers
      * gamer detail
    * Admin
      * New gamer
      * Edit gamer
  * About.
  * Contact. ?future

4. UX/UI
  * Include and modify bootstrap/materialize/Sass etc.
  * Develop custom style

5. Polish
  * Refactor
  * Make README awesome

### Known Bugs
No known bugs at this time.

## Support and Contact details
* Tyler Stephenson
* ilduchea@gmail.com

### Technologies Used

* Typescript
* AngularJS
* Angular CLI
* Firebase
* HTML5
* CSS
* Bootstrap
* jQuery
* node.js

### License

*This is web page is licensed under the MIT License.*

Copyright (c) 2017 **Tyler Stephenson**
