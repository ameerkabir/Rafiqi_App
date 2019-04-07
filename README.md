Rafiqi App

### Steps to run the front-end locally

### `git clone url`

This will clone the project to your local machine

Then cd into the `frontend` folder `cd frontend`

In the project directory, you can run:

### `yarn`

Running this will install all the dependencies.<br>

## Note:

you will need to have `node` install on your machine to be able to run the above command <br>

if your using mac then you can do `brew install nvm` this command will install `node` as well as `npm` which is a package manger for node <br>

and then you will need to install yarn with `npm install -g yarn` if this goes well then your a good to run `yarn` <br>

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>

### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

### To run the  backend code

#### If you already install yarn globally on your machine then do the following to set up the back-end

### `cd backend`

### run `yarn`

This will install all the dependencies.

### then run `yarn start`

This will start the node server on port 4000, to test that your server works find you can open[http://localhost:4000]

### housekeeping rules/code commit rules

###### always create a new branch and the branch name should be reflective of the task

`git checkout -b 'name of the branch'`<br>
`git status` <br>
`git add 'name of the file(s) that you changed'` <br>
`git commit -m 'meaningful commit message that reflects the changes'` <br>
`git push origin 'name of the branch'` <br>

### some times you want to get the latest changes from master in that case you can run

`git merge origin master` <br>
This way your always up to date with the main branch which is master
