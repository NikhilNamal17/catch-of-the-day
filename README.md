# catch-of-the-day 
A single page react app for fresh seafood market.

Try the demo[https://catch-of-the-day-nikhil.netlify.com/]
<hr>

This is a react based single page web app for online sale of fresh caught seafood. 


![capture](https://user-images.githubusercontent.com/30730696/51416201-78fadd00-1b9e-11e9-8d04-bbc0ca428d76.JPG)

<br>

![capture1](https://user-images.githubusercontent.com/30730696/51416236-a051aa00-1b9e-11e9-9912-a088a361d282.JPG)


###
The App has four main sections which include store selector, display of available fishes, order component and inventory component.
The Routes are handled by react-router. 
I've used a random store generator located in helper.js for getting a store name, however you can type your own store name.
The store-picker then redirects to specific store.
I have loaded some sample fish data in firebase which is displayed in the app.
A user can add any available order to the order-list. 
The inventory can be handled and manipulated by the sole owner. The owner is the very first user who signup for a specific store.
I've used Firebase as the database handler and Oauth sign-up.
COTD does not include any payment gateways, and is not built for production, this project was built while learning React and its fundamentals.

###


## To develop
clone the repo and npm install

## To Build
npm run build

