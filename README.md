# Introduction

This is an expressjs application that enables authenticated users to view the debt information of the customers.

## Prerequisites

nodejs version 4.7 and above,
postgres db
git (not needed if you download fromthis page)

## Setup and Installation
Clone this repository. Then navigate to the root folder as follows
```bash/cmd
git clone https://github.com/vinmugambi/debt-information.git
cd debt-information-master
```
Make sure you have installed postgres database and created a user with password.
Change the postgres connection string in app/config/sequelize.js to suit your database name, password, port ,host address,and user in the following format.

```js
app/config/sequelize.js
const sequelize = new Sequelize('postgres://db_username:db_password@db_host:db_port/db_name')
```

Install the dependencies

```bash/cmd
npm install
```

Then run the file named setup.js as follows to create the tables automatically.

```bash/cmd
node setup
```

Finally start the application
```bash/cmd
npm start
```
Visit http://127.0.0.1/ on your browser
