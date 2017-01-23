const projects = [
  {
    title: 'Pacific Family Dental',
    imageURL: '/images/pacificfamilydental.png',
    dates: 'January 2017',
    website: 'http://pacific-family-dental.herokuapp.com',
    tech: ['JavaScript', 'Node.js', 'PostgreSQL', 'React', 'Redux'],
    description: (
      <p>
        An Orange County family dentistry site where patients can schedule their
        appointments online.  This is a React SPA with a Node and Postgres API backend.
        You may view the demo site by clicking the link above.
      </p>
    )
  },
  {
    title: 'CSUN Jazz Studies',
    imageURL: '/images/csunjazz.png',
    dates: 'September 2016',
    website: 'http://csunjazz.com',
    tech: ['Wordpress', 'jQuery'],
    description: (
      <p>
        Collaborated with Electronic Methods to redesign CSU Northridge's
        Jazz Studies website.  Replaced images that served as simple backgrounds, borders,
        and section dividers with CSS to greatly reduce page size.  Rendered the site
        mobile-responsive with CSS media queries and jQuery.  Transplanted a
        slideshow from another project to the site's front page.
      </p>
    )
  },
  {
    title: 'Danny Boy Seeds',
    imageURL: '/images/dannyboyseeds.png',
    dates: 'July 2016',
    website: 'http://dannyboyseeds.com',
    tech: ['Materialize'],
    description: (
      <p>
        My first freelancing project.  Danny Boy Seeds wholesales
        vegetable seeds across the country.
      </p>
    )
  },
  {
    title: 'Guild Wars 2 Inventory Search',
    imageURL: '/images/gw2invsearch.png',
    dates: 'June 2016',
    website: 'http://gw2-inventory-search.herokuapp.com',
    github: 'http://github.com/chinibi/gw2-inventory-search',
    tech: ['Node.js', 'Express', 'AngularJS', 'lodash', 'Bootstrap'],
    description: (
      <p>For players of Guild Wars 2, an online multiplayer
      role-playing game.  This app searches through your account for the
      specified item and tells you which of your characters is holding that
      item.  Yes that's a real API key in the screenshot.  The Guild Wars 2 API
      doesn't contain sensitive account information and is read-only so there's
      little harm in sharing it.</p>
    )
  },
  {
    title: 'The Greenest Badges Ever',
    imageURL: '/images/greenest.png',
    dates: 'May 2016',
    website: 'http://the-greenest-badges.herokuapp.com',
    github: 'http://github.com/chinibi/the-greenest-badges',
    tech: ['Node.js', 'Express', 'MongoDB', 'AngularJS', 'Bootstrap', 'jwt'],
    description: (
      <p>Change your lifestyle and go green by completing a set of
      challenges every week.  Completing a set awards a shiny internet badge.
      Link with friends to compare how many badges you all have.</p>
    )
  },
  {
    title: 'SENTiment',
    imageURL: '/images/sentiment.png',
    dates: 'May 2016',
    website: 'http://sentiment-ga.herokuapp.com',
    github: 'http://github.com/chinibi/sentiment',
    tech: ['Node.js', 'Express', 'MongoDB', 'ejs', 'Bootstrap'],
    description: (
      <div>
        <p>
          Update: As of December 2016 the website is now nonfunctional
          as I have unsubscribed from the IBM Watson API. It is unfortunately not free.
        </p>
        <p>
          This website grabs your tweets from the Twitter API and
          feeds them through a sentiment analyzer run by IBM Watson.  Users can
          select a date range to pull their tweets and share their results through
          Twitter or Facebook.
        </p>
      </div>
    )
  },
  {
    title: 'Whiteboard',
    imageURL: '/images/whiteboard.png',
    dates: 'April 2016',
    website: 'http://wdi-forums.herokuapp.com',
    github: 'http://github.com/chinibi/whiteboard',
    tech: ['Ruby on Rails', 'HTML5 Canvas', 'Bootstrap', 'erb', 'jQuery',
           'SCSS', 'PostgreSQL'],
    description: (
      <p>Whiteboard is an imageboard forum where users can draw on
        their posts. Users can create accounts, threads, and comments.
        The backend is run on Rails.</p>
    )
  },
  {
    title: 'pewpewpew',
    imageURL: '/images/pewpewpew.png',
    dates: 'March 2016',
    website: 'http://chinibi.github.io/pewpewpew',
    github: 'http://github.com/chinibi/pewpewpew',
    tech: ['JavaScript', 'HTML5 Canvas', 'jQuery'],
    description: (
      <p>This Canvas game is inspired by turn-based artillery games
     like Scorched Earth and Worms.  Two players each control a tank and
     compete to hit more targets than the other. Pewpewpew makes heavy use of
     Object constructors to create each entity in the game and has its own
     custom engine for handling physics and collision detection.</p>
    )
  }
];

const Header = React.createClass({
  render: function() {
    return (
      <div className="jumbotron text-center">
        <div className="container">
          <h2>Hello! My name is Trevor and I'm a web developer.</h2>
        </div>

        <div id="header-links" className="container">
          <a className="btn btn-social-icon btn-github" href="https://github.com/chinibi" target="_blank"><span className="fa fa-github"></span></a>
          <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/trevorpham" target="_blank"><span className="fa fa-linkedin"></span></a>
        </div>
      </div>
    );
  }
});

const ProjectList = React.createClass({
  render: function() {

    const projectList = this.props.projects.map((project, index) => {
      return (
        <ProjectListItem
          key={index}
          project={project}
          className="list-inline-item"
        />
      );
    });

    return (
      <div id="portfolio" className="container-fluid">
        {projectList}
      </div>
    );

  }
});

const ProjectListItem = React.createClass({

  render: function() {
    const {project: {
      title, imageURL, dates, website, github, tech, description
    }} = this.props;

    const techList = tech.map((each, index) => {
      return (
        <li className="list-inline-item">
          {each}
        </li>
      );
    });

    return (
      <div className="clearfix project-entry">

        <div className='col-sm-6'>
          <img className="img-responsive img-thumbnail" src={imageURL} />
        </div>

        <div className='col-sm-6'>
          <a href={website} target="_blank"><h2>{title}</h2></a>
          {github ? <a href={github} target="_blank"><small>GitHub</small></a> : null}
          <p>{dates}</p>
          {description}
          <ul className="list-inline">
            {techList}
          </ul>
        </div>

      </div>
    );
  }

});

const Footer = React.createClass({
  render: function() {
    return (
      <div id='footer' className="container text-center">
        <a className="btn btn-social-icon btn-github" href="https://github.com/chinibi" target="_blank"><span className="fa fa-github"></span></a>
        <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/trevorpham" target="_blank"><span className="fa fa-linkedin"></span></a>
      </div>
    );
  }
});

const App = React.createClass({
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
