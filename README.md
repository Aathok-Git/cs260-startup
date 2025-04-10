# Wordle With Friends!

[My Notes](notes.md)

This website will allow a user to create a login, and to submit their wordle score once per day (local time) and be able to compare their scores with other people of their choosing. By inputting the username of another person, they will be able to see them on their "friends list" and be able to compare scores with them. The website will automatically check with the worldle website (hopefully) and confirm that the user is submitting the correct day's wordle. The friends list display will show the score of their friends only after the user has submitted their own score, and will show their score for the day, as well as their average score for all scores submitted.


> [!NOTE]
>  This is a template for your startup application. You must modify this `README.md` file for each phase of your development. You only need to fill in the section for each deliverable when that deliverable is submitted in Canvas. Without completing the section for a deliverable, the TA will not know what to look for when grading your submission. Feel free to add additional information to each deliverable description, but make sure you at least have the list of rubric items and a description of what you did for each item.

> [!NOTE]
>  If you are not familiar with Markdown then you should review the [documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) before continuing.

## 🚀 Specification Deliverable

> [!NOTE]
>  Fill in this sections as the submission artifact for this deliverable. You can refer to this [example](https://github.com/webprogramming260/startup-example/blob/main/README.md) for inspiration.

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] Proper use of Markdown
- [X] A concise and compelling elevator pitch
- [X] Description of key features
- [X] Description of how you will use each technology
- [X] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

This website will provide a means for individuals to submit their daily Wordle scores and compare them to the scores of their friends. The website will show a daily scoreboard of the wordle for the day, as well as a scoreboard of the average score for the account.

### Design

![Design image](Rough_Sketch.jpg)



```mermaid
sequenceDiagram
    actor User
    actor Website
    User->>login: Enter login information
    login->>Website: Authenticate User
    Website->>Website: Store authentication data
    Website->>Endpoint: Request the number of the local day's wordle
    Endpoint->>Website: Send the number of the local day's wordle
    Website->>User: Request local time
    User->>Website: Send local time
    User->>Website: Submit Score
    User->>Website: Request a new friend to add to scoreboard
    Website->>Website: Retrieve a users scores for themselves or a friend's scoreboard
    Website->>User: Display scores of user and all user's friends in a leaderboard
    Website->>Website: Verify a user submits valid data
```

### Key features

- Will have a login page and will save the login
- Will allow a users to submit a score once per day in local time (if I can't figure out a local time, I'll say when the leaderboard resets)
- Allow users to friend others and the website will display the friends' scores.

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Website page with a login page, a submit page, and a scoreboard page. Login and submit will take
- **CSS** - Default dark mode, pretty buttons, etc.
- **React** - Button to add a friend to their leaderboard list
- **Service** - login authentication, save scores and calculate average, check w/ the wordle website to determine when to allow users to submit the next day's score.
- **DB/Login** - account and login, username will be accessed by others to add to friends list.
- **WebSocket** - updates the page when a friend submits a score.

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] **Server deployed and accessible with custom domain name** - [My server link](https://yourdomainnamehere.click).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] **HTML pages** - Created pages for each feature of my website.
- [X] **Proper HTML element usage** - I studied HTML elements and implemented tags such as: anchor, paragraph, div, form, h1, header, footer, main, menu, span, button, etc.
- [X] **Links** - Has Navigable directory for the website and also linked to the wordle website.
- [X] **Text** - About page has text
- [X] **3rd party API placeholder** - Button to get a random word on about page.
- [X] **Images** - Image on the about page.
- [X] **Login placeholder** - Contained in main HTML
- [X] **DB data placeholder** - scores placeholder displayed on disp_scores.html
- [X] **WebSocket placeholder** - placeholder for notifications for when friends submit scores on disp_scores.html

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] **Header, footer, and main content body** - Responsively sized, title and footer disappear on small screens.
- [X] **Navigation elements** - Navigation bar is always visible and allows access to the whole website
- [X] **Responsive to window resizing** - Works on all but really really small screens.
- [X] **Application elements** - Used display:flex as well as lots of classes to get things to line up right
- [X] **Application text content** - Used the Franklin Gothic font, which is the same font that WORDLE uses.
- [X] **Application images** - The about image is unchanged.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] **Bundled using Vite** - I used Vite instead of live-server to debug, and deployReact.sh used it to bundle it for the webservice
- [X] **Components** - I organized each component modelling the simonReact instruction and converted all my HTML to JSX
- [X] **Router** - Used the router to navigate between webpages on a click. Works well.

## 🚀 React part 2: Reactivity

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] **All functionality implemented or mocked out** - Stuff w/ scores and friends and authentication properly marked out
- [X] **Hooks** - Used useffect and usestate, placeholder for webhook for getting a random word is implemented.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] **Node.js/Express HTTP service** - Successfully connected frontend and backend
- [X] **Static middleware for frontend** - Middleware successfully works
- [X] **Calls to third party endpoints** - Calls a random word api in `about.jsx`
- [X] **Backend service endpoints** - Multiple PUSH and GET functions to access backend service.
- [X] **Frontend calls service endpoints** - All frontend pages have at least one call to a service endpoint.

## 🚀 DB/Login deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] **User registration** - Registration is handled and stored in the DB with a bcrypted password.
- [X] **User login and logout** - Users are able to login w/ their credentials or a stored cookie. Logout works great.
- [X] **Stores data in MongoDB** - Scores are stored in the Mongo DB, no issues present.
- [X] **Stores credentials in MongoDB** - Registration credentials are stored in the DB.
- [X] **Restricts functionality based on authentication** - Users are only able to view the login and about pages if they are not logged in.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] **Backend listens for WebSocket connection** - Implemented in the bottom of index.js
- [X] **Frontend makes WebSocket connection** - Used the console log to make sure this worked while I was debugging. It works.
- [X] **Data sent over WebSocket connection** - Sends data only when a score is successfully submitted
- [X] **WebSocket data displayed** - Displays the username and score of whomever submits a score.
- [X] **Application is fully functional** - Application works as intended.
