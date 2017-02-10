# testonic


## Ionic 2 / Angular 2 app for ordering tacos.

### Clone (or download) the project

Clone: `git clone https://github.com/cmasekar/testonic.git`

Download: https://github.com/cmasekar/testonic/archive/master.zip

### Install node.js and npm

This may have already been downloaded from another project, but if you don't have it, it can be found [here](https://nodejs.org).
Node can be checked by `node -v` and npm can be checked by `npm -v`.

### Make sure to install the latest version of Ionic and Cordova using npm

`npm install -g cordova ionic`

### Install all of the project packages

```
cd testonic
npm install
```

This step should take a little while. It uses the [package.json](package.json) file to get all of the necessary packages and installs each one in the project directory.

### Install plugins

`ionic state restore --plugins`

### Run the app

`ionic serve`
