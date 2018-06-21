[x] inspect the code to figure out which routes are already implemented and where you need to make changes to add support for JWTs. This will help you practice reading existing code.

[ ] implement the authentication workflow (register and login) on the server using JSON Web Tokens.
  TASKS
  to `middleware.js`
    - import `jsonwebtoken` 
    - add `server.use(jwt)`
  To server.js
    - add `const { makeToken, verifyToken } = require('./authFunctions')`

[ ] add the functionality to restrict access to `/api/users` to authenticated users only. If a non authenticated user tries to make a request the server should return the appropriate `HTTP status code`.
  Tasks
    - Add `checkAuthorization` block to `authRoutes.js`
    - Add protected route for `/api/users` to `authRoutes.js` if not authorized return  `res.status(401).json({msg: 'Sorry not authorized'})`

implement a React client:
  -  [ ] add client side routes and components for `signup`, `signin` and showing the `list of users` stored in the database.
  
  -  [ ] the `/signup` route should provide a form to gather `username`, `password` and `race` for the user and make a `POST` request to the `/api/auth/register` route on the API. If the user is created successfully, take the returned token, save it to the browser's local storage and redirect the user to the `/users` route, where they should see the list of users.
  
  -  [ ] the `/signin` route should provide a form to gather `username` and `password` for the user and make a `POST` request to the `/api/auth/login` route on the API. Upon successful login, persist the returned token to the browser's local storage and redirect the user to the `/users` route.
  
  -  [ ] the `/users` route should read the token from local storage and make a `GET` request to the `/api/users` route on the API attaching the token as the value of the `Authorization` header.
  
  -  [ ] provide a button to `sign out` that will remove the token from local storage.

  ## Stretch Problem

-  [ ] add the code necessary so that when a client makes a `GET` request to `/api/users` the server only returns documents with the `same race` as the logged in user. For example if the logged in user is a _human_, then only users of the human race should be returned; if the logged in user is a _hobbit_ only the hobbits should be returned.