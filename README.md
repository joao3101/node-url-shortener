<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This project creates a local URL shortener with some modifications on the project at [this](https://medium.com/javascript-in-plain-english/how-to-create-url-shortener-in-node-js-568027027b91) Medium article. I've done some modification on how to generate the shortened link so that it fulfills most of needs.


### Built With

* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* Node LTS Version
* MongoDB LTS Version

### Installation

1. Clone the repo
  ```sh
   git clone https://github.com/joao3101/node-url-shortener
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. If needed, change the MONGO_URI at the .env file

<!-- USAGE EXAMPLES -->
## Usage

Go to the main folder and use:
   ```sh
   node index.js
   ```
To start the application. 

Then, for creating a new shortened link, use the following cUrl request:
`curl --request POST \
  --url http://localhost:3000/ \
  --header 'content-type: application/json' \
  --data '{
	"url": "https://www.google.com"
}'`

The response will echo your URL and inform you the newly created `shortId`.

To check if it worked, just go to your preferred browser and enter `localhost:3000/:shortId` where shortId is what you received on your POST response.


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

João Victor de Carvalho Silva - [LinkedIn](https://www.linkedin.com/in/joao-victor-de-carvalho-silva/)

Project Link: [https://github.com/joao3101/node-url-shortener](https://github.com/joao3101/node-url-shortener)
