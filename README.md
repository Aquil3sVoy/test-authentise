[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- TABLE OF CONTENTS -->
<details>
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
        <li><a href="#test">Test</a></li>
      </ul>
    </li> 
    <li><a href="#contact">Contact</a></li> 
  </ol>
</details>

<!-- GETTING STARTED -->

## Getting Started

To run locally need to install some package, set env and run as localhost.

### Prerequisites

Install NodeJs at [https://nodejs.org/es/download/](https://nodejs.org/es/download/)

### Installation

_Follow these steps to run locally._

1. Clone the repo
   ```sh
   git clone https://github.com/Aquil3sVoy/test-authentise.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
   or use yarn
3. Enter your API in `config/localhost.tsx`
   ```js
   const backendUrl = "ENTER YOUR API";
   ```
4. Run locally use this command:
   ```sh
   npm run start:ui
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Test

To run unit test and get the coverage use these commands:

1. Jest
   ```sh
   npm run test:ui
   ```
2. Coverage
   ```sh
   npm run test:coverage
   ```

## Contact

Ocar Corona - [@oscarabcorona](https://www.instagram.com/oscarabcorona/) - oabc4004@gmail.com

Project Link: [https://github.com/Aquil3sVoy/test-authentise.git](https://github.com/Aquil3sVoy/test-authentise.git)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/oscarabcorona/
