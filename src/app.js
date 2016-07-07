var projects = [
  {
    title: 'Guild Wars 2 Inventory Search',
    imageURL: '/images/gw2invsearch.png',
    dates: 'June 2016',
    website: 'http://gw2-inventory-search.herokuapp.com',
    github: 'http://github.com/chinibi/gw2-inventory-search',
    tech: ['Node.js', 'Express', 'AngularJS', 'lodash', 'Bootstrap'],
    description: "For players of Guild Wars 2, an online multiplayer\
    role-playing game.  This app searches through your account for the\
    specified item and tells you which of your characters is holding that\
    item.  Yes that's a real API key in the screenshot.  The Guild Wars 2 API\
    doesn't contain sensitive account information and is read-only so there's\
    little harm in sharing it."
  },
  {
    title: 'The Greenest Badges Ever',
    imageURL: '/images/greenest.png',
    dates: 'May 2016',
    website: 'http://the-greenest-badges.herokuapp.com',
    github: 'http://github.com/chinibi/the-greenest-badges',
    tech: ['Node.js', 'Express', 'MongoDB', 'AngularJS', 'Bootstrap', 'jwt'],
    description: 'Change your lifestyle and go green by completing a set of\
    challenges every week.  Completing a set awards a shiny internet badge.\
     Link with friends to compare how many badges you all have.'
  },
  {
    title: 'SENTiment',
    imageURL: '/images/sentiment.png',
    dates: 'May 2016',
    website: 'http://sentiment-ga.herokuapp.com',
    github: 'http://github.com/chinibi/sentiment',
    tech: ['Node.js', 'Express', 'MongoDB', 'ejs', 'Bootstrap'],
    description: 'This website grabs your tweets from the Twitter API and\
    feeds them through a sentiment analyzer run by IBM Watson.  Users can\
    select a date range to pull their tweets and share their results through\
    Twitter or Facebook.'
  },
  {
    title: 'Whiteboard',
    imageURL: '/images/whiteboard.png',
    dates: 'April 2016',
    website: 'http://wdi-forums.herokuapp.com',
    github: 'http://github.com/chinibi/whiteboard',
    tech: ['Ruby on Rails', 'HTML5 Canvas', 'Bootstrap', 'erb', 'jQuery',
           'SCSS', 'PostgreSQL'],
    description: 'Whiteboard is an imageboard forum where users can draw on\
    their posts. Users can create accounts, threads, and comments.\
     The backend is run on Rails.'
  },
  {
    title: 'pewpewpew',
    imageURL: '/images/pewpewpew.png',
    dates: 'March 2016',
    website: 'http://chinibi.github.io/pewpewpew',
    github: 'http://github.com/chinibi/pewpewpew',
    tech: ['JavaScript', 'HTML5 Canvas', 'jQuery'],
    description: 'This Canvas game is inspired by turn-based artillery games\
     like Scorched Earth and Worms.  Two players each control a tank and\
     compete to hit more targets than the other. Pewpewpew makes heavy use of\
     Object constructors to create each entity in the game and has its own\
     custom engine for handling physics and collision detection.'
  }
];

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <ProjectList projects={projects} />
        <Footer />
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
