Main
The project is completely written in the Next.js framework using the Redax saga libraries, etc. using SSR.

Visual Part
Main page - here is a list of new films. It is also possible to search film by
By name
By genre
By language
By 18+ (Adult)
By release date

Movie's Card
Also, when you hover over the eye, more detailed information about the film appears.
It is possible to click on a genre and a list of films of the selected genre will be displayed.
Clicking on the movie title opens the movie page.
![mainPage](https://github.com/shakompk1/themoviedb/blob/main/assets/mainPage.png)
 

Movie's Page
More detailed information about the movie and a list of similar movies displayed here.
It is possible to see the list of actors and the director's team.
 

Structure
 
Main Files
i18n.ts - In order to keep all the text in one place, a library was used in i18n.
package.json - All information about the project is stored here 
tsconfig.json - The project uses TypeScript to add strong typing 
pages - Roaming is stored here and each file is a new page except _app.ts and _document.ts
src - You can find the body of the entire project in this folder
 
api.js - used to store the main links to the used servers
color - used to store colors
url - list of links used for requests in the project
locales - text storage available in russian and english languages
reqular - to use regular expressions 
fetch - Requests three functions for GET, POST, DELETE using axios
helper - auxiliary function storage folder
typescript - storage of data types involved in the project

store - used to send data to store and change it
in the picture example movies all requests for information and changes related to the movie are stored in the movie folder
action.ts - для отправки данных в хранилище  или вызова запроса
movieReducer - storage
saga.ts - for creating queries and storing the result in storage
selectors.ts - to pass data from the store to the component
 
components - the entire visual part of the site is stored here, fragmented into small parts for reuse
On this picture is an example of a movie, where all requests for information and changes related to the movie are stored in the movie folder.
 
Component structure example
index.ts - used to include the required data
List.tsx - used for visuals and functionality
styled.ts - used for styling
type.ts - used to indicate which data types are being used
