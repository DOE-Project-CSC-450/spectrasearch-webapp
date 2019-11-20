Directions for connecting back end and front end with expresss and node.js (note the current code in the frontend master still works with Spectra Search database (round 1). The code to work with round 2 database will be uploaded momentarily)

1. Copy and paste sql code into phpmyadmin. This is the link: https://www.ampps.com/wiki/How_to_use_AMPPS. Let me know if you cant get database set up, I can just send you a copy of my database and we can do it that way. 

2. Clone the front end repo to your local device. Make sure you do a npm install, npm run build, and then npm start. 

3. Server.js file has most of the code related to connecting backend and front end. It uses express and node js.
-I watched this video to help understand what node.js is: https://www.youtube.com/watch?v=TlB_eWDSMt4&t=4179s (feel free to watch on double speed).
-Also this video mimics how I set up node.js in Server.js file of front end: https://www.youtube.com/watch?v=HPIjjFGYSJ4&t=115s&fbclid=IwAR2daqIIiajepOOvq9C46QG6UI3_acSTxpulBGbG9ifpR_oaJqNaL2KJhaI

3. To run the local server for the json, **important step, go to command prompt and enter    node Server.js   it should run and say 'connected!' ...test this by hitting up http://localhost:4000/lighting  ..if there is something there it worked

4. Anyone can feel free to try and test grabbing info and putting info into database by reading how to in these brief tutorials from w3schools: https://www.w3schools.com/sql/sql_select.asp
-You will be able to see if it worked by hitting http://localhost:4000/lighting, which should output the json for a part of the database.

5. We can grab the data and display it as well using axios (get, post) or ajax(fetch) calls. 
https://www.w3schools.com/xml/ajax_intro.asp (ajax) for example

**This readme is still in the works, more detail on how the code works with new database to be updated momentarily





















---------------------------------------------------------------------------------------------------------------------------------
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
