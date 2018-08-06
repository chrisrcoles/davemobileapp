# Bear Sightings Challenge Extra Credit

Dave Mobile App UI for [Bear Sightings Challenge](https://github.com/chrisrcoles/dave-api)

# Solution Outline

Dave Mobile App UI for Bear Sightings Challenge

1. Create a simple UI for submitting and querying bear sightings.

## Run

```npm run start```

# Application Artchitecture

React Native iOS and Android native applications

Directory structure
 - `app/__tests__` - Contains the `tests` scripts 
 - `app/components` - Modular components that can be reused throughout containers
 - `app/containers` - Main views, or screens
 - `app/lib` - Contains utilities resources and helper methods.
 
 # Setting up the Application
 
 1. Platform dependencies must be installed. You will need Node, Watchman, the React Native command line interface, and Xcode.
 - Install [Homebrew](https://docs.brew.sh/Installation)
 - `brew install node`
 - `brew install watchman`
 - `npm install -g react-native -cli`
 
 2. Software dependencies must be install. 
 - `yarn install`
 - `react-native link`
 
 3. Start the app. The application can be started either via the React Native CLI `react-native run-ios`/`react-native run-android` or via the Simulator, found within XCode and Android Studios
 - `npm start`
 
 # Configuring the Application
 
 The file `app/lib/constants.js` contains client-side environment variables.
 
 # Future Iteration Plans
 
 1. Testing. Currently, this application contains no tests. Currently, there is a [Jest bug](https://github.com/storybooks/storybook/issues/3897) that prevents testing with the current app versions.
 2. Deploy. The application is only available for local development. Future plans include deploying the app to a distribution service, e.g. TestFlight, HockeyApp, Expo
 3. Better form validation 
 4. Integrate Redux for better support for application state as scale grows. 
