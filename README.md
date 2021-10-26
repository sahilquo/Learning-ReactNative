# Learning-ReactNative

## Commands Used

* #### Create New Project:
  `npx react-native init <Project Name>`

* #### Start React Native Project for running
  `yarn start`

* #### Run Android app
  `yarn android`

* #### Use Icons in the app ([Reference](https://stackoverflow.com/questions/42420931/how-to-use-react-native-vector-icons))
  `npm install react-native-vector-icons --save`

  `react-native link react-native-vector-icons`

* #### Use Custom Font in the app ([Reference](https://stackoverflow.com/questions/41825276/how-to-add-custom-font-in-react-native-android))
  1. Create a file named `react-native.config.js` in the root folder of your project.
  2. Add this in that new file 
    ```
    module.exports = {
      project: {
          ios: {},
          android: {},
      },
      assets: ['./assets/fonts']
    };
    ```
  3. Run this command
  `npx react-native link`
  
 * #### Install React Navigation Library ([Reference](https://reactnavigation.org/docs/getting-started))
  `npm install @react-navigation/native`
  
  `npm install react-native-screens react-native-safe-area-context`
  
  React Navigation - Stack
  `npm install @react-navigation/native-stack`

