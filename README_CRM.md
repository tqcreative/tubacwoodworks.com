# Tubac Woodworks

Tubac Woodworks Inc, building custom cabinetry, entertainment center, bookcases, desks, and a variety of other wood products for home, office, or business.
 
*Collaborators:* 
 
*Diana, Chris, Matthew*
 
## About 
 
The README_CRM.md doc focuses on the CRM functionality of this full stack application.  The public facing website and CMS functionality is covered in a separate README doc.  The purpose of the CRM is to provide core lightweight customer relationship management functionality to the owner of the public facing website.  This document will cover the various functions of the CRM, how data is stored and updated, and how to get started using the CRM in a new app deploy.

*** 

## Index 
 
[Model](#Model) 

[Authentication](#Authentication) 

[CRM Pages](#CRM_Pages)

*** 

## Model

All users are stored in a Mongo database in a Users collection.  The password for all users is hashed and salted using the `bcrypt` npm package.  No passwords can be viewed in plaintext.  

There are two values that can be set for a user based on their role.  When you first setup a site, you should add at least one admin account.  From there that user can then add other users.  The role types are:
1. Admin - All User functionality with additional functionality - including adding/removing users and adding/updating/deleting customers
2. User - Basic functionality gives users access to the CRM and to view customer data in addition to being able to schedule appointments and add notes to customer records

The CRM is focused around the customer as the main source of tracking.  Outside of the Users model, the other models refer back to the Customers model, with the Customers _id field as the foreign key into the other Models.  MongoDB is the database used for storing all CRM data.  Below are the MongoDB collections used for the CRM(these can all be found under the models folder in the source code):

* Appointments (appointment.js)
    * One document for every appointment for every customer.  Each customer can have multiple appointments.
* Customers (customer.js)
    * One document per customer (enforced by unqiue constraint on email address)
* Notes (note.js)
    * One document per note per customer.  Each customer can have multiple notes.

***

## Authentication

All functionality for the CRM requires the user to be authenticated.  All routes to CRM pages will re-directed to a login page if the user isn't logged in.  All API routes will return a 401 unathorized message if an authentication token isn't passed in the request.

User login authentication and session tracking is handled via the `passport` npm package and the `passport-local` authentication strategy.  The Users model stores user accounts locally and is used to validate existing users.  This is the only valid authentication strategy for this CRM.

### authenticateUser Middleware
To protect api routes and make them secure, use the authenticateUser middleware function on those routes.  This is included in almost all api routes.  With this function, it will verify the user has an existing and valid user session.  If the user session isn't in the request, it will return an unauthorized response to the client.  Otherwise, it will call the next function in the chain, being the api route code.

The middleware function can be found here: `/utils/passport/autheticateUser.js`

To use the function in your api routes:
1. Require the function in your file: 

```js
const authenticateUser = require("../utils/passport/authenticateUser").authenticateUser;
```

2. Add the function to your api route, prior to the implementation of the api code.  The example below returns all customers from the crm database:
```js
Router.route("/").get(authenticateUser, (req, res) => {
    db.Customer.find({}, projectedContactFields).sort({ lastName: 1, firstName: 1 })
        .then(custRes => {
            res.json(custRes)
        })
        .catch(err => {
            res.status(500).json(err)
        })
});
```

### API Routes
All authentication routes can be found in `/controllers/auth.controller.js`

**Important: There is nothing preventing someone from creating an account when the signup api route is active.  Once the site is deployed and initial account(s) are created, the api route should be disabled.  If this isn't done anyone that finds the route can create an account and gain access to the CRM.**
* Route: /signup
    * method: post
        * usage: Commits a new user to the database.  No existing user authentication is required to signup a new user.  New users must have a unique user name that doesn't already exist in the database.
        * req.params: none
        * req.body: contains object representing new user, refer to Users model for what fields are required

* Route:  /login
    * method: post
    * usage: authenticates a user against the database, and if successful, returns a user object and sets a validation token in a cookie on the client machine.
    * req.params: none
    * req.body: user and password needed to authenticate

* Route:  /logout
    * method: post
    * usage: logs a user out.  This invalidates the current session token so that the user is required to login again at the next attempt to access the CRM.
    * req.params: none
    * req.body: none

* Route:  /
    * method: get
    * usage: checks the session token to make sure the user is logged in and returns the user information if successful.  Otherwise returns null.  Used for the client app to check if the user is logged in or not.


### HTML Routes
These routes are handled within the client React pages using the `react-router-dom` npm package.  The routes are defined in `client/src/App.jsx` which will then load the appropriate React components.  The components below can be found in `/client/src/pages`:

**Route:** /login

**LoginForm** - Displays a login page for existing users to enter their credentials to be verified against the database


**Route:** /signup

**SignupForm** - This page allows anyone to signup for an account that gets stored in the local database.  When the user submits the form, it hits an api route that writes the new user to the database.

**Important: There is nothing preventing someone from creating an account when the signup api route is active.  Once the site is deployed and initial account(s) are created, the api route should be disabled.  If this isn't done anyone that finds the route can create an account and gain access to the CRM.**

*** 

## CRM_Pages

Underneath this section, the various pages for the CRM are documented and include the routes used to render the views.  Users are required to be authenticated to access any CRM pages.  If a user isn't logged in, they will be redirected to the login page.

**Route:** /crm

**React Component: /client/src/pages/CRM** - This is the main landing page for the CRM.  On the top of the page are links to get back to the public homepage and to logout of the CRM.  On the left side of the landing page are the links for the various functionality of the CRM.  Each time a user clicks a link, the right panel updates with a React component that contains all of the UI components for that part of the app.

### CRM_Components

The components in this section are rendered within the CRM page.  Based on the route, the appropriate component will be rendered in the CRM page.

#### Dashboard

A dashboard page showing new leads that have signed up on the website in the last 7 days.  From here you can contact them, or mark them off the list.

**Route:** /crm/dashboard

**React Component:** /client/src/components/LeadWrapper

![Dashboard](/images/markdown/dashboard.png)

#### Employee

Displays a summary of all scheduled appointments for that user.  Also any account admin is performed here.  Depending on the role of the user, they will see buttons to perform various admin actions.

* User - Change Password
* Admin - All user functions, plus Add User and Delete User

**Route:** /crm/employee

**React Component:** /client/src/components/EmployeeWrapper

![Employee](/images/markdown/employee.png)


#### All Customers

Displays a list of all customers in the CRM database, regardless of if they are leads, etc.  From here you can go to their detailed contact information to make updates, contact them, or delete them (if you're an admin user).

**Route:** /crm/allcustomers

**React Component:** /client/src/components/ContactList

![All Customers](/images/markdown/all_customers.png)


#### Customer Info

This is the view of the detailed customer contact information.  You can view the existing information, make edits to it, and follow links to detailed notes and appointments for that contact.  If you're an admin user you can delete this contact from the database.  You can search for a customer with the search bar at the top, or if the customer id is passed at the end of the route, that user's information will pre-load.

**Route:** /crm/customer/:id 
* id is optional, if not included in the route, you need to pull up the customer info by searching

**React Component:** /client/src/components/ContactWrapper

![Customer Info](/images/markdown/customer_info.png)


#### Notes

The notes view is similar to the customer info view.  If you go to the route without a customer id at the end, it displays a blank note page.  From there you can search for a customer contact to add notes to.  If there is an id at the end of the route, that customer's notes will pre-populate.  When you add a new note, your username and a timestamp will be added to the note.  Notes can be added, but not edited or deleted.

**Route:** /crm/notes/:id
* id is optional, if not included in the route, you need to pull up the customer info by searching

**React Component:** /client/src/components/NoteWrapper

![Notes](/images/markdown/notes.png)

#### Scheduler

The scheduler view is similar to the customer info view.  If you go to the route without a customer id at the end, it displays a blank note page.  From there you can search for a customer contact to add an appointment to.  If there is an id at the end of the route, that customer's appointments will pre-populate.  You can add new appointments, and delete existing ones, but not update existing ones.

**Route:** /crm/scheuler/:id
* id is optional, if not included in the route, you need to pull up the customer info by searching

**React Component:** /client/src/components/ScheduleWrapper

![Scheduler](/images/markdown/scheduler.png)

### PrivateRoute

The PrivateRoute React component is a wrapper to place around any pages/components that require the user to be logged in.  This component will check for the req.user session information.  If it doesn't exist, it will redirect to the login page.  If it does exist, the child components will be rendered.  Authentication should be handled in the parent component and then passed down as props to the PrivateRoute component.

Location:  `/client/src/components/PrivateRoute`    
Props:   
* **loggedIn:** boolean value indicating if the user is logged in
* **user:** the user object containing the logged in user's information

Implementation - This is included in `/client/src/App.jsx`
```jsx
<PrivateRoute path="/crm" loggedIn={this.state.loggedIn} user={this.state.user}>
	<CRM logout={this._logout} user={this.state.user} />
</PrivateRoute>
```

Note: The CRM child component will only be rendered if the user is logged in.  This is the method for handling how the UI is presented based on user authentication.  All CRUD methods are also protected at the API level on the server side.