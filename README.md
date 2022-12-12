# Project 3 - Dealio - Online Store App (Back-end)
<div align="center">A online store app/server by Guillermo Aviles, Hiram Rodriguez, and Nghia Vo
<br></br>
<img src="https://user-images.githubusercontent.com/114704720/206938631-ff29447f-2f0c-4553-a77e-9738139ff8e2.png"/>
</div>

## Project Overview

The online store app would be the place where the users can freely buy any available items on the sites, sell an item by creating a new post, add a review/comment to an existing item. The app give the users the freedom to buy and sell without paying any fees or restrictions.

+ This repository is the backend respository for the app.
+ The backend is deployed on Heroky: [here](https://online-store.herokuapp.com/api/online-store/)
+ The front end is deployed on Vercel: [here]()
+ The associated front end repository can be found: [here](https://github.com/guillermoaviles/online-store-fe)

## Deployment
The backend of our application is a MongoDB, Express and Node with two models that includes a schema for Item and for Comment. It follows RESTful architecture in naming and functionality of all available endpoints. Create, Read, Update, and Destroy (CRUD) was built in throughout the app. The backend composes the following technologies/platforms:

### Heroku: 
Heroku is a container-based cloud Platform as a Service (PaaS). Developers use Heroku to deploy, manage, and scale modern apps. The platform is elegant, flexible, and easy to use, offering developers the simplest path to getting our apps to market. Heroku plays a crucial part in our backend server/app. 

### MongoDB Atlas: 
MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. According to General Assembly, _"even though SQL databases have been around for much longer, NoSQL databases have gained in popularity in recent years as the amount of user-generated data on web applications has grown exponentially. NoSQL databases like MongoDB lend themselves well to rapid app development use cases such as coding sprints and Agile settings. Anytime you have large amounts of data with little or no structure, unknown requirements, or when data is increasing at a very high rate, a flexible and scaleable database like MongoDB would be an ideal choice."_

### Postman:
Postman is a great tool when trying to dissect RESTful APIs made by others or test ones you have made yourself. It offers a sleek user interface with which to make HTML requests, without the hassle of writing a bunch of code just to test an API's functionality. **(Digitalcrafts)**

### Vercel:
Vercel is the most accessible platform to deploy websites. By connecting the ** your GitHub repository** to Vercel, you can simply deploy the main branch to Vercel domains — and it does all the heavy lifting for you. **(Julian Wallis)**

## Req-Res Diagram
### Before
<div align="center">
<img src="https://media.git.generalassemb.ly/user/45455/files/26ab68b8-066a-4711-a262-38ef515aca04"/>
</div>

### After
<div align="center">
<img src="https://user-images.githubusercontent.com/114704720/206949148-8708de1d-0166-4e0d-ad93-df2835535fbe.png"/>
</div>

## User Stories
+ AAU, I want to be able to add new information about an item into the database.
+ AAU, I want to be able to update the information on an existing item to the database.
+ AAU, I want to able to retrieve information about an item from the database.
+ AAU, I want to be able to delete information about an existing item in the database.

## Component Development
Our main component includes:
+ Planning directory: to help with project development and planning.
+ Controllers directory: two separate file for managing our API request and responses.
+ Data directory: contains two file with already-made JSON data to test our localhost in the first phase of the project.
+ Seed directory: contains file to seed already-made JSON into localhost database.
+ Connection file: contain file to connect to MongoDB.
+ Models directory: contains two file that have schema properties and values.

## Project Management
The team followed the daily SCRUM protocols and met for a 5 to 10 minutes a day to discuss small wins, achievements, any blockers, unresolved issues, obstacles that we were encountering. We also met before the day end to discuss any working plans and small goals for the next days.As for the Git workflow, we follow the *'Feature Branch'* method where we have the inital code set-up in the main branch. Everyone who is working will branch out to dev branch to work and push up the code accordingly. Guillermo, who is our Git Manager, then reviewed the latest code with the team to validate the code. He then will submit a pull request and merged that PR to the dev branch. Once our code met MVP, he then merge code to main branch for deployment to Heroku. The team was committed to collabrate creatively and equally. We tried to be mindful of that and divided the work so that everyone at least working on something on both backend and front end.

<div align="center">
<img src="https://user-images.githubusercontent.com/114704720/206955919-a8dbd9d1-3a2c-4e1d-bb16-b626883ce46c.png"/>
</div>

## Code Snipet

## Issues & Resolutions

## Resources:

+ [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
+ [Inline HTML](https://stackoverflow.com/questions/12090472/how-do-i-center-an-image-in-the-readme-md-file-on-github)
+ [Intro to Mongo and Mongoose](https://git.generalassemb.ly/seir-ten3/intro-to-mongo-and-mongoose)
+ [What is Postman, and Why Should I Use It?](https://www.digitalcrafts.com/blog/student-blog-what-postman-and-why-use-it)
+ [Jullian Wallis - What Is VERCEL? Is It The Right Platform For Front-End Developers?](https://webo.digital/blog/what-is-vercel-is-it-the-right-platform-for-front-end-developers/)
+ [Whimsical - Used for the Req-Res Diagram](https://whimsical.com)
+ [I'm an inline-style link](https://www.google.com)
+ [I'm an inline-style link](https://www.google.com)
