# Front-End Test: Users List

## Background

Display a user list UI as below:

![](https://www.dropbox.com/s/h68v90cd75bxoev/Screenshot%202015-07-29%2023.30.53.png?dl=1)

Data should be loaded via AJAX request from https://randomuser.me/ API.

When any user list row is clicked it should expand to show more detail:

![](https://www.dropbox.com/s/mfdy6lus3oh0smq/Screenshot%202015-07-29%2023.35.54.png?dl=1)

## Tools

You can use any CSS and JS frameworks of your choice.
If you implement with AngularJS it's a plus.

You should implement one requirement at a time.
It doesn't matter how many requirements you implement in the limited period of time, what's more important is implement each requirement well.

## Requirements

### User List

* Display the list of users from randomuser.me API with the following information
  - Avatar image
  - Last name	
  - First name	
  - Username	
  - Phone	
  - Location
* Avatar should be rounded
* Rows in the list are striped (alternating colors)

### User Details

* When user clicks on any one user list row it should expand and show the following additional information:
  - Firsn Name
  - Gender icon
  - Username
  - Registered date
  - Email
  - Location
  - Birthday
  - Phone
  - Cell
  - Bigger avatar image
* When user clicks on an expanded row again it should collapse
* When user clicks to another row the current expanded row should collapse

## Additional Requirements

### Sticky header

* When on top of the page header is on top of the table
* When scrolling down header "sticks" to the top of the window over the table.

### Add User Form

* "Add User" button is added on top of the list
* When user clicks "Add User" button he can fill in the form with user information
* When the form is completed and user clicks "Save" a new user row will be added to the end of the list

### Delete User Button

* "Delete" button is added to each list item
* When user clicks "Delete" that user will disappear from the list