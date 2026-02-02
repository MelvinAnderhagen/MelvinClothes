# :shopping: MelvinClothes

## LINKS

### - [Description](#open_book-description)

### - [Startup](#rocket-startup-project)

## - [Requirments met](#white_check_mark-requirments-met)

## - [Project Reflection](#brain-project-reflection)

### - [File structure](#file_folder-file-structure)

### - [Routing](#twisted_rightwards_arrows-routing)

### - [Components](#jigsaw-components)

### - [Props](#link-props)

### - [State Management](#zap-state-management)

### - [API](#globe_with_meridians-api)

## :open_book: Description

MelvinClothes is a ecommerce website where you can find products such as clothing and electronics.
It uses a simple design and creates sleek and minimalistic shopping for all consumers.

## :rocket: Startup project

- :white_check_mark: git clone https://github.com/MelvinAnderhagen/MelvinClothes.git / download via ZIP
- :white_check_mark: cd MelvinClothes
- :white_check_mark: **npm install**
- :white_check_mark: npm run dev
- :white_check_mark: http://localhost:5173

## :white_check_mark: Requirments met

- :white_check_mark: SPA + Routing (React Router)
- :white_check_mark: Komponentstruktur + Props
- :white_check_mark: State + Interaktivitet (useState)
- :white_check_mark: Data + API (useEffect + ex: fetch)
- :white_check_mark: README
- :white_check_mark: Struktur + motivering
- :white_check_mark: Extra förbättringar

## :brain: Project Reflection

### :file_folder: File structure

- Components/Base -> Stores base components that are shown on every page
- Component/Others -> Stores components that build my pages ex. product
- Hooks -> Stores hooks that fetches data async and returns useStates local state + loading and error from API
- Interfaces -> Stores models for data coming in from API
- Layouts -> Stores layouts that are used to display the website
- Pages -> Stores all pages that are used as routes
- Styles -> Stores all css files for styling in components
- App -> Defines all routes, imports css and uses a global variable

### :twisted_rightwards_arrows: Routing

- / -> Index page, displays home.tsx
- /Account -> Displays a detailed view for the user that is currently logged in
- /Contact -> Displays further information on the organisation
- /Login -> Displays login page for handling login via username and password
- /Products -> Displays all products from API, handles sorting via price and category
- /Product/:id -> Displays a specific product from API

### :jigsaw: Components

In my project I have made it a standard to use multiple components, some use cases are for more readable and cleaner code, others for reusable components (they are used in more than one occasion).

_EXAMPLE_

AllProducts component uses ProductCard as a component for cleaner and more readable code.

Product page uses ProductDetails and ProductWheel as components.
ProductDetails being used for more readable code and ProductWheel for reusable code ex. Home page also uses ProductWheel.

### :link: Props

I use props as a way to pass in useStates local and interactive state.

_EXAMPLE_

App.tsx has a username useState to handle the active user that is logged in, it's used to filter through the entire users list that I recieve from fakestoreAPI until I find the correct one so I can display the correct data on account page.

Another example where I use props is in Products.tsx, where I keep track on the state of which category and/or pricing filter is active so I can display the correct items in AllProducts component.

A third example where I use props is inside my useProductFetch hook, where I take in a productId through props and use it to fetch the specific product.

### :zap: State Management

I use states throughout my whole project, one of the more important states that I use are in my hooks folder. The idea behind breaking out my fetches into seperate hooks is for readability and reusablity. Almost all my components uses fetch which would make all my components bundled with the same code over and over again if I did not set it up in this manor.

_EXAMPLE_

useProductsFetch.tsx handles the API call and sets the state of products to the response from FakestoreAPI with the help of a useEffect. It is later returned togheter with loading and error.

Another example of this is in my productDetails where I create a useState to flip the active state of the favorite icon.

### :globe_with_meridians: API

API Docs - https://fakestoreapi.com/docs

FakestoreAPI uses a wide variety of different API endpoints. I have rarely encountered errors while using FakestoreAPI and it's an easy API to use if you're building a student project. FakestoreAPI also delivers documentation that is easy to read and gives you a lot of help when fetching and receiving data.

/product _EXAMPLE_

{
"id":1,
"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
"price":109.95,
"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
"category":"men's clothing",
"image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
"rating":{
"rate":3.9,
"count":120
}
}

/user _EXAMPLE_

{
"address":{
"geolocation":{
"lat":"-37.3159",
"long":"81.1496"
},
"city":"kilcoole",
"street":"new road",
"number":7682,
"zipcode":"12926-3874"
},
"id":1,
"email":"john@gmail.com",
"username":"johnd",
"password":"m38rmF$",
"name":{
"firstname":"john",
"lastname":"doe"
},
"phone":"1-570-236-7033",
"\_\_v":0
}
