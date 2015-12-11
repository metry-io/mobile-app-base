// This import is handled by the brfs browserify transform. It allows you to
// read local files to plain javascript strings.
var fs = require('fs');

module.exports = /*@ngInject*/ function($stateProvider) {
  // The init state shows the loading screen and login buttons if needed
  // See the index.js file of the init module for configuration details.
  $stateProvider.state('init', {
    url: '/init',
    template: fs.readFileSync(__dirname + '/../node_modules/metry-mobile-app-components/init/init.tmpl.html', 'utf8'),
    controller: 'InitController as ctrl'
  });

  // The main state. This is where you configure your basic app navigation, i.e.
  // should you use tabs or side menu.
  $stateProvider.state('main', {
    abstract: true,
    template: fs.readFileSync(__dirname + '/main.tmpl.html', 'utf8'),
    onEnter: /*@ngInject*/ function($state, UserConfig) {
      if (!UserConfig.isSetup) {
        $state.go('init');
      }
    }
  });

  // The following example states can be uncommented for use in tab-based
  // navigation. Change the view name to your main content area if you want
  // to use sidemenu navigation instead.
//  $stateProvider.state('nordpool', {
//    parent: 'main',
//    url: '/nordpool',
//    views: {
//      'nordpool': {
//        template: fs.readFileSync(__dirname + '/../node_modules/metry-mobile-app-components/nordpool/nordpool.tmpl.html', 'utf8'),
//        controller: 'NordPoolController as ctrl'
//      }
//    }
//  });
//
//  $stateProvider.state('contact', {
//    parent: 'main',
//    url: '/contact',
//    views: {
//      'content': {
//        template: fs.readFileSync(__dirname + '/../node_modules/metry-mobile-app-components/contact/contact.tmpl.html', 'utf8'),
//        controller: 'ContactController as ctrl'
//      }
//    }
//  });
//
//  $stateProvider.state('news', {
//    parent: 'main',
//    url: "/news",
//    views: {
//      'news': {
//        template: fs.readFileSync(__dirname + '/../node_modules/metry-mobile-app-components/news/news.tmpl.html', 'utf8'),
//        controller: 'NewsController as ctrl'
//      }
//    }
//  });
//
//  $stateProvider.state('consumption', {
//    parent: 'main',
//    url: "/consumption",
//    views: {
//      'consumption': {
//        template: fs.readFileSync(__dirname + '/../node_modules/metry-mobile-app-components/consumption/consumption.tmpl.html', 'utf8'),
//        controller: 'ConsumptionController as ctrl'
//      }
//    }
//  });
//
//  $stateProvider.state('settings', {
//    parent: 'main',
//    url: "/settings/:isFirst",
//    views: {
//      'consumption': {
//        template: fs.readFileSync(__dirname + '/../node_modules/metry-mobile-app-components/consumption/settings/settings.tmpl.html', 'utf8'),
//        controller: 'SettingsController as ctrl'
//      }
//    }
//  });
//
//  $stateProvider.state('settings-meter', {
//    parent: 'main',
//    url: '/settings/meter/:type',
//    views: {
//      'consumption': {
//        template: fs.readFileSync(__dirname + '/../node_modules/metry-mobile-app-components/consumption/settings/settings-meter.tmpl.html', 'utf8'),
//        controller: 'MetersController as ctrl'
//      }
//    }
//  });
//
//  $stateProvider.state('price-heat', {
//    url: "/price-heat/:meterId",
//    parent: "main",
//    views: {
//      'consumption': {
//        template: fs.readFileSync(__dirname + '/../node_modules/metry-mobile-app-components/consumption/settings/settings.price-heat.tmpl.html', 'utf8'),
//        controller: 'SettingsPriceHeatController as ctrl'
//      }
//    }
//  });
//
//  $stateProvider.state('price-electricity', {
//    url: "/price-electricity/:meterId",
//    parent: "main",
//    views: {
//      'consumption': {
//        template: fs.readFileSync(__dirname + '/../node_modules/metry-mobile-app-components/consumption/settings/settings.price-electricity.tmpl.html', 'utf8'),
//        controller: 'SettingsPriceElectricityController as ctrl'
//      }
//    }
//  });
//
//  $stateProvider.state('price-electricity-grid', {
//    url: "/price-electricity-grid/:meterId",
//    parent: "main",
//    views: {
//      'consumption': {
//        template: fs.readFileSync(__dirname + '/../node_modules/metry-mobile-app-components/consumption/settings/settings.price-electricity-grid.tmpl.html', 'utf8'),
//        controller: 'SettingsPriceElectricityGridController as ctrl'
//      }
//    }
//  });
//
//  $stateProvider.state('price-electricity-grid-edit', {
//    url: "/price-electricity-grid-edit/:meterId/:calcMetricId",
//    parent: "main",
//    views: {
//      'consumption': {
//        template: fs.readFileSync(__dirname + '/../node_modules/metry-mobile-app-components/consumption/settings/settings.price-electricity-grid-edit.tmpl.html', 'utf8'),
//        controller: 'SettingsPriceElectricityGridEditController as ctrl'
//      }
//    }
//  });
//
//  $stateProvider.state('price-electricity-retail', {
//    url: "/price-electricity-retail/:meterId",
//    parent: "main",
//    views: {
//      'consumption': {
//        template: fs.readFileSync(__dirname + '/../node_modules/metry-mobile-app-components/consumption/settings/settings.price-electricity-retail.tmpl.html', 'utf8'),
//        controller: 'SettingsPriceElectricityRetailController as ctrl'
//      }
//    }
//  });
//
//  $stateProvider.state('price-electricity-retail-edit', {
//    url: "/price-electricity-retail-edit/:meterId/:calcMetricId",
//    parent: "main",
//    views: {
//      'consumption': {
//        template: fs.readFileSync(__dirname + '/../node_modules/metry-mobile-app-components/consumption/settings/settings.price-electricity-retail-edit.tmpl.html', 'utf8'),
//        controller: 'SettingsPriceElectricityRetailEditController as ctrl'
//      }
//    }
//  });
};
