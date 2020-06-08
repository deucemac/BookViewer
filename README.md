# BookViewer
Access and review books from around the web

- [Project Planning](#project-planning)
  - [Overview](#overview)
  - [Wireframes](#wireframes)
  - [MVP](#mvp)
    - [Libraries](#libraries)
    - [Data](#data)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Component Estimates](#component-estimates)

- [Project Delivery](#project-delivery)
  - [Code Showcase](#code-showcase)
  - [Code Issues & Resolutions](#code-issues--resolutions)

## Project Planning



<br>

### Overview

**Project Title** 

**Project Description** For those with diverse interest in literature, BookViewer is a web application that lets the user search through a wide arrange of literature from across the internet.  The user selects different books and can discover more information regarding the book summary, book details, and the book author._

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
> Provide the user with option to select and find more information about the book subject, summary, genre, and a viewer to read the first few chapters.
> Provide user with the option to search for additional books/authors/titles

**Book Viewer** 



#### Libraries

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|   React Router   | _Move and navigate around an application_  |
|        Axios     | _Use the api data_  |

<br>

#### Data

|    API     | Quality Docs? | Website       | Sample Query                            |
| :--------: | :-----------: | :------------ | :-------------------------------------- |
| Books API |      yes      | _https://developers.google.com/books/docs/v1/getting_started | _https://language.googleapis.com/v1/documents:analyzeEntities?key=API_KEY_ |

```
 async componentDidMount() {
    const key = 'AIzaSyBK7wCWGpeeKHMxJA-2Y_OEigeDTqfpL-o'
    const books = await axios(`https://www.googleapis.com/books/v1/volumes?q=patick+rothfuss&key%3D=${key}`)
    console.log(books)
  }
```

<br>

#### Component Hierarchy

```
src
|__ assets/
      |__ images
|__ components/
      |__ Header.jsx
      |__ PublisherCollection.jsx
      |__ BookDetails.jsx
      |__ Input.jsx
      |__ App.jsx
      |__ Footer.jsx
```

<br>

#### Component Breakdown

|  Component   |    Type    | State | Props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|         Header       | functional |   n   |   n   | _The header will contain a phrase that serves as a home button._              |   
| Publisher Collection | functional |   n   |   y   | _The Publisher Collection will display the developer's favorite choice of books._             |
|     Book Details     | functional |   n   |   y   | _The Book Details reveals additional info including a viewer to read the book._           |
|        Footer        | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |


<br>

#### Component Estimates

> 
>
> 

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
|       Header        |    L     |     2 hrs      |     2 hrs     |    3 hrs    |
|       Input         |    H     |     6 hrs      |     3 hrs     |     1 hr    |
|    Book Details     |    H     |     2 hrs      |     3 hrs     |     6 hrs   |
| PublisherCollection |    H     |     3 hrs      |     3 hrs     |     4 hrs   |
|       Footer        |    L     |     2 hrs      |     1 hrs     |     1 hr    |
|        TOTAL        |    H     |     6 hrs      |     3 hrs     |     15 hrs  |

<br>



<br>

***

## Project Delivery

### Code Showcase

> 

```
let searchedResults = this.state.searchedBooks && <div className='parent-publisher'> {this.state.searchedBooks.map((book, index) => {
    return (
          <div className='publisher'>
        <Link to={`/book/${book.id}`}>
            <h2 onClick={this.showDetail}>{book.volumeInfo.title}</h2>
        {book.volumeInfo.imageLinks ?
          <img src={book.volumeInfo.imageLinks.thumbnail} /> : <h3>Waiting</h3>
            }
        </Link>
          </div>)  
      
    })}</div>
```

### Code Issues & Resolutions

> Ran into difficulty regarding using the embedded book viewer from the Google API into react.  
> The viewer problem was resolved through adding on "&output=embed" at the end of the api endpoint for previewlink
