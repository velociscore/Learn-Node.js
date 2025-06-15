# Install nodemon so that we dont have to restart server mannualy everytime on any changes

- npm i -D nodemon
  include nodemon to start server on running (npm run dev)
  "scripts": {
  "dev": "nodemon src/index.js"
  },

# What if you delete node_modules?

- As long as you have package.json and package lock.json , you can recreate node_modules. You just need to run npm install to re-install dependencies.

# (Forgot to mention about .gitignore file)

- Basically we mention what not to push on github mentioning the particular folder or file on the .gitignore.

# Wild card in Route Handler(/)

- If route is starting from (/) then anything starting with "/" will be matched to this.
  like "/hello" "/hello/1"

  Order matters a lot in routing ..

- The code starts matching the routes from top to

# Http methods

- how do we handle different method differently on our apis/routes?

Instead of app.use (the use over here matches for all the http methods/API calls )
app.get() app.post()... etc handles specific http methods..

# Advanced things about routing.

(We will be talking about it on next session)

# What are query parameters and path parameters?

- They are the most common ways to send data to the server through URL.

-Query parameters->>
Key-value pairs appended to the end of a URI after a question mark (?), separated by ampersands (&). They are part of the query string.Used to pass data to the server, such as filters, search terms, or configuration options.
eg.- https://example.com/profile?key1=value1&key2=value2

-Path Parameters->>
Visible in url. Data is embedded in the URI path, e.g. https://example.com/users/123/profile.
The server interprets specific segments of the URI as data, often used in RESTful APIs.
Ideal for hierarchical or resource-based data, such as retrieving a specific user or resource.

#
