### ***XÂY DỰNG DỰ ÁN TIKTOK SỬ DỤNG REACTJS***
<div style = "display : flex; align-items: center">
<img src = "https://img.youtube.com/vi/VCgk2y-LUJY/mqdefault.jpg"/>


</div>


### Package Hỗ trợ 
>1. Create React App Webpack || Vite Flash [here](https://reactjs.org/)
>2. Prettier Formatter Code Beautiful [here](https://prettier.io/)
>3. Node SASS/SCSS [here](https://sass-lang.com/)
>4. Reset CSS Normalize [here](https://necolas.github.io/normalize.css/)
>5. React Router DOM [here](https://reactrouter.com/docs/en/v6/getting-started/overview)
>5. Classnames [here](https://github.com/JedWatson/classnames)
>6. Fontawesome [here](https://fontawesome.com/)
>7. Babel [here](https://babeljs.io/)
>8. Tippyjs React [here](https://github.com/atomiks/tippyjs-react)
>9. Debounce [here](https://github.com/jgarber623/javascript-debounce)
>10. Axios [here](https://github.com/axios/axios)


### Remove React.FC from Typescript template
[Create React App](https://github.com/facebook/create-react-app/pull/8177) Downsides to React.FC/React.FunctionComponent
### Installation
```bash
$ npm install
$ npm run dev
$ npm run build
```
**Using Make**
```bash
$ make dev
$ make build
```
### Debugger
```js
setTimeout(()=> {
    debugger
},3000)
```
### Structure Tree
```
root
.
└── src
     ├── assets
     ├── components
     |      ├── AccountItem
     │      │        ├── AccountItem.module.scss
     │      │        └── AccountItem.tsx
     │      │ 
     │      ├── Button
     │      │        ├── Button.module.scss
     │      │        └── Button.tsx
     │      │ 
     │      ├── GlobalStyles
     │      │        ├── GlobalStyles.scss
     │      │        └── GlobalStyles.tsx
     │      │ 
     │      ├── Icons
     │      │        └── Icon.tsx
     │      │ 
     │      ├── Image
     │      │        ├── Image.module.scss
     │      │        └── Image.tsx
     │      │ 
     │      ├── Popper
     │            ├──Menu
     │            │      ├── Header.tsx
     │            │      ├── Menu.module.scss
     │            │      ├── Menu.tsx
     │            │      └── MenuItem.tsx
     │            ├── Popper.module.scss
     │            └── Wrapper.tsx
     │
     │
     ├── config
     │      └── routes.ts
     ├── data
     │      └── language.ts
     ├── hooks
     │      └── useDebounce.ts  
     ├── layouts
     │      ├── components
     │      │        ├── Header
     │      │        │       ├── Header.module.scss
     │      │        │       └── Header.tsx
     │      │        ├── Search
     │      │        │       ├── Search.module.scss
     │      │        │       └── Search.tsx
     │      │        └── Sidebar
     │      │                ├── Menu
     │      │                │      ├── Menu.module.scss
     │      │                │      └── Menu.tsx
     │      │                ├── Sidebar.module.scss 
     │      │                └── Sidebar.tsx
     │      │
     │      ├── DefaultLayout
     │      │           ├── DefaultLayout.module.scss
     │      │           └── DefaultLayout.tsx
     │      │
     │      └── HeaderOnly
     │                  └── HeaderOnly.tsx
     │
     ├── pages
     │       ├── Following
     │       │       └── Following.tsx
     │       ├── Home
     │       │       └── Home.tsx
     │       ├── Live
     │       │       └── Live.tsx
     │       ├── Profile
     │       │       └── Profile.tsx
     │       ├── Search
     │       │       └── Search.tsx
     │       └── Upload
     │               └── Upload.tsx
     ├── routes
     │       └── routes.ts
     ├── services
     │       └── searchService.ts
     ├── types
     ├── utils
     │       └── httpRequest.ts
     ├── App.tsx
     ├── favicon.io
     ├── main.tsx
     └── vite-en.d.ts

      │   ├──  └──
```
### Git 
```
$ npx git-cz --allow-empty
```
### Docker
```
$ docker run -d -p 3000:3000 vite
```
