# Social-Codes

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Description

The goal for this challenge is to use MongoDB and take advantage of its speed for large amounts of data and flexibility with unstructured data. I will be building an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. This will be possible with the use of Express.js for routing, a MongoDB database, and the Mongoose ODM. A walkthrough video that demonstrates its functionality will be available because this application will not be deployed. 

Functionality should be as follows:

When I enter the command to invoke the application my server is started and the Mongoose models are synced to the MongoDB database. When I open API GET routes in Insomnia for users and thoughts the data for each of these routes is displayed in a formatted JSON. When I test API POST, PUT, and DELETE routes in Insomnia I am able to successfully create, update, and delete users and thoughts in my database. When I test API POST and DELETE routes in Insomnia I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list.


## Table of Contents

- [Technology Used](#technology-used)
- [Walkthrough](#walkthrough)
- [Links](#links)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)


## Technology Use

- [Node.js](https://nodejs.org/en/)
- [Insomnia](https://docs.insomnia.rest/)
- [Express](https://www.npmjs.com/package/express)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Mongoose](https://www.npmjs.com/package/mongoose)
- [MongoDB](https://www.mongodb.com/docs/drivers/node/current/)

## Walkthrough


## Links

- [GitHub Repository](https://github.com/dlzinck/Social-Codes)

## Installation

This repo is not to be deployed, if you wanted to, you could by doing the following:  
1. Download the repo files from the link below
2. You must have mongoDB installed
3. Run the following at the command line
```
npm init -y
npm install express
npm install mongoose
npm install moment
```


## Usage

Start the server
```
 $ npm start
```


## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit).

Copyright (c) 2022 Drew Zinck II

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.