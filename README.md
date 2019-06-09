# VR-FrontendTest-v1.1
## Vet Radar, Hi 👋

You can use Yarn to run this project, it came default with create-react-app and trying to use NPM causes some hoisting issues with the modules.

It also is expecting node version 10.9.0, if you use NVM there is an .nvmrc file in the root that should have been picked up.

Instructions below, 
```js
yarn

yarn start
```

And it should be available on `localhost:3000`

### TODO: 

- Initial store load, i'm not entirely sure about where i've done the inital load of products, really trying to look for a way to have initial thunks fired without using react life cycles, ideally after store creation I think.

- Type definitions, figure out if there is a better place to put my model type definitions. Store will do for now as it's currently seperated by domain.

- write more tests

- bust the cart cache if there are any products in it that aren't sold anymore

- lazy loading using react loadable if there were more routes

- implement a global error handler or a fragment

- import a style lib so it looks alot better / invest in ux at all

- finish microservice branch for a more interesting demo https://github.com/janyk/hardware-store/tree/feature/add-microservice

- Lint!
