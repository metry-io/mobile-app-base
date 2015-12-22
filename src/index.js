/*
 * This is the main app file
 * =========================
 *
 * To customize the app, start by adding required components as dependencies
 * of the app. (*1)
 *
 * The second step is to define states in your apps in the states.js file. There
 * are some example states you can uncomment, or just add your own.
 *
 * Set up the config your your states in the app-config.json. In this file you
 * configure things such as news feed urls, grid bidding areas et.c. See each
 * components index.js for info on what properties are configurable.
 *
 * You also need to fill out your Metry client credentials in the
 * auth-config.json file.
 *
 * Last, but not least, you need to create your main navigation in the main.html
 * file.
 *
 */

var angular = require('angular');

// These modules don't expose angular module titles so we need to require them
// to include source code and then add their module name as a dependency of our
// app.
require('../node_modules/angular-i18n/angular-locale_sv.js');
require('../node_modules/ionic-sdk/release/js/ionic.js');
require('../node_modules/ionic-sdk/release/js/ionic-angular.js');
require('angular-gettext');

var appConfig = require('./app-config.json');

angular.module('metry-mobile-app-base', [
  require('angular-ui-router'),
  require('angular-animate'),
  require('angular-sanitize'),
  'ionic',
  'gettext',
  require('energimolnet-ng/src/main-user.js'),
  require('metry-mobile-app-components/init')
  // (*1) Add component dependencies here
])

.config(/*@ngInject*/ function(
  $urlRouterProvider,
  $ionicConfigProvider,
  $compileProvider
) {
  $compileProvider.debugInfoEnabled(false);
  $urlRouterProvider.otherwise('/init');
  $ionicConfigProvider.scrolling.jsScrolling(true);
  $ionicConfigProvider.backButton.text('Tillbaka');
})

.config(require('./states.js'))
.constant('authConfig', require('./auth-config.json'))
.constant('appConfig', appConfig)
.constant('apiBaseUrl', appConfig.apiBaseUrl)

.run(/*@ngInject*/ function(
  $window,
  $state,
  $ionicPlatform,
  $rootScope
) {
  $ionicPlatform.ready(function() {
    // Set up cordova plugins
    if ($window.cordova && $window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }

    if ($window.StatusBar) {
      StatusBar.styleDarkContent();
    }
  });

  // Add event listener for if SDK returns an unauthorized message
  $rootScope.$on('em:loginNeeded', function() {
    $state.go('init');
  });
});
