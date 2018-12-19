# Description

In need of a Friend or want to choose a famous personality who is so similar in your thoughts!Do use this Friend Finder app

You can access the app here-https://famouspersonalityfinder.herokuapp.com/

# Technologies Used

- JavaScript

- jQuery

- node.js

- Express.js

- HTML

- Bootstrap


# Framework structure

FriendFinder
    - .gitignore
    - app
      - data
        - friends.js
      - public
        - home.html
        - survey.html
      - routing
        - apiRoutes.js
        - htmlRoutes.js
    - node_modules
    - package.json
    - server.js

# Friend-Finder Interface

This is a full stack web Application called as Friend Finder a dating app.The site will take in results from users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

# Installation:

server.js file should require the basic npm packages: express and path
Command to run for installation:
npm install express

# Walkthrough of the Code

* server.js file sets up the Express server, specifying our port number, the npm packages that need to be loaded, and also the routes, which we have externalized

* There are 2 separate HTML files (home.html and survey.html) that serve as the front-end portion of our code; they determine what the user sees (the homepage and the survey, which will also show the resulting best match)

* Our 2 routing files (htmlRoutes.js and apiRoutes.js) determine the back-end logic (based on the request being made, the response that gets sent to the browser); the HTML routes display the survey and the homepage based on the URL that is accessed, and the API routes send back existing content in our server-side data or add new friends

* Best match is calculated by finding the friend with the minimal difference in scores and then sending that friend to the browser as a JSON object

* A modal is then toggled, displaying the the best match to the person who just took the survey

* Friends are stored as such:

{
        
        "name":"Sachin",
        "photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtr2eRCHA_TlrUYHJm24bNpBBh8_8kd9yaXjMrBZJCAlLhYB2KRw",
        "scores":[5, 1,4,4,5,1,2,5,4,1]

}
