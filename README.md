# Udagram: Your Own Instagram image filter on AWS

> This app demonstrates image filtering similar to Instagram on AWS.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/200px-Node.js_logo.svg.png)
![](aws-ebs.png)

![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)

## Udagram Image Filter App

![](originalimage.jpg)![](filteredimage.jpg)

## Installation

### Setup

Clone the source locally:

```sh
$ git clone https://github.com/ashu-eureka/Udagram-ImageFilter.git
$ cd udagram-image-filter
```

If you're on Debian or Ubuntu, you'll also need to install
`nodejs-legacy`:

Use your package manager to install `npm`.

```sh
$ sudo apt-get install npm nodejs-legacy
```

Install project dependencies:

```sh
$ npm install
```

Start the development server:

```sh
$ npm run dev
```

### Deploying the system

* Create a new application on Elastic Beanstalk: `eb init`
* Create a new environment on Elastic Beanstalk: `eb create`
* Deploy to Elastic Beanstalk: `eb deploy`

## Built With

- [AWS Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/) - AWS deployment and scaling service used
- [Node.js®](https://nodejs.org/) - The JavaScript runtime used
- [Express.js®](https://nodejs.org/) - The web application framework used

## Critical Hints

- https://stackoverflow.com/questions/66611327/error-could-not-find-mime-for-buffer-null-while-using-jimp-to-save-the-buffer
- https://github.com/oliver-moran/jimp/issues/775

## Authors

* **[Ashish Dassani](https://github.com/ashu-eureka)** - *Initial work* - [Udagram Image Filter App](https://github.com/ashu-eureka/Udagram-ImageFilter)

## License

[![License](http://img.shields.io/:license-mit-green.svg?style=flat-square)](http://badges.mit-license.org)

- This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
- Copyright 2020 © [Pemberai Sweto](https://github.com/thepembeweb).

