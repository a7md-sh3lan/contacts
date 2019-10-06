# contacts
backend API's to add new contacts or get all contacts or get recent five contacts for two static users..

# clone the project
in terminal:
git clone https://github.com/a7md-sh3lan/contacts.git

# install dependancies
in terminal:
npm install

# in mysql create new database and name it "contacts" or somehow name

# in file Modles/connection.js
alter database with the name that you named database in mysql and put your username and password

# run the server
in terminal:
nodemon server.js

# let's go
now go to postman and test our three API's

# Static users:
const users = [
    // User A
    {
        authorization: 'fgjhdhjksjkklf89898f9d9d9ddd9g89fg9g9g9f859f9dfdd9d9',
        deviceToken: '9f7f898f89d8d78f8f87f88f7f88f78f7f87f8df88df8d8d8d7d8',
        fingerPrint: '1234567',
        user_id: '1',
        name: 'User A'
    },

    // User B
    {
        authorization: 'dfgdjfjeeffe8f8f8f89f6fg5fr96df95f66d56df596d9fdfd',
        deviceToken: 'f8gd8fdf84d84sd8df8dewedewe8r8385834884c4ddedeed48',
        fingerPrint: '123456789',
        user_id: '2',
        name: 'User B'
    },
]

# first API: add new contact (method: POST) (url: http://localhost:{port, or 8080}/contacts/addContact)
you should enter credintials of one of two static users in above array, then enter data of new contact that matched validation rules:
inputs => authorization, deviceToken, fingerPrint, firstName, lastName, email, mobile

#Second API: get all contacts for specific user (method: POST) (url: http://localhost:{port, or 8080}/contacts/getList)
you should enter credintials of one of two static users in above array:
inputs => authorization, deviceToken, fingerPrint

#Third API: get the recent five contacts for specific user (method: POST) (url: http://localhost:{port, or 8080}/contacts/getRecentList)
you should enter credintials of one of two static users in above array:
inputs => authorization, deviceToken, fingerPrint

thanks,

