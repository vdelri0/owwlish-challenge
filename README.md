This is the Oowlish react.js challenge, a web app to control the working hours for a company's employees. The app can be used by each employee to manage and keep account of:

**Info:**

- Worked hours
- Arriving and Exiting hours
- Lunch breaks

**Features:**

- Input:
  - Arrive and Exit times
  - Lunch break times
- Show the amount of hours above or below the expected working hours
- Save, delete and fetch data to an external REST API (Built in Json-server)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Table of Contents

- [Folder Structure](#folder-structure)

- [Available Scripts](#available-scripts)

- [npm run server](#npm-run-server)

- [npm start](#npm-start)

- [npm test](#npm-test)

- [npm run build](#npm-run-build)

- [npm run eject](#npm-run-eject)

## Folder Structure

After creation, your project should look like this:

```

oowlish-challenge/
	README.md
  	.gitignore
	node_modules/
	package-lock.json
	package.json
	db/
	    db.json
	public/
	index.html
	    favicon.ico
	src/
	    App.css
	    App.js
	    App.test.js
	    index.css
	    index.js
	    logo.svg
	    utils.js
	    components/
	        AlertDialog.jsx
	        ArriveExitHours.jsx
	        BasicInfo.jsx
	        EmployeeHours.jsx
	        HomePage.jsx
	        LunchBreaks.jsx
	        WorkedHours.jsx

```

For the project to build, **these files must exist with exact filenames**:

- `public/index.html` is the page template;

- `src/index.js` is the JavaScript entry point.

- `db/db.json` is the data file for the fake rest-api.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>

You need to **put any JSX, JS and CSS files inside `src`**, or Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>

Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>

They will not be included in the production build so you can use them for things like documentation.

## Available Scripts

In the project directory, you can run:

### `npm run server`

runs the json-server for the development mode.<br>

Open http://localhost:3001 to view it in the browser.

### `npm start`

Runs the app in the development mode.<br>

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
