<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">Let's Cookin!</h3>

  <p align="center">
    <a href="https://next-letscookin-apps.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/mikhaelkevin/next-letscookin-apps/issues">Report Bug</a>
    ·
    <a href="https://github.com/mikhaelkevin/next-letscookin-apps/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

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
      </ul>
    </li>
    <li><a href="#screenshoots">Screenshots</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#related-project">Related Project</a></li>
    <li><a href="#our-team">Contact</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

**Let's Cookin** is a food lover website that help the user to find their recipe. Also, they can contribute as creator to share their own recipe for people who wants try it.
Beside of only to find what they want, this application also give the user newest information about the popular food or the newest food added. So, we hope it will help the user to grow.

### Built With

This app was built with some technologies below:

- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Javascript](https://www.javascript.com/)
- [React](https://reactjs.org/)
- [NextJS](https://nextjs.org/docs/getting-started)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

Before going to the installation stage there are some software that must be installed first.

- [NodeJs](https://nodejs.org/en/download/)

<p align="right">(<a href="#top">back to top</a>)</p>

### Installation

If you want to run this project locally, I recommend you to configure the [back-end](https://github.com/mikhaelkevin/lets-cookin-backend) first before configuring this repo front-end.

- Clone the repo

```
git clone https://github.com/mikhaelkevin/next-letscookin-apps.git
```

- Go To Folder Repo

```
cd next-letscookin-apps
```

- Install Module

```
npm install
```

- <a href="#setup-env">Setup .env</a>
- Type ` npm run dev` To Start Website
- Type ` npm run start` To Start Production

<p align="right">(<a href="#top">back to top</a>)</p>

<p align="right">(<a href="#top">back to top</a>)</p>

### Setup .env example

Rename file called .env.example to .env and change example value to your own configs.

```
API_URL=example
LOCAL_URL=example
SECRET_KEY=example

```

<p align="right">(<a href="#top">back to top</a>)</p>

## Screenshots

<p align="center" display=flex>
   
<table>
<tr align="center">
    <td style='font-weight: 600'>Login Page</td>
    <td style='font-weight: 600'>Register Page</td>
  </tr>
  <tr align="center">
    <td><image src="https://res.cloudinary.com/nocturncloud/image/upload/v1662712276/temp-next-lets-cookin/login_ykkrde.png" alt="login" width=50%></td>
    <td><image src="https://res.cloudinary.com/nocturncloud/image/upload/v1662712276/temp-next-lets-cookin/register_fqrq9c.png" alt ="register" width=50%/></td>
  </tr>
   <tr align="center">
    <td style='font-weight: 600'>Landing Page</td>
    <td style='font-weight: 600'>Detail Recipe</td>
  </tr>
  <tr align="center">
    <td><image src="https://res.cloudinary.com/nocturncloud/image/upload/v1662713163/temp-next-lets-cookin/login_olx0mv.png" alt="landing-page" width=50%></td>
    <td><image src="https://res.cloudinary.com/nocturncloud/image/upload/v1662712277/temp-next-lets-cookin/detail_kd4i0c.png" alt="detail-recipe" width=50%/></td>
  </tr>
  <tr align="center">
    <td style='font-weight: 600'>New Recipe</td>
    <td style='font-weight: 600'>Edit Recipe</td>
  </tr>
  <tr align="center">
    <td><image src="https://res.cloudinary.com/nocturncloud/image/upload/v1662712813/temp-next-lets-cookin/add-recipe_hxovjn.png" alt="new-recipe" width=50%></td>
    <td><image src="https://res.cloudinary.com/nocturncloud/image/upload/v1662712815/temp-next-lets-cookin/edit_recipe_j9n5vf.png" alt="edit-recipe" width=50%/></td>
  </tr>
  <tr align="center">
    <td style='font-weight: 600'>Delete Recipe</td>
    <td style='font-weight: 600'>My Recipe</td>
  </tr>
  <tr align="center">
    <td><image src="https://res.cloudinary.com/nocturncloud/image/upload/v1662712814/temp-next-lets-cookin/delete-recipe_ylkq2h.png" alt="delete-recipe" width=50%></td>
    <td><image src="https://res.cloudinary.com/nocturncloud/image/upload/v1662712813/temp-next-lets-cookin/my-recipe_atiahq.png" alt="my-recipe" width=50%/></td>
  </tr>
  <tr align="center">
    <td style='font-weight: 600'>Profile</td>
    <td style='font-weight: 600'>Edit Profile</td>
  </tr>
  <tr align="center">
    <td><image src="https://res.cloudinary.com/nocturncloud/image/upload/v1662713264/temp-next-lets-cookin/profile_autweg.png" alt="profile" width=50%></td>
    <td><image src="https://res.cloudinary.com/nocturncloud/image/upload/v1662713357/temp-next-lets-cookin/mobile_j9ymag.png" alt="edit-profile" width=50%></td>
  </tr>
</table>
      
</p>
<p align="right">(<a href="#top">back to top</a>)</p>

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b someFeature-features`)
3. Commit your Changes (`git commit -m 'add(someFeature): what kind of feature'`)
4. Push to the Branch (`git push origin someFeature-features`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

## Related Project

<center>
<table> 
    <tr>
    <th>Backend</th>
    <th>Frontend</th>
    <th>Web Service</th>
    <th>Demo</th>
    </tr>
    <tr>
    <td>
    <a href="https://github.com/mikhaelkevin/lets-cookin-backend/tree/hotfix-update"> 
    <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="be-github"/>
    </a>
    </td>
    <td> 
    <a href="https://github.com/mikhaelkevin/next-letscookin-apps"> 
    <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="fe-github">
    <a/>
    </td>
    <td> 
    <a href="https://letscookin-app.herokuapp.com/"> 
    <img src="https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white" alt="web-services">
    <a/>
    </td>
    <td> 
    <a href="https://next-letscookin-apps.vercel.app/"> 
    <img src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white" alt="demo">
    <a/>
    </td>
    </tr>
</table>
</center>

<p align="right">(<a href="#top">back to top</a>)</p>

## License

Distributed under the [MIT](/LICENSE) License.

<p align="right">(<a href="#top">back to top</a>)</p>
