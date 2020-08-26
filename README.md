# Social Sharing and Deep Linking in Ionic
This repo is part of an Ionic 3 Tutorial where you can learn how to add Social Sharing and Deep Linking to any Ionic Framework Apps. The most common use case for deep links is to share content buried within the navigation tree of the app. 

This ionic 3 example app contains a feed of items that users can Share using Social Sharing Cordova Plugin

[Ionic 3 Tutorial](https://ionicthemes.com/tutorials/about/ionic2-app-with-socialsharing-and-deeplinking)

## Install the app
npm install

## Run the app
ionic serve

## Install plugins
cordova plugin add ionic-plugin-deeplinks --variable URL_SCHEME=demoapp --variable DEEPLINK_SCHEME=https --variable DEEPLINK_HOST=demoapp.com

## Testing Deeplinks in Android
adb shell am start -a android.intent.action.VIEW -d "demoapp://items/1"
adb shell am start -a android.intent.action.VIEW -d "demoapp://about"

### Some info about deep links
A mobile deep link let users share content that's hidden deep inside an app. For example, if you want to send someone a link to a particular t-shirt from an app, you will do so by using a deep link. Without a deep link, your friend will have to find the specific app, open it in the homepage and then find the t-shirt (and hopefully they don’t get lost in the way).

*[Find more ionic tutorials and ionic starter apps](https://ionicthemes.com)*
