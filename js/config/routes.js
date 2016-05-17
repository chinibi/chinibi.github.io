(function () {
  angular.module('portfolio')
    .config(MainRouter);

  MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

  function MainRouter($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '_home.html'
      })
      .state('portfolio', {
        url: '/portfolio',
        templateUrl: '_projects.html',
        controller: 'ProjectsController',
        controllerAs: 'pcvm'
      });

    $urlRouterProvider.otherwise('/');
  }
})();