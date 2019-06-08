# VR-FrontendTest-v1.1
## Vet Radar, Hi 👋

You can use Yarn to run this project, it came default with create-react-app and trying to use NPM causes some hoisting issues with the modules.

Instructions below, 
```js
yarn

yarn start
```

And it should be available on `localhost:3000`

### TODO: 

- Initial store load, i'm not entirely sure about where i've done the inital load of products, really trying to look for a way to have initial thunks fired without using react life cycles, ideally on store creation I think.

- Type definitions, figure out if there is a better place to put my model type definitions. Store will do for now as it's currently seperated by domain.

- write tests

- implement a global error handler

- import a style library so it looks alot better

- Lint!
