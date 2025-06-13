# How you run this project ?

- go to the folder day3
- in terminal/cmd type
  npm install
  node index.js

  ## Don't think much just do it, we will be disscussing why how in next session ...

# Why express instead of http??

- HTTP module is foundation for creating web servers,but it is low level and requires more code for common tasks.

- In HTTP module,Handling routes,query parameters json mannually is tedeious and error prone.

- Through HTTP module if we handle POST request ,we have to handle it mannually but in express,
  express.json() does it automatically.

- Express solves the above problems and is efficient and have built in support for middlewares.Express code
  is easier to maintain.

# What are dependencies?

- Any package which your project is dependent on to run your application, for e.g suppose if express is dependency i.e project is dependent on express,

# What is Node_modules?

- All the source code of any package which are installed inside the node_modules.Node modules is the place whenever we install any package like say express, it downloads from the internet and place all the source codes of package inside of the node_modules.

### When we only install express where do all the other folders come inside the node_modules?

-This is due to TRANSITIVE DEPENDENCIES meaning express.js is dependent on other npm libraries. So the node_modules will also become very big.

- Suppose 20 dependencies and those 20 dependencies also could have 20 and other 20 also could have 10 or 20 or 5 or so on , this is called transitive dependencies and so the node_modules becomes very heavy and they are not pushed onto the github.

# We do have package.json file then why Package-lock.json ?

- To match or preserve actual versioning of the package. So that the application could not break.

# Handler function

- Handler function in js is the function that handles request when the specific route is matched.

# What happens when request comes in Express ?

-Matches the request method (GET,POST)
-Matches the path (/home,/example,/api)
-Runs the matching handler function.

# What is the order of execution of Routes and middlewares/handlers?

- Top to Bottom , 1st hit route is responsible for sending response.
