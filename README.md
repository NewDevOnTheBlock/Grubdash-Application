<br/>
<p align="center">
  <a href="https://github.com/NewDevOnTheBlock/https://github.com/NewDevOnTheBlock/WeLoveMovies-Application">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">GrubDash</h3>

  <p align="center">
    For when you gotta dash, but you need your grub!
    <br/>
    <br/>
    <a href="https://github.com/NewDevOnTheBlock/https://github.com/NewDevOnTheBlock/WeLoveMovies-Application"><strong>Explore the docs »</strong></a>
    <br/>
    <br/>
    <a href="https://github.com/NewDevOnTheBlock/https://github.com/NewDevOnTheBlock/WeLoveMovies-Application">View Demo</a>
    .
    <a href="https://github.com/NewDevOnTheBlock/https://github.com/NewDevOnTheBlock/WeLoveMovies-Application/issues">Report Bug</a>
    .
    <a href="https://github.com/NewDevOnTheBlock/https://github.com/NewDevOnTheBlock/WeLoveMovies-Application/issues">Request Feature</a>
  </p>
</p>

![Downloads](https://img.shields.io/github/downloads/NewDevOnTheBlock/https://github.com/NewDevOnTheBlock/WeLoveMovies-Application/total) ![Contributors](https://img.shields.io/github/contributors/NewDevOnTheBlock/https://github.com/NewDevOnTheBlock/WeLoveMovies-Application?color=dark-green) ![Issues](https://img.shields.io/github/issues/NewDevOnTheBlock/https://github.com/NewDevOnTheBlock/WeLoveMovies-Application) ![License](https://img.shields.io/github/license/NewDevOnTheBlock/https://github.com/NewDevOnTheBlock/WeLoveMovies-Application) 

## Table Of Contents

* [About the Project](#about-the-project)
* [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Authors](#authors)
* [Acknowledgements](#acknowledgements)

## About The Project

![Screen Shot](ttps://we-love-movies-frontend-qip9.onrender.com)

This is a full-stack application that allows a user to place an order, edit that order, and cancel an order if it meets certain requirements. It also allows the order status to be updated by a delivery person. Another feature is that an order cannot be cancelled or changed unless it has a certain status, an example being you cannot add or delete an order after it has been out for deliver or if it is currently being prepped. Also there is a minimum price that must be paid in order to place an order. 

A user can:
- Place an order
- Update an order if it is not prepped or out for delivery
- Updating can include: Adding to the order, deleting from the order, or deleting the order in its entirety
- Allows creation of a dish
- Allows deletion of a dish
- Allows editing of a dish

This application was made using a relational database and a RESTful API that utilized Express.js for API development and Knex.js for DB querying on API endpoint access. The database was developed using a relational database (PostgreSQL). It mainly allows you to list and read information from the db.

## Built With

Front-End Technologies Used:
- HTML/CSS/JavaScript
- React.js
- React-Router-Dom
- Bootstrap (style)

Back-End Technologies Used:
- PostgreSQL (Relational Database)
- Express.js (RESTful API development)
- Knex.js (database querying)
- Cors
- dotenv
- path
- lodash
- nodemon (server used for development)

## Getting Started

To get started locally, you can fork the repo or download the .zip (be sure to extract it!) as normal, then after you use the command line to cd your way into the directory. After doing so, a simple "npm i" is more than enough to get the project up and running. 

To run the front-end, just enter "npm run start:react"
to run the back-end, just use "npm run start:dev"

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

* npm

```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo

```sh
git clone https://github.com/your_username_/Project-Name.git
```

2. Install NPM packages

```sh
npm install
```

## Usage

The purpose of this app was to create an app that was similar to GrubHub or DoorDash for food order placement and delivery. It's intended purpose was to create a RESTful API that connects to database, allows CRUD operations, and had a middleware pipeline that filtered out data which didn't meet requirements of the specific CRUD operation. It also was a great way to practice my skills in database creation, queries, and creating requirements for form data that had to be checked off before submitting a CRUD operation.

## Roadmap

See the [open issues](https://github.com/NewDevOnTheBlock/https://github.com/NewDevOnTheBlock/WeLoveMovies-Application/issues) for a list of proposed features (and known issues).

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.
* If you have suggestions for adding or removing projects, feel free to [open an issue](https://github.com/NewDevOnTheBlock/https://github.com/NewDevOnTheBlock/WeLoveMovies-Application/issues/new) to discuss it, or directly create a pull request after you edit the *README.md* file with necessary changes.
* Please make sure you check your spelling and grammar.
* Create individual PR for each suggestion.
* Please also read through the [Code Of Conduct](https://github.com/NewDevOnTheBlock/https://github.com/NewDevOnTheBlock/WeLoveMovies-Application/blob/main/CODE_OF_CONDUCT.md) before posting your first idea as well.

### Creating A Pull Request

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See [LICENSE](https://github.com/NewDevOnTheBlock/https://github.com/NewDevOnTheBlock/WeLoveMovies-Application/blob/main/LICENSE.md) for more information.

## Authors

* **Pierce DeAnda** - *Full-Stack Engineer* - [Pierce DeAnda](https://github.com/NewDevOnTheBlock/) - *Primary Contributor and Programmer*

## Acknowledgements

* [Pierce DeAnda](https://github.com/NewDevOnTheBlock/)
* [Express Docs](https://expressjs.com/)
* [PostgreSQL docs](https://www.postgresql.org/)
* [React Docs](https://legacy.reactjs.org/docs/getting-started.html)
