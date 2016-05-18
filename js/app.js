(function () {
  angular.module('portfolio', ['ui.router'])
    .config(MainRouter);

  MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

  function MainRouter($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '_home.html',
        controller: 'MainController',
        controllerAs: 'vm'
      })

    $urlRouterProvider.otherwise('/');
  }
})();
