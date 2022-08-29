# Dependencies
Node.js is required to build and run the app https://nodejs.org/en/download/

# Build steps
1. Once the repo has been cloned navigate to the containing folder in the command promt or bash shell
2. Ensure todo-list-api is already built and running prior to the following steps
3. If the port number running the api is different to `https://localhost:7190` update line 12 of the `src/index.tsx` file and save using an appropriate text editor or IDE
3. Execute the following steps <br />
a. (Required if not already installed) `npm install react-scripts --save` <br />
b. `npm run build` <br />
c. (Required if not already installed) `npm install -g serve` <br />
d. `serve -s build` <br />

You should be given the localhost port number to open the running app i.e. http://localhost:3000 from your desired browser.

# Answers for NovaFori

1. How long did you spend on your solution?

I spent approxiamtely 4-6 hours building, testing and documenting both the ui and api.

2. What technical and functional assumptions did you make when implementing 
your solution?

I made the following assumptions based on the given brief: 
The server would be up and running at all times for the ui to call. 
The server would be saving changes to the data each time it was altered on the ui.
The look and feel of the ui was unimportant at this stage and functionality was more important.

3. Briefly explain your technical design and why do you think is the best 
approach to this problem.

The api exposes three endpoints based around the three user stories, a GET for the first story to retrieve all todos, a POST to add new todos and a PUT to alter the state of each todo. A repository pattern is used to access the seperate data project so that this could be easily swapped out for a different persistence if required so no chages would have to be made to the Controller. A simple list based in-memory persistence is used for the data project so that no additional dependecies need to be installed or built for this simple project.

The ui uses fetch to call the three different endpoints in the api based on different actions from the user. The GET endpoint is called when the page is loaded, after a todo is added or when a todo's state is updated. POST is called when a user adds a new todo. PUT is called when the state of todo is changed. GET would not need to be called after each interation if the frontend updated the state independantly, however the minimal amount of interaction meant it wasn't a big consideration for an app of this size. On a larger scale app this would be a consideration to reduce the number of times the frontend calls the server to reduce latency and cost.
