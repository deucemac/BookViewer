# BookViewer
Access and review books from around the web

- [Project Planning](#project-planning)
  - [Overview](#overview)
  - [Wireframes](#wireframes)
  - [MVP](#mvp)
    - [Goals](#goals)
    - [Libraries](#libraries)
    - [Data](#data)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Component Estimates](#component-estimates)
    - [Helper Functions](#helper-functions)
  - [Post-MVP](#post-mvp)
- [Project Delivery](#project-delivery)
  - [Code Showcase](#code-showcase)
  - [Code Issues & Resolutions](#code-issues--resolutions)

## Project Planning



<br>

### Overview

**Project Title** 

**Project Description** For those fans of the Fantasy/Adventure genre, BookViewer is a web application that lets the user search through a diverse list of Fantasy/Sci-fi novels.  The user select different books and find out more information regarding the book summary, book review, and how to buy the book._

<br>

### Wireframes

> Wireframes .

https://xd.adobe.com/view/6346f60c-d628-4fcc-7551-ff5a2c895dd2-1577/ (url)

- Desktop

https://xd.adobe.com/view/c951a78e-a206-453e-795c-90b4cdb6573e-bf60/ (url)

- Tablet

https://xd.adobe.com/view/112a6142-0245-4b37-6507-f7bba5807942-671b/ (url)

- iPhone

https://xd.adobe.com/view/5549ab60-97cd-4176-5eb5-117ce91bda4e-2378/ (url)

- Details Page

<br>

### MVP

> Display set of books on the homepage
> Provide the user with option to select and find more information about the book subject, summary, genre, how to purchase
> Provide the user with the option to leave a review for the book
> Provide user with the option to search for additional books/authors/titles

_The **Book Viewer** MVP lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus fermentum risus vitae bibendum. Integer vel ipsum mollis odio sollicitudin ornare eu vel ex. In quis fringilla velit, ac maximus quam. Etiam eget placerat neque. Aenean faucibus sem non nisi lobortis ullamcorper._

<br>

#### Goals

- _Lorem ipsum, dolor sit amet,_
- _consectetur adipiscing elit._
- _Phasellus dapibus fermentum risus vitae bibendum._
- _Integer vel ipsum mollis odio sollicitudin ornare eu vel ex._
- _etc._

<br>

#### Libraries

> Use this section to list all supporting libraries and their role in the project.

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|   React Router   | _Move and navigate around an application_ |

<br>

#### Data

> Use the Data Section to define the API(s) you will be consuming for your project, inluding sample URL queries.

|    API     | Quality Docs? | Website       | Sample Query                            |
| :--------: | :-----------: | :------------ | :-------------------------------------- |
| Books API |      yes      | _https://developers.google.com/books/docs/v1/getting+started | _https://language.googleapis.com/v1/documents:analyzeEntities?key=API-KEY_ |

```
 async componentDidMount() {
    const key = 'AIzaSyBK7wCWGpeeKHMxJA-2Y_OEigeDTqfpL-o'
    const books = await axios(`https://www.googleapis.com/books/v1/volumes?q=patick+rothfuss&key%3D=${key}`)
    console.log(books)
  }
```

<br>

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app.

```
src
|__ assets/
      |__ data-tests
      |__ images
|__ components/
      |__ Header.jsx
      |__ Search.jsx
      |__ Review.jsx
      |__ Book.jsx
      |__ Books.jsx
      |__ App.jsx
      |__ Footer.jsx
```

<br>

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | State | Props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the logo and home button._              |
|  Search      |    class   |   y   |   n   | _The search will let the user find additional info._             |
|   Review     |   class    |   y   |   n   | _The review will let the user write a review._                   |
|   Book       | functional |   n   |   y   | _The book will display detail of the selected book._             |
|   Books      | functional |   n   |   y   | _The Books will be the homepage that displays a list._           |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |


<br>

#### Component Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above. 
>
> Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evalute possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

<br>

#### Helper Functions

> Use this section to document all helper functions, i.e. generic functions that can be reused in other applications.

|  Function  | Description                                |
| :--------: | :----------------------------------------- |
| Search | _This is an important function to recycle to reuse for user search capabilities._ |

<br>

### Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

- _Add user account and auth capabilities._
- _Utilize the Giphy API to welcome new users with funny gifs._

<br>

***

## Project Delivery

### Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

```
code snippet here
```

### Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.
