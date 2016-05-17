(function () {
  angular
    .module('portfolio')
    .controller('ProjectsController', [ProjectsController])

    function ProjectsController() {
      var vm = this;

      vm.projects = [];

      // project entry format:
      // Title
      // Screenshot URL
      // Dates worked on
      // Website URL
      // GitHub URL
      // Technology used
      // Brief description

      // List of projects
      // add new projects to the top of this list

      vm.projects.push({
        title: 'SENTiment',
        imageURL: 'images/sentiment.png',
        dates: 'May 2016',
        website: 'http://sentiment-ga.herokuapp.com',
        modal: true,
        github: 'http://github.com/chinibi/sentiment',
        tech: ['Node.js', 'Express', 'MongoDB', 'Bootstrap'],
        description: 'This website grabs your tweets from the Twitter API and feeds them through a sentiment analyzer run by IBM Watson.  Users can select a date range to pull their tweets and share their results through Twitter or Facebook.'
      })

      vm.projects.push({
        title: 'Whiteboard',
        imageURL: 'images/whiteboard.png',
        dates: 'April 2016',
        website: 'http://wdi-forums.herokuapp.com',
        github: 'http://github.com/chinibi/whiteboard',
        tech: ['Ruby on Rails', 'HTML5 Canvas', 'Bootstrap', 'PostgreSQL'],
        description: 'Whiteboard is an imageboard forum where users can draw on their posts. Users can create accounts, threads, and comments.  The backend is run on Rails.'
      })

      vm.projects.push({
        title: 'pewpewpew',
        imageURL: 'images/pewpewpew.png',
        dates: 'March 2016',
        website: 'http://chinibi.github.io/pewpewpew',
        github: 'http://github.com/chinibi/pewpewpew',
        tech: ['JavaScript', 'HTML5 Canvas'],
        description: 'This Canvas game is inspired by turn-based artillery games like Scorched Earth and Worms.  Two players each control a tank and compete to hit more targets than the other. Pewpewpew makes heavy use of Object constructors to create each entity in the game and has its own custom engine for handling physics and collision detection.'
      })
    }

})()
