# Prueba front-end INDITEX

This is test project for the reactjs application for Inditex.

## Implementation notes

As style information was not given (styles, foint sizes, colors, etc) I made an aproximation looking as much as possible as the mockup, but is far from to be pixel perfect. It whould be different if I had a Figma for example.

On the dev environment F5 (refresh page) does not work in other paths than /. This is because there is no redirection for all paths to the index file and the router does not use the hash (requirement).

I did not use any CSS template, but it would be great to use bootstrap for example.

Note: I implemented the required indicator as information is loading (not the view or component) using the react-promise-tracker package.

## Initialization

run `npm i`

## Run the application

### Development mode

run `npm start`

### Production mode

run `npm run serve`

## Build the application

run `npm run build`

## Test the application

run `npm run test`
