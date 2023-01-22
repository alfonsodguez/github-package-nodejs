# nodejs-github-package
Example of npm package using GitHub packages registry


## Basic usage
* Install package in your project
  ```
  npm install @alfonsodguez/nodejs-github-package@1.0.2
  ```
* create .npmrc file in the root of project and add the next configuration: 
  ```
  @alfonsodguez:registry=https://npm.pkg.github.com
  //npm.pkg.github.com/:_authToken=GITHUB_TOKEN
  ```


## Maintenance
Follow the steps below (you need to be registered into npm) to publish and update the package:
* Login authentication
  ```
  $ npm login --scope=@OWNER --registry=https://npm.pkg.github.com

  > Username: USERNAME
  > Password: TOKEN
  > Email: PUBLIC-EMAIL-ADDRESS
  ```
* Publishing packages
  ```
  npm run release
  ```
