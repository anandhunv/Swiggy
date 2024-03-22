# Food Ordering App

-Header
  -logo
  -nav items
- Body
    -Search
    -Restaurent Card
        -image
        -Restrauent name,-star rating,food  items,time of delivery

        
-footer
    -copyright
    -Links
    -Address
    -Contact



    Two Types of EXport/Import

    -Default Export/Import

    export default Component;
    import Component from path;

    -named Export/Import

    export const component;
    import {Component} from "path";


## React Hooks

They are normal Javascript function(normal js utility function)

written by facebook developers

2 important reacr hooks
-useState()-superpowerful state variables in react
-useEffect()


## Redux Toolkits

-Install @reduxjs/toolkit and react-redux (These are tw  o libraries we install)
 --npm install @reduxjs/toolkit
 --npm i react-redux
-Connect our store to our app 
-create slice (cart slice) to add items to cart
- dispatch(action)
-selector