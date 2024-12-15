## Overview

**Project Title**: SQL api endpoints

**Project Description**: Use SQL to build a database for the backend of a web app

**Project Goals**: Learn more about using SQL and Python together. Learn how to set up a SQL database server. Potentially learn about Web Scrapping

## Instructions for Build and Use

Steps to build and/or run the software:

1. Download the software from the repository
2. Install Python 3.13
3. Download the required libraries (Flask, sqlite3) 

Instructions for using the software:

1. Run the build.db file to create the local database
2. Start the backend server by running the backend.py file in the terminal
3. Start the frontend server by running 'py -m http.server' in the terminal when the in the fronted directory
4. Open http://localhost:8000/ in a web browser

## Development Environment 

To recreate the development environment, you need the following software and/or libraries with the specified versions:

* Install Python 3.13
* Install Flask
* Install sqlite3

## Useful Websites to Learn More

I found these websites useful in developing this software:

* [Microsoft tutorial to SSMS](https://learn.microsoft.com/en-us/sql/ssms/quickstarts/ssms-connect-query-sql-server?view=sql-server-ver16)
* [Flask documentation](https://flask.palletsprojects.com/en/2.0.x/)
* [sqlite3 documentation](https://docs.python.org/3/library/sqlite3.html)

## Future Work

The following items I plan to fix, improve, and/or add to this project in the future:

* [ ] Set up the frontend on the same flask server as the backend
* [ ] Change teh setup of the database to allow for concurrent querying and adding a write log to make it production ready
* [ ] Finish the frontend to allow for user input and display the data from the database
* [ ] Add a web scraper to the backend to populate the database with data so that the app can be used in multiple locations without needing to manually add data
