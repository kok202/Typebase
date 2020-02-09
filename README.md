### Start with Typescript + React + Firebase + Mobx

```
create-react-app todo-typescript --template typescript
cd todo-typescript
npm add mobx
npm add mobx-react
npm add @material-ui/core
npm add @material-ui/icons
npm add react-router-dom
npm add @types/react-router
npm add firbase
npm start
```

### Build and deploy using by firebase hosing

```
npm run build
npm install -g firebase-tools
firebase login
firebase init
// Set deploy folder as build not public
// firebase deploy --only hosting
```
