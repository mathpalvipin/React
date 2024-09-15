## install  parcel 
```npm install -D parcel 
```
### if you got some error "Error: Cannot find module '@parcel/rust-win32-x64-msvc'" 

```
npm install -D parcel-bundler
```

## Cmd to ignite parcel 
```
npx parcel index.html
```

remove CDN from index.html 
## install React and REactDom
``` 
npm install react react-dom
```

##parcel 
- build
- local server
- HMP - hot module replacement
- file watching algorithm - written in C++
- faster builds - caching 
- image optimization
- minification
- bundling 
- compressing
- consistent hashing
- Code splitting 
- differential bundling  - support old browsers 
- Diagnostic
- HTTPS server if required
- Tree shaking  - remove unused code
- different dev and prod build
- refresh server on change 
- Transpile the code (with the help of babel) - convert JSX to javascript to understand  by JS engine


## production build
```
npm parcel build index.html
```