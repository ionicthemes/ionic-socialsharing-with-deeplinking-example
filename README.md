## Complete Tutorial in: https://ionicthemes.com/tutorials


### Install plugins
cordova plugin add ionic-plugin-deeplinks --variable URL_SCHEME=demoapp --variable DEEPLINK_SCHEME=https --variable DEEPLINK_HOST=demoapp.com

### Testing Deeplinks in Android
adb shell am start -a android.intent.action.VIEW -d "demoapp://items/1"
adb shell am start -a android.intent.action.VIEW -d "demoapp://about"
