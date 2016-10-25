## Install plugins
cordova plugin add ionic-plugin-deeplinks --variable URL_SCHEME=demoapp --variable DEEPLINK_SCHEME=https --variable DEEPLINK_HOST=demoapp.com

cordova plugin rm ionic-plugin-deeplinks

## Testing Deeplinks
adb shell am start -a android.intent.action.VIEW -d "demoapp://items/1" com.ionicframework.deeplinkingexample597714

adb shell am start -a android.intent.action.VIEW -d "demoapp://about"
