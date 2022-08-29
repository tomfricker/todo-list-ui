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
