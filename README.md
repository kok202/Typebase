## Todo web memo application
This project was developed with reference to the video below.  
[Link. 1](https://www.youtube.com/watch?v=WYnA1I31Sto&list=PLRB_0OYQAHMPu7EsP51ksMd489CrEfICT&index=2&t=0s)  
[Link. 2](https://www.youtube.com/watch?v=PFBRhxjIBUM&list=PLV6pYUAZ-ZoHx0OjUduzaFSZ4_cUqXLm0)  

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

### Activate decorator
- Edit tsconfig
  - Activate decorator configuration
  - "experimentalDecorators": false -> true
```
{
  "compilerOptions": {
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "experimentalDecorators": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react"
  },
  "include": [
    "src"
  ]
}
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
